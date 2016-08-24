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

1. Introduce the browser history API
2. Introduce the Angular Router
3. Add Routes to our app!

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

# How is this done?

#### The Browser History API
"The DOM window object provides access to the browser's history through the history object. It exposes useful methods and properties that let you move back and forth through the user's history, as well as -- starting with HTML5 -- manipulate the contents of the history stack."

-- MDN, [Browser History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)


---

# Exercise 1

Create a demo application the manipulates the Browser's history. Your app should have 4 pages with a write up or description
of each history method, and use JavaScript to navigate between pages.

Your mini app should use the following methods: `back`, `forward`, `go`, `pushState`, `replaceState`

---
template: inverse

# Angular Router

---

# Route Definition File

```js
// Routing modules
import { Routes, RouterModule } from '@angular/router';

// Components to render
import { HomeComponent }  from './home';
import { ReportComponent }    from './report';

// Route definitions (The urls your app will use)
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportComponent }
  // ...etc
];


// User defined directives
export const appRoutingProviders: any[] = [

];

// Export!
export const routing = RouterModule.forRoot(appRoutes);
```

---

# Exercise 2

Create a Route Definition file for your Angular app. Place a file called `app.routes.ts` in the `/app` directory
(The same directory as `app.component.ts`).

**Question**: How is the main component (root url '/') defined in your Route Definition file?

---

# Main Application Module.

Once your root definition file is finished we can add routes to our main application module.

```js
// ...
 imports:      [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers:    [
    HTTP_PROVIDERS,
    appRoutingProviders,
  ],
// ...
```

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
