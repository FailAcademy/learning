---
layout: lesson
title: Building Forms with Angular 2
slides: ['_slides/week-08/04-components-directives-forms.md']
lesson_date: 2016-08-25
---

## Pre-Work

Prior to class, please read through the Angular documentation on forms:

- [Forms - ts](https://angular.io/docs/ts/latest/guide/forms.html)

---

## Learning Objectives

- Create a form to capture user input using Angular's built-in directives.
- Validate form input and display feedback to the user when invalid information is entered.
- Bind form input to model data in an Angular component using 2-way data binding.

---

## Keywords

- 2-way data binding
- Template variable
- Computed Property
- Data Contract
- `[(ngModel)]`
- `ngControl`
- `ngSubmit`

---

## Exercise 1

Set up your component Class by importing the required models/interfaces, and creating the necessary properties.
Instantiate a new *empty* Colonist model in the constructor function and assign it to the property you defined.

---

## Exercise 2

Bind the other inputs in the form. To see the model properties as they are updated,
add `{% raw %}{{ colonist.name }}{% endraw %}` ...etc to your template. You should see the values update as you type!

---

## Lab Activity

Now that we know how to create a basic form using Angular 2. We'll spend the rest of the class adding the required functionality to the rest of the forms in our project!

---

## Additional Resources

In-depth tutorial about how to use forms in Angular 2, covering things that will not be covered in class:

- [NGBook Guide to forms](http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/)

Free video tutorial about how to use select menus with Angular 2:

- [Build a select dropdown with *ngFor in Angular 2](https://egghead.io/lessons/angular-2-build-a-select-dropdown-with-ngfor-in-angular-2)
