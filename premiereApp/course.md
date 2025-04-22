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

### Création de fichiers

```
ng g c nomCOmposant

ng g d nomDirective

ng g s nomService
```

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

### Signals

Pourquoi les signaux ?

* Pour développer une interface utilisateur ( UI ) complexe, les développeurs d'applications
  JavaScript doivent stocker, calculer et synchroniser l'état vers la couche de vue de
  l'application de manière efficace.

* Les UI impliquent souvent plus que la simple gestion de valeurs simples, mais souvent le
  rendu d'un état calculé dépendant d'un arbre complexe d'autres valeurs ou d'états
  également calculés.
* L'objectif des signaux est de fournir une infrastructure pour gérer cet état
  d'application afin que les développeurs puissent se concentrer sur la logique métier plutôt
  que sur ces détails répétitifs.

* Les signaux sont utilisés dans la programmation réactive pour éliminer le besoin de gérer
  les mises à jour dans les applications, en offrant un modèle de programmation déclaratif
  basé sur les changements d'état.
  En d'autre terme, les signaux permettent d'améliorer les performances et de simplifier la
  réactivité.

Voici l'ensemble des objectifs des signaux exprimés par l'équipe d' Angular :

* Modèle clair et unifié pour le flux de données dans une application.
* Support intégré pour l'état dérivé déclaratif.
* Synchronisation des parties de l'UI qui nécessitent une mise à jour, avec une granularité
  au niveau des composants individuels.
* Interopérabilité avec des bibliothèques réactives telles que RxJS .
* Meilleure gestion pour éviter les erreurs courantes de performance de la détection des
  changements et les erreurs telles
  que ExpressionChangedAfterItHasBeenChecked .
* Pouvoir créer des applications entièrement sans zone ( zoneless )
  , éliminant les problématiques de zone.js .
* Simplification de nombreux concepts du framework, tels que les requêtes et les hooks
  de cycle de vie.

#### Qu'est-ce qu'un signal ?

Les signaux sont des valeurs réactives qui permettent de notifier des consommateurs
lorsque leur valeur change.

Les signaux peuvent contenir n'importe quelle valeur, des primitives aux structures de
données complexes.

On lit la valeur d'un signal en appelant sa fonction getter, ce qui permet à Angular de
suivre où le signal est utilisé.

Les signaux peuvent être soit modifiables, soit en lecture seule.

Nous allons voir une brève introduction générale des signaux puis rentrer en détail dans
leur utilisation dans les leçons suivantes.

#### Création d'un signal

Pour créer un signal, on utilise la fonction signal en lui fournissant une valeur initiale.
La valeur actuelle du signal est obtenue en l'appelant comme une fonction.
Pour modifier cette valeur, si le signal est modifiable, les méthodes .set() ou
.update() sont disponibles.

```
import { signal } from '@angular/core';

const compteur = signal(0); // Création d'un signal avec une valeur initiale de 0
console.log(compteur()); // Affiche la valeur actuelle : 0

compteur.set(1); // Met à jour la valeur à 1
console.log(compteur()); // Affiche la nouvelle valeur : 1
```

#### Signaux dérivés

Les signaux dérivés, créés avec la fonction computed, permettent de générer une
nouvelle valeur basée sur d'autres signaux.

Ils sont recalculés automatiquement lorsque leurs dépendances changent.

```
import { signal, computed } from '@angular/core';

const largeur = signal(5);
const hauteur = signal(10);
const aire = computed(() => largeur() * hauteur()); // Signal dérivé calculant l'aire

console.log(aire()); // Affiche 50

largeur.set(7);

console.log(aire()); // Affiche 70 après mise à jour de la largeur
```

#### Effets

Les effets, définis via la fonction effect, exécutent une fonction chaque fois que les
signaux dont ils dépendent changent.

Ils sont utiles pour des opérations telles que la journalisation ou la synchronisation avec
des API externes.

```
import { signal, effect } from '@angular/core';

const message = signal('Bonjour');

effect(() => {
  console.log(`Message mis à jour : ${message()}`);
});

message.set('Bonsoir'); // Déclenche l'effet et affiche "Message mis à jour : Bonsoir"
```

#### Synchroniser les signaux avec des sources externes

Le linkedSignal est une fonctionnalité qui permet de lier un signal à une source
externe.

Cela signifie que le signal est automatiquement mis à jour lorsqu'une fonction ou une
source de données change. Il est utile pour synchroniser l'état local avec des propriétés
calculées ou d'autres états réactifs.

#### Gérer des données asynchrones

La fonction resource d' Angular est conçue pour gérer des données asynchrones,
comme des appels API ou des fichiers chargés dynamiquement.

Elle offre un moyen de suivre l'état de la ressource (chargement, réussite ou échec) et
d'intégrer facilement ces états dans les templates.

Une resource est créée à l'aide de la fonction resource et peut écouter un signal ou
une fonction asynchrone.

#### Syntaxe basique signal

```
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-compteur',
  template: `
    <h1>Compteur : {{ compteur() }}</h1>
    <button (click)="incrementer()">+1</button>
    <button (click)="reinitialiser()">Réinitialiser</button>
  `,
})
export class CompteurComponent {
  compteur = signal(0); // Signal modifiable initialisé à 0

  incrementer() {
    this.compteur.update((valeurActuelle) => valeurActuelle + 1); // Incrémente la valeur
  }

  reinitialiser() {
    this.compteur.set(0); // Réinitialise la valeur à 0
  }
}
```

### signal effect()

Exemples :

Journalisation des modifications. Enregistrer chaque modification d'un compteur dans une console :

```
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-compteur',
  template: `
    <h1>Compteur : {{ compteur() }}</h1>
    <button (click)="incrementer()">+1</button>
    <button (click)="decrementer()">-1</button>
  `,
})
export class CompteurComponent {
  compteur = signal(0);

  constructor() {
    effect(() => {
      console.log(`La valeur du compteur a changé : ${this.compteur()}`);
    });
  }

  incrementer() {
    this.compteur.update((val) => val + 1);
  }

  decrementer() {
    this.compteur.update((val) => val - 1);
  }
}
```

Synchronisaiton avec un local storage :

```
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  template: `
    <label for="nom">Nom :</label>
    <input id="nom" [(ngModel)]="nom" />
    <p>Nom enregistré : {{ nom() }}</p>
  `,
})
export class FormulaireComponent {
  nom = signal('');

  constructor() {
    effect(() => {
      localStorage.setItem('nomUtilisateur', this.nom());
      console.log(`Nom enregistré dans le localStorage : ${this.nom()}`);
    });
  }
}
```

suivi en temps réel d'une api :

```
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-produit',
  template: `
    <label for="produit">ID Produit :</label>
    <input id="produit" type="number" [(ngModel)]="idProduit" />
    <h2>Détails du produit</h2>
    <pre>{{ produit() | json }}</pre>
  `,
})
export class ProduitComponent {
  idProduit = signal(1); // ID du produit sélectionné
  produit = signal({}); // Données du produit

  constructor() {
    effect(() => {
      const id = this.idProduit();
      fetch(`https://api.exemple.com/produits/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.produit.set(data);
        })
        .catch((err) => console.error('Erreur de récupération :', err));
    });
  }
}
```

### View Child / Children

les fonctions viewchild et viewchildren permettent d'accéder aux éléments du DOM ou aux composants enfants depuis la classe d'un composant parent.  
Ils sont essentiels pour interagir directement avec des éléments du template, que ce soit pour manipuler des proprites, appeler des méthodes ou modifier le dom.

* viewchild()
  permet de sélectionner un élément unique.  
  utile lorsqu on doit interagir avec un composant enfant spécifique ou un élément du dom précis.

exemple : Acc&éder à un champ texte du template

```
import { Component, ElementRef, AfterViewInit, computed, effect, viewChild } from '@angular/core';

@Component({
  selector: 'app-exemple',
  template: `
    <input #monInput type="text" placeholder="Tapez quelque chose..." />
  `,
  styles: []
})
export class ExempleComponent implements AfterViewInit {
  monInput = viewChild<ElementRef<HTMLInputElement>>('monInput');

  ngAfterViewInit() {
    effect(() => {
      const inputElement = this.monInput()?.nativeElement;
      if (inputElement) {
        inputElement.focus();
      }
    });
  }
}
```

viewChild permet d'obtenir une référence réactive à l'élément input

* viewChildren()
  permet de récupérer une liste d'enfants sous forme de signa réactif.

exemple : on souhaite appliquer une meme action a chaque paragraphe

```
import { Component, ElementRef, AfterViewInit, computed, effect, viewChildren } from '@angular/core';

@Component({
  selector: 'app-exemple',
  template: `
    <p #paragraphe>Paragraphe 1</p>
    <p #paragraphe>Paragraphe 2</p>
    <p #paragraphe>Paragraphe 3</p>
  `,
  styles: []
})
export class ExempleComponent implements AfterViewInit {
  paragraphes = viewChildren<ElementRef<HTMLParagraphElement>>('paragraphe');

  ngAfterViewInit() {
    effect(() => {
      this.paragraphes()?.forEach((p) => {
        p.nativeElement.style.color = 'blue';
      });
    });
  }
}
```

### Ng Content

permet d'intégrer du contenu dans un composant.  
Exemple : on creer un carte qui pourra être réutilisable et dont le contenu pour etre changé en fcontion de la situation :

```
import {Component} from '@angular/core';

@Component({
  selector: 'app-ng-content',
  imports: [],
  template: `
    <p class="card">
      <ng-content/>
    </p>
  `,
  styles: `
    .card {
      border: 1px solid #7e22ce;
      border-radius: 4px;
      padding: 16px;
    }`
})
export class NgContentComponent {

}


```

exemple plus complexe :

dans le composant enfant :

```
template: `
    <div class="card">
      <div class="title">
        <ng-content select=".title"/>
      </div>
      <div class="content">
        <ng-content select=".content"/>
      </div>
      <div class="default">
        <ng-content select=".default">Contenu par défaut dans le cas ou il n'ya pas de class defaut dans le parent
        </ng-content>
      </div>
    </div>
  `,
  styles: `
    .card {
      border: 1px solid #7e22ce;
      border-radius: 4px;
      padding: 16px;
    }

    .content {
      color: #7e22ce;
    }

    .title {
      color: red;
      font-weight: bold;
    }`,
```

dans le parent :

```
  template: `
    <app-ng-content>
      <h1 class="title">HelloWorld !</h1>
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam architecto asperiores assumenda culpa
        cupiditate deleniti deserunt, dolore earum eligendi eum expedita id maiores mollitia optio quisquam tempore
        velit voluptas!
      </p>

    </app-ng-content>
    <app-ng-content>
      <h1>Hello World !</h1>
      <button>Click me</button>
    </app-ng-content>
```

Autre exemple de projection multiple sans apsser par la classe :

```
//composant enfant 

import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-profil',
  template: `
    <div class="carte">
      <div class="en-tête">
        <ng-content select="[en-tête]"></ng-content>
      </div>
      <div class="corps">
        <ng-content></ng-content>
      </div>
      <div class="pied-de-page">
        <ng-content select="[pied-de-page]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .carte {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .en-tête, .pied-de-page {
      background-color: #f1f1f1;
      padding: 12px;
    }
    .corps {
      padding: 16px;
    }
  `]
})
export class CarteProfilComponent {}
```

```
//composant parent 

<app-carte-profil>
  <div en-tête>
    <h2>Jean Dupont</h2>
  </div>
  <p>Développeur passionné par les technologies web modernes.</p>
  <div pied-de-page>
    <button>Contactez-moi</button>
  </div>
</app-carte-profil>
```

### @Defer

va permettre de différer le chargement de certains composant dans une page.  
il sera alors possible de conditionner le chargement :

* soit à la fin de chargement de l apage
* soit sur une action du client (click par exemple)
* soit sur le view port (lorsqu'on atteint la partie a charger en scrollant)
* au passage de la souris sur le composant à charger
* ...

iil est possible de mettre un place holder le temps du chargement et / ou un loader

voir les options :

https://angular.fr/template-syntax/defer

### rendu dynamique d'un composant

il est possible de charger et d'afficher dynamiquement un composant lorsqu'on en a besoin.

methode 1 : choix d'un composant en fonciton d'un evenement

```
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBioComponent } from './admin-bio.component';
import { StandardBioComponent } from './standard-bio.component';

@Component({
  selector: 'app-profil-utilisateur',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Profil de l'utilisateur</h2>
    <ng-container *ngComponentOutlet="composantBio"></ng-container>
  `,
})
export class ProfilUtilisateurComponent {
  estAdmin = true;

  get composantBio() {
    return this.estAdmin ? AdminBioComponent : StandardBioComponent;
  }
}
```

methode 2 chargement spécifique d'un composant suite à un evenement :

```
import { Component, ViewContainerRef, inject } from '@angular/core';

@Component({
  selector: 'app-conteneur-dynamique',
  template: `<button (click)="chargerComposant()">Charger le composant</button>`,
})
export class ConteneurDynamiqueComponent {
  private viewContainerRef = inject(ViewContainerRef);

  async chargerComposant() {
    const { ComposantDynamiqueComponent } = await import('./composant-dynamique.component');
    this.viewContainerRef.createComponent(ComposantDynamiqueComponent);
  }
} 

```

### Directives attribut et structurelle

* Attribut :   
  va permettre de changer des attributs d'un composant qui va réagir par rapport a une ou des méthodes de l'attribut
* Structurelle :
  va permettre de changer et/ou de conditionner l'affichage d'un composant

### Pipes

se sont des opératuers spéciaux utilisés dans les expressions de template pour transformer les donnees de manière déclaratives.  
On peut ainsi transformer directement des templates pour améliorer la lisibilité et la réutilisabilité du code.

#### Syntaxe

on applique le pipe `|` (shift + option + L) dans un template angular

```
<p>{{ message | uppercase }}</p>
```

Passer un argument :

```
<p>{{ today | date:'fullDate' }}</p>

//today est une variable de type date
// fullDay est un argument qui définit le format date 
```

autre exemple pour passer un argument :

```
<p>{{ price | currency:'EUR':'symbol-narrow':'1.2-2' }}</p>

price est un nombre
EUR indique la devise 
Symbol-narrow specifie l'utilisation d'un symbol €
1.2-2 configure le format des décimales (1 chiffre mini, 2 maxi
```

Possibilité de chainer plusieurs pipes :

```
<p>{{ amount | currency:'USD':'symbol' | uppercase }}</p>
```

Liste des pipes dans Angular :  
https://v17.angular.io/api?type=pipe

### Resource

la fonction sert a suivre, charger et réagir à des données asynchrones. notament pour les appels api ou les données dépendantes d'autres resources.

une resource peut :

* charger des données via un loader (asynchrone)
* reagir aux changement de dépendances via un request
* fournir des données utiles pour gérer l'état de données (value, isloading error etc...)

structure de la resource :

```
resource<T>({
  loader: async (): Promise<T> => { /* Chargement des données */ },
  request?: signal<T>, // Dépendance réactive optionnelle
});
```

exemple de structure :

```
import { Injectable, signal } from '@angular/core';
import { resource } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  BASE_URL = 'https://api.exemple.com/todos';

  todosResource = resource({
    loader: async () => {
      const response = await fetch(this.BASE_URL);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des tâches.');
      }
      return response.json();
    },
  });

  reloadTodos() {
    this.todosResource.reload();
  }
}
```

`loader` fonction asynchrone pour charger les données
`request` dépendance réactive pour déclencher le rechargement des données d'une valeurs dynamique

exemple avec dependances :

```
import { Injectable, signal } from '@angular/core';
import { resource } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  BASE_URL = 'https://api.exemple.com/todos';
  selectedTodoId = signal<string | null>(null);

  selectedTodoResource = resource({
    request: this.selectedTodoId,
    loader: async (id) => {
      if (!id) return null;
      const response = await fetch(`${this.BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de la tâche.');
      }
      return response.json();
    },
  });

  selectTodo(id: string) {
    this.selectedTodoId.set(id);
  }
}
```

#### Resource details

dans le cas ou la resource depend de plusieurs dépendances  :

```
selectedTodoIdResource = resource({
    request: this.selectedTodoId,
    loader: async ({request}): Promise<Todo | undefined> => {
      if (request) {
        return (await fetch(`${this.BASE_URL}/${request}`)).json();
      } else {
        return;
      }
    }

  })
  
  devient 
  
  selectedTodoIdResource = resource({
    request: () => ({
      id: this.selectedTodoId()
    }),
    loader: async ({request: {id}}): Promise<Todo | undefined> => {
      if (id) {
        return (await fetch(`${this.BASE_URL}/${id}`)).json();
      } else {
        return;
      }
    }
```

* les méthodes des resources sont les suivantes :
  reload() : force l'execution du loader meme si request n'a pas changé
  set (value) : definit la valeur manuellement
  clear() : réinitialise la ressource à l'état Idle en supprimant et en arretant les chargements en cours
  update ((value)=>{})

### Formulaires

* formulaire de base :

```
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

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
        <label for="firstname">Prénom</label>
        <input formControlName="firstName" type="text" id="firstname">
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
      a/*border: 1px solid green;*/
    }`
})
export class xxxxx {
  userForm = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  submit() {
    console.log(this.userForm);

  }
}

```

* pour récuperer une valeur

```
    console.log(this.userForm.value);
    
    ou 
    
    console.log(this.userForm.getrawValue());


  ```
