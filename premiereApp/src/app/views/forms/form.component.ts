import {Component, effect} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <form class="w-half" [formGroup]="userForm" (submit)="submit()">
      <div class="flex flex-col mb-10">
        <label for="lastName">Nom</label>
        <input formControlName="lastName" type="text" id="lastName">
      </div>
      <div class="flex flex-col mb-10">
        <label for="firstName">Prénom</label>
        <input formControlName="firstName" type="text" id="firstName">
      </div>
      <div class="flex flex-col mb-10">
        <label for="email">Email</label>
        <input formControlName="email" type="text" id="email">
      </div>
      <div class="flex flex-col mb-20">
        <label for="password">Mot de passe</label>
        <input formControlName="password" type="password" id="password">
      </div>
      <button class="btn btn-primary">Sauvegarder</button>

    </form>
    <pre class="w-half">{{ userForm.value | json }}</pre>
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
  userForm = new FormGroup({
    lastName: new FormControl('', {nonNullable: true}),
    firstName: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true})
  })

  events = toSignal(this.userForm.events);
  // suivre els evenemnt lié à une value
  valueChanges = toSignal(this.userForm.valueChanges);
  // suivre les evenement liés à un status
  statusChanges = toSignal(this.userForm.statusChanges);

  eventsEff = effect(() => {
    console.log(this.events());
  })


  ngOnInit() {
    const firstNameControl = this.userForm.get('firstName')
    console.log('iciii', firstNameControl);
    firstNameControl?.disable();
  }

  submit() {
    console.log(this.userForm.value);
    console.log(this.userForm.getRawValue());
    // désactive tous les champs
    this.userForm.disable();
    setTimeout(() => {
      // acitve les chamops sous 3 sec
      this.userForm.enable();
      // patch une value
      this.userForm.patchValue({
        email: 'jean@live.fr',
      })
    }, 3000)
    setTimeout(() => {

      this.userForm.reset();
    }, 5000)
  }
}
