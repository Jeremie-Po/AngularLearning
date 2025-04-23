import {Component, effect, inject} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';

interface UserForm {
  lastName: FormControl<string>,
  firstName: FormControl<string>,
  email: FormControl<string>,
  password: FormControl<string>,
  secret?: FormControl<string>
}

function notPaul(control: AbstractControl): { [s: string]: boolean } | null {
  const value = control.value;
  if (value === 'paul') {
    return {
      paul: true,
    }
  } else {
    return null;
  }
}

async function fiftyPercents(control: AbstractControl): Promise<{ [s: string]: boolean } | null> {
  const {answer} = await (await fetch('https://yesno.wtf/api')).json();
  if (answer === 'yes') {
    return null;
  } else {
    return {
      fifty: true
    }
  }

}

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <form class="w-half" [formGroup]="userForm" (submit)="submit()">
      <div class="flex flex-col mb-10">
        <label for="lastName">Nom</label>
        <input formControlName="lastName" type="text" id="lastName">
        @let lastNameError = userForm.get('lastName')!;
        @if (lastNameError.hasError('required') && lastNameError.touched) {
          <p class="error"> Le champ est obligatoire </p>
        } @else if (lastNameError.hasError('minlength') && lastNameError.touched) {
          <p class="error"> Le champ doit faire 4 char </p>
        }
      </div>
      <div class="flex flex-col mb-10">
        <label for="firstName"> Prénom </label>
        <input formControlName="firstName" type="text" id="firstName">

        @let firstNameError = userForm.get('firstName')?.errors;
        @if (firstNameError?.['paul'] && lastNameError.touched) {
          <p class="error"> Pas de paul</p>
        } @else if (firstNameError?.['fifty'] && lastNameError.touched) {
          <p class="error"> c'est non ! </p>
        }
      </div>
      <ng-container formGroupName="local">
        <div class="flex flex-col mb-10">
          <label for="email"> Email </label>
          <input formControlName="email" type="text" id="email">
          @let email = userForm.get('local.email')!;
          @if (email.errors?.['email']) {
            <p class="error">il faut un email valide</p>
          }
        </div>
        <div class="flex flex-col mb-20">
          <label for="password"> Mot de passe </label>
          <input formControlName="password" type="password" id="password">
        </div>
      </ng-container>
      <!--      @if (userForm.contains('secret')) {-->
      <!--        < div class = "flex flex-col mb-20" >-->
      <!--          < label for = "secret" > Secret < / label >-->
      <!--          < input formControlName = "secret" type = "text" id = "secret" >-->
      <!--          < / div >-->
      <!--      }-->
      <div formArrayName="hobbies" class="flex flex-col mb-20">
        <label>Hobbies</label>
        <button (click)=addHobby() class="mb-10 btn btn-primary"> Ajouter un hobby</button>
        @for (hobby of hobbies.controls; track $index) {
          <div class=" flex gap-16 mb-10" [formGroupName]="$index">
            <input class="flex-auto " type="text" formControlName="name">
            <select formControlName="skill">
              <option value="noob">Débutant</option>
              <option value="average">Moyen</option>
              <option value="Pro">Fort</option>
            </select>
            <button (click)="deleteHobby($index)" class="btn btn-danger">Delete</button>
          </div>
        }
      </div>
      <button class="btn btn-primary"> Sauvegarder</button>
    </form>
    <pre class="w-half"> {{ userForm.value | json }}</pre>
  `,
  styles: `
    :host {
      display: flex;
      width: 100%;
      max-width: 900px;
      margin: auto;
      padding: 24px;
      gap: 25px;
      /*border: 1px solid green;*/
    }`
})
export class FormComponent {
  fb = inject(FormBuilder);

  userForm = this.fb.group({
    lastName: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    firstName: ['', notPaul, fiftyPercents],
    local: [{
      email: new FormControl('', Validators.email),
      password: new FormControl('', {nonNullable: true})
    }],
    hobbies: this.fb.array([]),
  })

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.fb.group({
      name: [''],
      skill: [''],
    });

    // permet de prendre le controle sur un index
    // this.hobbies.at()
  }

  deleteHobby(index: number) {
    this.hobbies.removeAt(index);

  }

  // events = toSignal(this.userForm.events);
  // suivre els evenemnt lié à une value
  // valueChanges = toSignal(this.userForm.valueChanges);
  // suivre les evenement liés à un status
  // statusChangs = toSignal(this.userForm.statusChanges);

  eventsEff = effect(() => {
    console.log(this.userForm);
    //   console.log(this.valueChanges());
    //   const value = this.valueChanges()!;
    //   const secretControl = this.userForm.contains('secret')
    //   if (value?.firstName === 'secret' && !secretControl) {
    //     this.userForm.addControl('secret', new FormControl('secret', {nonNullable: true}))
    //   } else if (value?.firstName !== 'secret' && secretControl) {
    //     this.userForm.removeControl('secret');
    //   }
  })


  // ngOnInit() {
  //   const firstNameControl = this.userForm.get('firstName')
  //   console.log('iciii', firstNameControl);
  //   firstNameControl?.disable();
  // }

  submit() {
    // console.log(this.userForm.value);
    // console.log(this.userForm.getRawValue());
    // // désactive tous les champs
    // this.userForm.disable();
    // setTimeout(() => {
    //   // acitve les chamops sous 3 sec
    //   this.userForm.enable();
    //   // patch une value
    //   this.userForm.patchValue({
    //     email: 'jean@live.fr',
    //   })
    // }, 3000)
    // setTimeout(() => {
    //
    //   this.userForm.reset();
    // }, 5000)
  }


}
