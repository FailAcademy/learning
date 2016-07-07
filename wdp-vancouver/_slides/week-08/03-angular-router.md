---
layout: slidedeck
title: Angular 2 Router Slides
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

**Note!**

We're building an SPA (Single Page Application). Our application uses a single static HTML file to display all of it's content.

When routes in our application change **no request to the server is made!** Instead, Angular is dynamically rendering content, and changing the URL.

---

# Generate a Route

To generate a route using the Angular CLI, run this command:

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

The generator has also created a folder called (in the case where we generated a route called home) `/+home` with an empty Component, template and css files. The '+' indicates the Component's code will be **lazy loaded**.

---

#What Was Generated?

Inside your main application Component's template, the router outlet component has been added.

```html
<router-outlet>

	<!-- Angular renders Component templates into this element! -->

</router-outlet>
```

When an end-user visits the /home url, Angular will render the HomeComponent's template into this element.

---

# Exercise 1

Prepare to use the Angular Router:

1. Add the `ROUTER_PROVIDERS` to your application's bootstrap method.
2. Add the Angular Component [lifecycle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html) `ngOnInit` to your main application Component.

We'll use this method to trigger rendering of the homepage Component when your application loads.

---
template: inverse

# Router Directives

---

# Router Directives

Once the router has been added, we need a way to navigate around our app without triggering a request to the server.

We can still use the `<a>` tag to do this, but we must redefine it's behaviour using an Angular directive.

In the main application Component's template add links to your component pages
using the `routerLink` directive:

```html
<!-- For example -->
<a [routerLink]="['/register']">link to register page</a>

```

*Note how quotation marks are used.*

---

# Router Directives

The `routerLink` directive will not work unless you add the `ROUTER_DIRECTIVES` bundle
to the component in where the template contains this directive.

This is how **all** directives work in Angular 2.

```js
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
//  ... component definition

directives: [ROUTER_DIRECTIVES]

// ...

```

---

# What We've Learned

- How routes work in an Angular app
- How to add routes using the Angular CLI

---

template: inverse

# Questions?

{% endhighlight %}
