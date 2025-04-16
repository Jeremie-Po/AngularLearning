import {Directive, inject, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appInputStructurelle]'
})
export class InputStructurelleDirective {
  //récupération du ngTemplate c a d de l'élément qui possede la directive avec l'étoile
  templateRef = inject(TemplateRef);

  //objet spécial qui permet d'ajouter des choses dans l'arbre des composants angular (ajout de composants et de templates)
  viewContainerRef = inject(ViewContainerRef);

  constructor() {
    // Cas 1 :on cree une view avec le template ref et on lui ajoute une valeur qui peut ensuite
    //etre récupérée par le composant lui même
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      hello: 'world',
    })
  }

}
