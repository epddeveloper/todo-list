# TodoList
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


style toDo component template, add item edition, add list service

To Do:
- fix edition
-chenge colors from scss files to color variables file
- debug in ng lint
-create backend

-exercise postman

-write tests
-learn ngrx




Login to h2 database:
spring.datasource.username=ela
spring.datasource.password=tododb123



pyhton:
1.run virtual env: 
    .\.env\Scripts\activate

2.go to todolist folder on started environment and 3

3.run srver: python manage.py runserver

4. load data form fixtures to database
python manage.py loaddata todolist/fixtures/initial_data.json

5. migrations: python manage.py migrate,
manage.py makemigrations
