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
