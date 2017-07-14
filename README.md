# Grease-Monkey
#### The Messy Motorcycle Maintenance Members Only Club Official Website

This project was built using [Angular CLI](https://github.com/angular/angular-cli), [Angular 2](https://angular.io/), [Typescript](https://www.typescriptlang.org/), [Firebase](https://firebase.google.com/), [Bower](https://bower.io/), [NPM](https://www.npmjs.com/) and Bootstrap for an Epicodus Solo Project 7/14/17.

## Component Checklist

| Component | Completed? |
|---|---|
| home page | X |
| about page | X |
| persistent data | X |
| list members | X |
| click member to see details | X |
| filter members | X |
| ADMIN: add new members | X |
| ADMIN: edit members | X |
| ADMIN: delete members | X |
| list all bikes in member-detail page | X |
| MEMBER: add new bike |  |
| MEMBER: edit bikes |  |
| MEMBER: delete bike |  |
| deployment |  |
|---|---|

## Wishlist

+ Show all bikes in member detail page

## Project Build
Download from the [repo](https://github.com/GrapeSalad/Grease-Monkey.git)
Run `ng -v` to ensure than your Angular is version 4.

| If Not Run One of these Commands |
| --- |
| For Windows |
|`npm install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save` |
| For Linux/Mac |
|`npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@next --save` |

Run `npm install` to install all dependencies with Node Package Manager, then `bower install` to install the styling dependencies.

You will need a [Firebase API](https://firebase.google.com/) key to run this code.
This key will need to be saved in the src/app/api-keys.ts file following this schema:

`export var masterFirebaseConfig = {` <br>
&nbsp;&nbsp;&nbsp;&nbsp;`apiKey: "##",` <br>
&nbsp;&nbsp;&nbsp;&nbsp;`authDomain: "##",` <br>
&nbsp;&nbsp;&nbsp;&nbsp;`databaseURL: "example.com",` <br>
&nbsp;&nbsp;&nbsp;&nbsp;`projectId: "##",` <br>
&nbsp;&nbsp;&nbsp;&nbsp;`storageBucket: "##",` <br>
&nbsp;&nbsp;&nbsp;&nbsp;`messagingSenderId: "##"` <br>
`};`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Credits

This project was built and is maintained by [David Wilson](https://github.com/GrapeSalad)
For any bugs and issues please message me on Github.

#### License

Built using the MIT license.

Copyright (c) 2017 **David Wilson**
