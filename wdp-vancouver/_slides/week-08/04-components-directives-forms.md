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

2. Enhance the form using Angular. (2-way data-binding and directives).

3. Implement a select menu input using `ngFor`.

4. Add validation and data-binding to all the forms in our project.


---

# The Markup

To begin we'll start with a simple HTML form. (This is the sign-in form for your project).
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

Angular's built-in form handling directives are magic. To kick off the goodness.
In your sign-in / register component add the following import statement:
```js
import { NgForm } from '@angular/common'
```
That's it! Angular creates and attaches an NgForm directive to the `<form>` tag automatically.
---
# Controlling Forms

**From the Angular Docs**<br/>
'The NgForm directive supplements the form element with additional features. It holds the controls (form inputs) we created for the elements with `ngControl` attributes and monitors their properties including their validity. It also has its own valid property which is true only if every contained control is valid.'
<br/>
#### **We'll come back to this.**
---
template: inverse

#Forms and Data

---
# Data Models

The form we are creating is related to 2 Models in our application:

- `Colonist` & `Occupation`

We'll be creating a new `Colonist` by gathering input from the form fields, and we'll be listing all 
of the available `Occupations` in the select menu, for the new colonist to choose.

---

# The API Data Contract

**The Colonist** <br/>
To create a new Colonist in our application's database we'll POST some JSON in the following format:
```json
{
    "colonist" : {
        "name" : "Mackenzie",
        "age" : "33",
        "job_id" : "1"
    }
}
```

All of the fields must be present in the request, and must contain valid values.
This is (loosely) what is meant by 'Data Contract'.

---

# Putting It All Together

Add model data to our component Class. Create 2 public properties to hold the data. Use the Data models we created
to add type information.

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
**Note:** <br/>
Import and **inject** the `Router` instance if you have not yet done so.

---

# Putting It All Together

What is this?
```js
this.NO_OCCUPATION_SELECTED
```
We'll need a default value to display in our select menu before the user has selected
and occupation from it. Declare a new property on your Class to hold this value.
This type of value is called a [String Constant](http://stackoverflow.com/questions/5786054/how-to-declare-string-constants-in-javascript).

```js
public NO_OCCUPATION_SELECTED = '(none)'
```
We'll use this value in the Component's template later.

---

# 2-Way Data Binding

```js
this.colonist = new Colonist('','', this.NO_OCCUPATION_SELECTED);
```

2-Way data-binding is Angular's secret sauce. We'll be *binding* the values of our
Colonist Class attributes (name, age, occupation) to our form inputs. Initially we want the
inputs to be blank so the user can provide values. This is why we initialize the Colonist Model with
empty fields.

---

# API Services

Next we'll need to populate the list of occupations for the user to select. First import and inject the
services we created.

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

template: inverse

# Questions?

{% endhighlight %}
