---
layout: lesson
title: Routing and Templates
slides: ['_slides/week-05/03-service-factory-provider.md']
date: 2015-10-21
---

## Pre-Work

Ensure you have most (or all) of the HTML and SCSS completed for project 4.
Visit and watch the following Pluralsight course:
- http://www.pluralsight.com/courses/angularjs-get-started (routing videos only)
- http://www.pluralsight.com/courses/angularui-fundamentals (ui-router video only)
- http://www.pluralsight.com/courses/angular-routing-in-depth

---

## Learning Objectives

Today we'll Learn how to use Angular-UI's router module to navigate between the paes of our application, and load the appropriate Templates and Controllers for each page.

---

## Keywords

- HTML5 PushState
- `$state`
- `$urlRouteProvider`
- `$locationProvider`
- `$stateProvider`
- `$stateChangeStart`
- `$stateChangeSuccess`
- `templateUrl`
- `controllerAs`

---

## Exercise 1

Before we begin, we'll need to make sure we have completed the 2 basic forms in our application.
We'll take the form code that we wrote in yesterday's exercises and adapt it to our project's requirements.

Step 1: Modify the for code written yesterday so to match your project requirements. <br>
Step 2: Copy and paste the code into your project's html pages. <br>
Step 3: Copy the controller code into a new controller on your application module. <br>

---

## Exercise 2

Once We've completed copying the form code, we can begin to refactor the HTML we've written into Angular Templates.
Each HTML page will become a Template page in our application, that we'll navigate to in our application.

Step 1: Create a new index.html file with an empty body tag that looks like this.`<body ui-view></body>`
Step 2: In your View files, remove all of the html outside of the body tag. <br>
Step 3: Change the `<body>` tag to a `<div>` and give it a class that relates to the page (eg. `class="homepage"`) <br>
Step 4: Create 4 folders in your application, named after your new views, and move each modified HTML file into it's respective directory.


---

## Exercise 3

We're now ready to create our routing code!

Step 1: Add angular-ui javascript to your project (visit: https://github.com/angular-ui/ui-router)
Step 2: Add ui-router as an application dependency, by adding the ui-router module to your main app module: <br>

```js
	angular.module('marsapp', ['ui.router']) //added ui.router dep
```
Step 3: Create an empty config block after your app module declaration, that shoul look something like this: <br>

```js
	angular.module('marsapp', ['ui.router'])
		// add routing dependencies
	.config(['$stateProvider',
			 '$urlRouterProvider',
			 '$locationProvider',
			// javascript doesn't mind if we do this!
			function($stateProvider,
					$urlRouterProvider,
					$locationProvider){

					// add all routing code here!

			}]);
```

Step 4: add the following at the top of your new config module function: <br>

```js
	$locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
```

Step 5: Create a 'catch all' route to redirect users when they try to visit a url that is not defined. Add the following code to your new config module: <br>

```js
	 $urlRouterProvider.otherwise('/');
```

Step 6: We're ready to create our routes! Add the following route definition to your new config module: <br>

```js

	 $stateProvider
            .state('home', {
                url: '/',
                // Your new view folder for this page
                templateUrl: 'app/welcome/welcome.html',
                // You'll define a new controller per page!
                controller: 'HomeCtrl',
                // this is how you'll refrence your controller in html
                controllerAs: 'homepage'
            })
```

<br>

Once you're here, we'll add the rest of the routes manually, as a class! Good luck!

---

## Lab Activity

In today's lab we'll continue working on Project 4 and complete this exercise:

### JS Exercise

#### Looping a Triangle

Write a loop that makes seven calls to console.log to output the following triangle:

```html
#
##
###
####
#####
######
#######
```

It will be useful to remember that you can find the  length of a string by writing `.length` after it.

```js
var abc = "abc";
console.log(abc.length);
// → 3
```

**Hints:**

You can start with a program that simply prints out the numbers 1 to 7, which you can derive by making a few modifications to the even number printing example given earlier in the chapter, where the `for` loop was introduced.

Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (`+= 1`). You can go from "#" to "##" by adding a character (`+= "#"`). Thus, your solution can closely follow the number-printing program.

---

## Additional Resources

*Resources TBA...*
