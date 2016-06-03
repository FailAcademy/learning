---
layout: slidedeck
title: Using the Angular 2 Router Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Using the Angular 2 Router

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Introduce the Angular Router

2. Add Routes to our app using the Angular CLI

3. Begin to write the CSS and HTML for our Application.

---

template: inverse

# Adding Routes

---
# Adding Routes

To create an application that has more than one page (URL) of content, we'll need to accomplish 2 things:

1. The URL in the browsers address bar should change when our application changes pages.
2. URLs need to be mapped to the top level Component we would like to show at those URLs.

---

# Adding Routes

##Note:<br/>
We're building an SPA (Single Page Application). Our application uses a single static HTML file to display all of it's content.
When routes in our application change **no request to the server is made!** Instead, Angular is dynamically rendering content,
and changing the URL.<br/>

---
# Generate a Route

To generate a route using the Angular CLI issue this command:

`ng generate route [route name]`<br/>

Where `route name` is the name of the route we want to create.<br/>

---
#What Was Generated?

Inside of your main application Component, the generator has imported the necessary files,
and added our first route!

```js
import { /*router imports */ } from '@angular/router';

// ... @Component Decorator ...

@Routes([
  { path: '/home', component: HomeComponent}
])

// ... Component Class ...
```

The generator has also created a folder called (In the case where we generated a route called home) **/+home**
With an empty Component, template and css files! (the '+' indicates the Component's code will be **lazy loaded**!)

---

#What Was Generated?

Inside your main application Component's template, the router outlet component has been added!
```html
	<router-outlet>

		<!-- Angular renders Component templates into this element! -->

	</router-outlet>
```
When an end-user visits the /home url, Angular will render the HomeComponent's template into this element!

---
# Exercise 1

Prepare to use the Angular Router.

1. Add the `ROUTER_DIRECTIVES` and `ROUTER_PROVIDERS` to your application's bootstrap method.
[Look here for instructions](https://angular.io/docs/ts/latest/guide/router.html).

2. Add the Angular Component [lifecycle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html) `ngOnInit` to your main application Component. 
We'll use this method to trigger rendering of the homepage Component when your application loads.

---

template: inverse

# Router Directives

---
#Router Directives

Once the router has been added, we need a way to navigate around our application without triggering a request to the server.
We can still use the `<a>` tag to do this, but we must redefine it's behavior using an Angular directive. <br/>

In the main application Component's template
```html

```

---

template: inverse

---

template: inverse

# Questions?

{% endhighlight %}
