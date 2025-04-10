# AngularLearning

learning angular - test and first application

### MARKDOWN

Commande Rendu
*mot* ou _mot_    mot (italique)  
**mot**    mot (gras)  
***mot***    mot (gras et italique)  
`mot`    mot (monospace)  
<mark>mot</mark>    <mark>mot</mark> (surligné)  
~~mot~~    mot (barré)

### Installation de Angular

installation au niveau globale (-g)

```
npm i -g @angular/cli
```

### Initialisation d'une application

```
ng new premiereApp
```

* choices for this first step :  
  CSS  
  No to SSR

### lancer l'appli

```
npm start
```

* Raccourcis quand le serveur est lancé

```
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
h

  Shortcuts
  press r + enter to force reload browser
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit

```

### Description fichiers

#### compilerOptions

* `outDir` : ./dist/out-tsc - Définit le dossier de sortie pour les fichiers compilés.
* `strict`: true - Active le mode strict, combinant plusieurs vérifications strictes pour améliorer la robustesse du
  code.
* `noImplicitoverride`: true - Exige que les méthodes redéfinies dans une classe enfant soient marquées avec override.
* `noPropertyAccessFromIndexSignature` : true - Empêche l'accès aux propriétés via des signatures d'index sans clé
  explicite.
* `noImplicitReturns` : true - Garantit que toutes les branches d'une fonction retournent une valeur explicite.
* `noFallthroughCasesInSwitch` : true - Évite les cas où une instruction switch passe involontairement d'un cas à un
  autre
  sans break.
* `skipLibCheck` : true - Ignore les vérifications des fichiers de déclaration (.d.ts ) pour accélérer la compilation.
* `isolatedModules` : true - Compile chaque fichier comme un module indépendant.
* `esModuleInterop` : true - Permet une meilleure compatibilité avec les modules CommonJS.
* `experimentalDecorators` : true - Active les décorateurs, une fonctionnalité essentielle pour Angular.
* `moduleResolution` : bundler - Utilise une méthode optimisée pour résoudre les modules dans un environnement de
  bundling.
* `importHelpers` : true - Réduit la duplication en partageant les fonctions générées par TypeScript.
* `target` : ES2022 - Définit la version ECMAScript cible pour le code généré.
* `module` : ES2022 - Spécifie le format des modules (compatible ES2022).

#### angular CompilerOptions

* `enableI18nLegacyMessageIdFormat` : false - Désactive l'utilisation des anciens formats d'identifiants
* `strictInjectionParameters` : true - Force la vérification des paramètres d'injection dans les services et les
  composants.
* `strictInputAccessModifiers` : true - Renforce la vérification des modificateurs d'accès sur les entrées Angular (
  @Input).
* `strictTemplates` : true - Applique des vérifications strictes sur les templates Angular pour détecter les erreurs
  potentielles.

### Fichier angular json

Le fichier angular json est la configuration centrale d'un projet Angular .  
Il gère les paramètres pour les différentes opérations de build, développement, tests, et internationalisation, tout en
définissant les structures et chemins des projets.  
`$schema` : définit le schéma JSON utilisé pour valider ce fichier.  
`version` : version de configuration utilisée par Angular CLI.  
`newProjectRoot` : répertoire racine pour les nouveaux projets ajoutés à cette configuration (par exemple :
projects).  
`projects `: contient les configurations spécifiques à chaque projet (ici, le projet dyma)

#### Informations générales

* `projectType` : application - Indique qu'il s'agit d'une application Angular (pas d'une bibliothèque).
* `root et sourceRoot` : Définissent les dossiers racines et des sources du projet.
* `prefix` : Préfixe pour les sélecteurs de composants (ici app).
  Architect (Plans d'exécution)
  Définit les configurations pour différentes tâches comme la construction, le serveur de développement, ou les tests

#### Build

* `builder` : Utilise @angular-devkit/build-angular: application pour compiler lapplication.
* `options` :
* `outputPath` : Dossier de sortie pour les fichiers compilés (dist/dyma).
* `index` : Fichier HTML principal (src/index.html).
* `browser` : Point d'entrée principal de l'application (src/main.ts).
* `polyfills`: Inclut zone. js pour gérer les zones Angular.
* `tsConfig`: Utilise tsconfig. app. json pour la compilation.
* `assets` : Copie les fichiers du dossier public vers le dossier de sortie.
* `styles` : Liste des fichiers CSS à inclure (ici src/styles. css).
* `scripts` : Scripts supplémentaires (vide ici).
* `configurations` :
* `production` : la configuration production optimise l'application pour le déploiement avec plusieurs options destinées
  à
  réduire la taille des fichiers générés et à améliorer les performances :
* `budgets` : Définit les limites de taille des bundles générés :
* `initial` : Limite pour le bundle initial (avertissement à 500 kB, erreur à 1 MB).
* `anyComponentStyle` : Limite pour les fichiers de style de composants individuels (avertissement à
  4 kB, erreur à 8 kB).
* `outputHashing` : Défini à "all", cette option ajoute un hachage au nom des fichiers générés (par exemple,
  main. [hash]
  .js), ce qui est utile pour le cache-busting des navigateurs.
* `development `: la configuration development est conçue pour accélérer le processus de développement en désactivant
  certaines optimisations utilisées en production.
* `optimization` : false - Désactive l'optimisation du code (comme la minification ou le tree-shaking).
  * `extractLicenses` : false - N'extrait pas les licences des bibliothèques utilisées, pour réduire les temps de
  #### compilation.
  * `sourceMap` : true - Active les fichiers de cartes de sources pour faciliter le débogage dans le navigateur.
  * `defaultConfiguration` : Définit production comme configuration par défaut.
  #### Serve
  * `builder` : Utilise @angular-devkit/build-angular:dev-server pour lancer le serveur de développement.
  * `configurations` : Définit les cibles de build à utiliser pour les modes production et développement.
  * `defaultConfiguration`: Mode development par défaut.
  #### Extract-i18n
  * `Utilise` @angular-devkit/build-angular:extract-i18n pour extraire les messages d'internationalisation.
  #### Test
  * `builder` : Utilise @angular-devkit/build-angular: karma pour exécuter les tests avec Karma.
  * `options` : Inclut zone. js pour le test et les polyfills nécessaires (zone. js/testing).
  * Réutilise les mêmes assets, styles et scripts que pour le build.

### Generer un composant basique

* aller dans le dossier ou le composant va être crée puis :

```
ng generate component

//ou

ng generate component nom_du_composant 

//ou
ng g c <nom-du-composant>
```

ANhular va creer 4 fichiers le fichier de test, le fichier css, le fichier html et le fichier de logique

#### lier le composant et le template :

* **Interpolation ({{}})** : affiche des expressions ou des variables du composant dans le template HTML .
* **Liaison de propriété ou property binding ([])**: lie une propriété du composant à un attribut d'un élément HTML.
* **Liaison d'événement ou event binding (())** : lie un événement utilisateur à une méthode du composant.
* **Double liaison ou two-way binding ([()])**: combine les deux types de liaison pour synchroniser les données entre le composant et le template.

### Générer un composant SFC (Single FIle Component)

il permet de regrouper dans un fichier html, css et logique.   
Utilisé pour des composant court ( moins d e200 lignes). On aura tendance à utiliser le création de composant basique
lorsqu'on a un gros composant.  
pour le générer :

```
ng g c nom_du_composant --inline-template

//ou

ng g c nom_du_composant -t -s --flat --skip-tests

```

Cela créera 1 composant avec le style css (-s) et le template (-t) directement dans le fichier sans créer de dossier (
--flat) et sans fichier de tests

* pour alléger la création de composants on peut prédéfinir les option de création du component dans le fichier
  `angular.json` :

```
 "schematics": {
        "@schematics/angular:component": {
          "flat": true,
          "inlineTemplate": true,
          "inlineStyle": true,
          "skipTests": true
        }
      },
```

la création dvient alors

```
ng g cd c nom_du_composant
```

### Déclaration des variables

```
 import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `
    <ul>
      <li>{{ title + nombre }}</li>
      <li>{{ isLoggedin }}</li>
      <li>{{ nombre }}</li>
      <li>{{ name }}</li>
      <li>{{ 1 + 1 }}</li>
      <li>{{ isLoggedin ? 'connecté' : 'non connecté' }}</li>
      <li>{{ displayName() }}</li>
      <li>{{ user.name }}</li>
    </ul>
  `,
})
export class DymaComponent {
  title = 'Dyma';
  isLoggedin = true;
  nombre = 42;
  name: string | undefined;
  user = {
    name: 'Jean',
  };

  displayName() {
    return 'hello';
  }
}

```

### propriety binding (liaison de propriété) :

permet de lié dynamiquement une varaibel à une propriété :

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `<input [type]="inputType" />`,
})
export class DymaComponent {
  inputType = 'date';

  constructor() {
    setTimeout(() => {
      this.inputType = 'number';
    }, 3000);
  }
}
```

### Event binding (liaison d'évenement)

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `
    <div
      (mouseenter)="displayHi()"
      (click)="exemple($event, 'hi')"
      class="square">
      {{ title }}
    </div>
  `,
  styles: [`
    .square {
      height: 200px;
      width: 200px;
      background-color: red;
    }
  `]
})
export class DymaComponent {
  title = '';

  exemple(event: MouseEvent, title: string) {
    console.log(event);
    console.log(title);
  }

  displayHi() {
    this.title = 'Hi';
  }
}
```

### two way data binding

permet de gérer les input :

```
//exemple sans la directive ngModel :

import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `
    <input type="text" (input)="updateTitle($event)" />
    <br />
    <p>{{ title }}</p>
  `,
})
export class DymaComponent {
  title = '';

  updateTitle(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.title = value;
  }
}
```

```
//exemple avec la directive ngModel

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dyma',
  imports: [FormsModule],
  template: `
    <input type="text" [(ngModel)]="title" />
    <br />
    <p>{{ title }}</p>
  `,
})
export class DymaComponent {
  title = 'Bonjour';
}
```

### Host Binding

Permet de manipuler directement dans le composant et pas dans le parent :

* les attributs sur l'élément hote
* des classes css ajoutées ou supprimées dynamiquement
* des propriété du DOM de l'hote
* des évenements à ecouter

exemple :

```
@Component({
  selector: 'app-exemple',
  host: {
    'role': 'button', // Attribut statique
    '[attr.aria-label]': 'label', // Attribut lié à une propriété
    '[class.active]': 'isActive()', // Classe CSS conditionnelle
    '[disabled]': 'isDisabled', // Propriété DOM
    '(click)': 'onClick($event)', // Événement DOM
  },
  template: `<p>Contenu du composant</p>`,
})
export class ExempleComponent {
  label: string = 'Exemple';
  isDisabled: boolean = false;

  isActive() {
    return !this.isDisabled;
  }

  onClick(event: Event) {
    console.log('Clique détecté !', event);
  }
}
```

### structural directives

* if
  exemple simple

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `
    @if (user.address.city; as city) {
      <h1>Dans une ville : {{ city }}</h1>
    } @else {
      <h1>error</h1>
    }
  `,
  styles: ``,
})
export class DymaComponent {
  user = {
    address: {
      city: 'Paris',
    },
  };
}
```

Exemple complexe

```
@if (temperature > 30) {
  <p>Il fait chaud aujourd'hui : {{ temperature }}°C</p>
} @else-if (temperature < 10) {
  <p>Il fait froid aujourd'hui : {{ temperature }}°C</p>
} @else {
  <p>La température est modérée : {{ temperature }}°C</p>
}
```

exemple avec un référencement d'une variable

```
@if (user.profile.settings.startDate; as startDate) {
  <p>La date de début est : {{ startDate }}</p>
}
```

* Switch

```
@switch (jourSemaine) {
  @case ('lundi') {
    <p>Nous sommes lundi, début de la semaine !</p>
  }
  @case ('mercredi') {
    <p>C’est mercredi, milieu de la semaine !</p>
  }
  @case ('vendredi') {
    <p>Enfin vendredi, c'est presque le week-end !</p>
  }
  @default {
    <p>Profitez de votre journée !</p>
  }
}
```

* For
  La directive track aide Angular à maintenir une correspondance entre les données et les éléments du DOM.  
  Cela réduit les modifications inutiles lorsque les données changent et permet à Angular de mettre à jours uniquement les éléments concernés.

Dans cet exemple la propréité track utilise etudiant.matricule comme identifiant unique pour otpimiser les performances.

```
@for (etudiant of etudiants; track etudiant.matricule) {
  <div>
    <h3>Étudiant : {{ etudiant.nom }}</h3>
    <p>Moyenne : {{ etudiant.moyenne }}/20</p>
  </div>
}
```

Alternative pour Track :

```
@for (categorie of categories; track $index) {
  <p>{{ categorie }}</p>
}
```

VAriables contextuelles :   
On peut apporter un comportement ou un style spécifique en fonciton du contexte :

```
$count : nbre total d'élément dans la collection
$index : index de l'élément en cours
$first : true si l'élément est en primier
$last : true si l'element est le dernier
$even : true si l'élément est pair
$odd : true si l'index est impair
```

On peut aussi utiliser '@empty' dans le cas ou la collection est vide :

````
@for (produit of produits; track produit.reference) {
  <li>{{ produit.nom }}</li>
} @empty {
  <li>Aucun produit disponible en stock.</li>
}
````

exemple d'utilisation :

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `
    <ul>
      @for (user of users; track $index) {
        <li [class.first]="$first" [class.last]="$last">
          {{ user }} | index: {{ $index }} | count: {{ $count }} | first: {{ $first }} | last: {{ $last }} | even: {{ $even }} | odd: {{ $odd }}
        </li>
      } @empty {
        <p>Aucun user</p>
      }
    </ul>
  `,
  styles: `
    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      border: 1px solid #888;
      border-bottom: 0;
    }

    .first {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .last {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom: 1px solid #888;
    }

    .even {
      background-color: #999;
    }
  `,
})
export class DymaComponent {
  users = ['Jean'];
}
```

* variable de références :

#### let

possibilité de déclarer directement une variable dans angular qui sera utilisée dans un contexte template.  
Elle est utilisé pour rendre le code plus lisible (comme le AS)

#### reference

déclarée dans le template html, elle permet d'accederà un DOM ou à un composant enfant depuis le template.  
exemple let :

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `
    @let a = b;
    <button (click)="b = b + 1">+1</button>
    <h1>{{ a }}</h1>
  `,
  styles: ``,
})
export class DymaComponent {
  b = 0;
}
```

exemple reference :

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  template: `
    <button (click)="test(moninput)">test</button>
    <input type="text" #moninput />
  `,
  styles: ``,
})
export class DymaComponent {
  test(moninput: HTMLInputElement) {
    console.log(moninput.value);
  }
}
```

