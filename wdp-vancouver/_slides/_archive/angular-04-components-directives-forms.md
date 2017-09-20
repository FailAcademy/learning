---
layout: slidedeck
title: Building Forms with Angular 2
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Building Forms with Angular 2

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Code a simple HTML form
2. Enhance the form using Angular (using 2-way data-binding and directives)
3. Implement a select menu input using `ngFor` and computed properties
4. Add validation and data-binding to all the forms in our project

---
template: inverse

# The Set-up

---

# The Markup

To begin we'll start with a simple HTML form. This is the sign-in form for your project.

```html
<form>
	<fieldset>
		<input type="text" placeholder="Name" required>
		<input type="number" placeholder="Age" required>
		<div class="custom-select">
			<select required>
				<option value="(none)">Select an Occupation</option>
			</select>
		</div>
	</fieldset>
	<fieldset>
			<button type="submit">Submit</button>
	</fieldset>
</form>
```


---
# Controlling Forms

Angular's built-in form handling directives are magic. To kick off the goodness, in your main application module, add the following import statement:

```js
import { FormsModule }   from '@angular/forms';
```

---
# Controlling Forms

Once we've imported the `FormsModule` we must add it to our main application module's imports array:

```js
// ...
  imports: [
    BrowserModule,
    FormsModule
  ],
// ...
```

---

template: inverse

# Forms and Data

---

# Data Models

The form we are creating is related to two Models in our application:

- `Colonist`
- `Occupation`

We create a new `Colonist` by gathering input from the form fields, and we'll list all of the available `Occupations` in the select menu, for the new colonist to choose.

---

# The API Data Contract

**The Colonist** :

To create a new Colonist in our application's database we'll `POST` some JSON in the following format:

```json
{
    "colonist" : {
        "name" : "Mackenzie",
        "age" : "33",
        "job_id" : "1"
    }
}
```

All of the fields must be present in the request, and must contain valid values. This is (loosely) what is meant by **Data Contract**.

---

# TypeScript Classes

The first thing we'll need to do is set up our component classes to work with our data models. Here is the simple pattern we'll follow when adding data to our component classes:

**Step 1:**

```js
// Declare a property and assign a type.
class MyClass {
	someProperty: any
}
```

This is similar to writing: `const someProperty = undefined;`

---

# TypeScript Classes

**Step 2:**

```js
// Import some data, create a constructor function,
// and assign your data!

import { myData } from '/models'

class MyClass {
	someProperty: any

	constructor(){
		this.someProperty = myData
	}
}

```

Assigning `t` a value in the constructor creates an instance property.

---

# Exercise 1

Set up your component class by importing the required models/interfaces, and creating the necessary properties.

Instantiate a new *empty* Colonist model in the constructor function and assign it to the property you defined.

---

# Putting It All Together

Let's add model data to our Component Class. Create two public properties to hold the data. Use the data models we created to add type information.

```js
// Other imports ...
import { Colonist } from '/shared/models'
// ... etc

// Inside your Component Class, declare these public properties:
public occupations: IOccupation[];
public colonist: Colonist;
// ...etc

```

---

# Putting It All Together

Now that we have declared our model data, we'll need to assign values.

Modify the component's constructor function to look like this:

```js
constructor(private router: Router) {
    this.colonist = new Colonist('','', this.NO_OCCUPATION_SELECTED);
}
```
**Note:** Import and **inject** the `Router` instance if you have not yet done so.

---

# Putting It All Together

**What is this?**

```js
this.NO_OCCUPATION_SELECTED
```

We'll need a default value to display in our select menu before the user has selected and occupation from it. Declare a new property on your Class to hold this value. This type of value is called a [String Constant](http://stackoverflow.com/questions/5786054/how-to-declare-string-constants-in-javascript).

```js
public NO_OCCUPATION_SELECTED = '(none)'
```

We'll use this value in the Component's template later.

---

# Two-Way Data Binding

Two-way data-binding is Angular's secret sauce. We'll be *binding* the values of our Colonist Class attributes (name, age, occupation) to our form inputs:

```js
this.colonist = new Colonist('','', this.NO_OCCUPATION_SELECTED);
```

Initially the inputs are blank. The user will provide values. This is why we initialize the Colonist model with empty fields.

---

# API Services

Next we'll need to populate the list of occupations for the user to select. First import and inject the services we created:

```js
constructor(
	private router: Router,
    private colonistService: ColonistService,
    private occupationService: OccupationService
){
    this.colonist = new Colonist('','', this.NO_OCCUPATION_SELECTED);

	// Call the API using the service to GET occupations!
	occupationService.getJobs().then(jobs => this.occupations = jobs);
}
```

**Note:** Don't forget to import. You may have given your services and service methods different names.

---

# Putting It All Together

Now that we have set up our component's data models, and we're storing the relevant information
on properties of our Component Class, it's finally time to link the data to the HTML template!

---

# Input Controls

To control our form's inputs (in our case we'll be checking check for valid values),
we'll need to modify the form with the following **attribute directives**:

```html
<form #arrivalForm="ngForm">
```

```html
<input name="name" type="text" required>
```

```html
<input name="age" type="number" required>
```

**Note:** We'll manually validate the select input, so it is not necessary to add controls!

---

# Template Variables

This first line assigns a **Template Variable** (a variable that contains a value the
we can reference from inside the template.)

```html
<form #arrivalForm="ngForm">
```

The "ngForm" value magically links this form to the `NgForm` Class we imported earlier.
This is the first step in linking the form template with our Component Class!

---

#Input Controls

These input controls tell Angular which inputs in the markup it should pay attention to.
The attribute values we assign ( `="name"`, `="age"`) will become properties on the `#arrivalForm` object:

```html
<input name="name" type="text" required>
```

```html
<input name="age" type="number" required>
```

These properties are objects, and they contain information about the state of the input. This is how we'll check for the input's validity.

---

# Input Controls

Once we've told Angular which inputs to control, it will add and remove specific classes:

```html
<input name="name" type="text" required>
```

In the case of our inputs, they are invalid if they are empty. Angular reads the `required` attribute and takes action.

"Inspect element" on the form inputs in your browser. Observe classes being added and removed as you type into the inputs!

*What are some of the class names being added and removed?*

---

# Binding Model Data

We're now ready to (finally) bind the model data we assigned in our Component Class to the form we created. To do this we'll use another attribute directve: `[(ngModel)]`

```html
<input [(ngModel)]="colonist.name" name="name" ... >
```

Here we **bind** the value of the input to our colonist model!! When the user enters some input, the model property will update with that value. Two-ay data-binding at work!

---

# Exercise 2

Bind the other inputs in the form. To see the model properties as they are updated,
add `{% raw %}{{ colonist.name }}{% endraw %}`, etc. to your template. You should see the values update as you type.
---

# Select Menus

There is more than one way to manipulate the value of a select menu in Angular. We'll use the [simplest method](https://egghead.io/lessons/angular-2-build-a-select-dropdown-with-ngfor-in-angular-2).

First add the model binding:
```html
<select [(ngModel)]="colonist.job_id">
```

We know that the data contract requires that we send only the `id` of the job we want to assign to the new Colonist, so we'll bind to that property.

---

# Select Menus

Next, add an option to represent 'no occupation selected'. For this we'll use the **String Constant** we created earlier.

```html
<select [(ngModel)]="colonist.job_id" name="job_id">
	<option value="NO_OCCUPATION_SELECTED"> ... </option>
</select>
```

This will populate our Colonist class with the value contained in the String Constant. We'll check if the Colonist model has this value to determine if the user has selected a job.

This is how we will validate this input.

---

# Select Menus

Finally, create an option element for each job, using the data we retrieved from the API:

```html
<select [(ngModel)]="colonist.job_id" name="job_id">
	<option value="NO_OCCUPATION_SELECTED"> ... </option>
	<option *ngFor="let o of occupations" [value]="o.id">
		{% raw %}{{o.name}}{% endraw %}
	</option>
</select>
```

The value attribute of the `option` in the `select` menu is what is bound to the model value.
Here, we're iterating over the list of occupations we retrieved from the API using `*ngFor`, and assigning the `id` to the value attribute. We'll display the occupation name as the option text using template strings.

---

# Simple Validation

Our form should not let the user submit unless all of the information is entered. For our text inputs this is done by adding the `required` attribute. We'll manually check the value of `colonist.job_id` to determine if a job is selected.

If all the inputs are valid, the user will be able to submit the form. We'll control this by disabling the button in the case of invalid inputs:

```html
<button [disabled]="!arrivalForm.form.valid" type="submit">
	Submit
</button>
```

---

# Simple Validation

Validating the entire form is simple with Angular! We simply check the `arrivalForm` template variable we assigned earlier:

```html
<button [disabled]="!arrivalForm.form.valid" type="submit">
	Submit
</button>
```

 Angular magically adds an updates this object with information about our form as the user modifies the inputs!

---

# Computed Properties

To check the value of the select menu we'll use a Computed Property.
Inside of your Component Class declare the following method:

```js
get noOccupation() {
	return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
}
```

Take note of the `get` prefix on this method. Once defined we can use this computed property in our template.

---

#Computed Properties

The button should now be disabled, until the user fills in the form:

```html
 <button [disabled]="noOccupation || !arrivalForm.form.valid"  ... >
	 Submit
</button>
```

We can now add the computed property to the conditional statement that is disabling our submit
button. Notice that although we defined a method, we can access the value without invoking the method ( no `()` ). When the computed property is accessed, the method is invoked automatically, and the computed value is returned.

---

#Submitting the Form

Submitting the form will be handled by an Angular event handler. Add the following to your form template:

```html
  <form (ngSubmit)="onSubmit()" #arrivalForm="ngForm">
```

Now we'll need to define the `onSubmit` method we've assigned to the event handler.

This method will use a service to `POST` the form data to the API, and save our new Colonist!

---

# Submitting the Form

Here is the fully implemented `onSubmit` method!

```js
onSubmit(){
	this.colonistService
		.newColonist(this.colonist)
		.then(colonist => {
			this.router.navigate(['/encounters']);
		})
		.catch(error => {
			// TODO: Handle error
		});
}
```

If the request succeeds, we'll use the router to navigate to the next page.

---

# Mission Accomplished

We've achieved a data-bound form that validates its inputs, conforms to our API's data-contract and submits information to an API using services that we created!

We've also seen how Angular adds information to our template, in the form of `class`es and
also to a special Template Variable.

How can we use what we've learned to further enhance the UX (User Experience) of this form? What is missing?

---

# What We've learned

- How to build an Angular-powered form in a web app
- How to implement a `select` menu with `ngFor`
- How to validate data in our form inputs
- How to bind form inputs to model data using two-way data binding

---
template: inverse

# Questions?

{% endhighlight %}
