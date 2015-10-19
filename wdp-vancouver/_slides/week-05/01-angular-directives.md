---
layout: slidedeck
title: AngularJS Directives Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Directives

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Daily JS Exercise
2. Review Angular's built-in directives
3. Create our first directive.

---

#Daily JS

---

#What is a 'Directive'

"At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. Much like you create controllers and services, you can create your own directives for Angular to use..."

.footnote[source: Angular docs]

---

# Types of directives

```html
<!-- This is the preferred way  -->
<my-dir></my-dir>
<span my-dir="exp"></span>

<!-- This is rarely used  -->
<!-- directive: my-dir exp -->
<span class="my-dir: exp;"></span>
```

Angular "compiles" your HTML. When it sees a directive, it attaches the behavior you've defined to it!

Best Practice: Prefer using the dash-delimited format (e.g. ng-bind for ngBind). If you want to use an HTML validating tool, you can instead use the data-prefixed version (e.g. **data-ng-bind** for ngBind). 

.footnote[source: Angular docs]

---

template: inverse

#Built in Directives
Attribute directives

---

#ng-src

```html
<h1>Wrong Way</h1>
<img src="{{imgSrc}}" />
<h1>Right way</h1>
<img ng-src="{{imgSrc}}" />
```
Angular blocks the browser from loading the image until your HTML has been compiled.

.footnote[timeout network tab demonstration]

---

#ng-href

```html
<!-- Always use ng-href when href includes an {{ expression }} -->
<a ng-href="{{myHref}}">I'm feeling lucky, when I load</a>
<!-- href may not load before user clicks -->
<a href="{{myHref}}">I'm feeling 404</a>

```
Angular ensures that your expression has been evaluated before the user clicks.

---

#ng-class

```html

<div ng-controller="LotteryController">
  <div ng-class="{red: x > 5}" ng-if="x > 5">
  You won!
  </div>
  <button ng-click="x = generateNumber()" ng-init="x = 0">
    Draw Number
  </button>
  <p>Number is: {{ x }}</p>
</div>

```
Dynamically set the class of an element depending on a scope value.

---

#ng-disabled

```html
<textarea ng-disabled="isDisabled">Wait 5 seconds</textarea>
```

```js

angular.module('myApp', [])
  .run(function($rootScope, $timeout) {
      $rootScope.isDisabled = true;
      $timeout(function() {
      $rootScope.isDisabled = false;
  }, 5000);
});

```

Disable input elements based on a true/false value for a $scope property.


---

#ng-checked

```html
<label>someProperty = {{someProperty}}</label>
<input type="checkbox"
       ng-checked="someProperty"
       ng-init="someProperty = true"
       ng-model="someProperty">
```

Bind the presence of the checked attribute to a $scope value.

---

#ng-selected

```html
<label>Select Two Fish:</label>
<input type="checkbox" ng-model="isTwoFish"><br/>
<select>
  <option>One Fish</option>
  <option ng-selected="isTwoFish">Two Fish</option>
</select>
```

Bind the presence (or not) of the selected attribute.

---

template: inverse

#Built in directives
non-attribute directives

---

#ng-app

```html
<html ng-app="myApp">
  <body>
  {{ someProperty }}
  <button ng-click="someAction()"></button>
  </body>
</html>
```

```js
angular.module('myApp', [])
  .run(function($rootScope) {
    $rootScope.someProperty = 'hello computer';
    $rootScope.someAction = function() {
    $rootScope.someProperty = 'hello human';
  };
});
```

---

#ng-controller
Angular controllers **provide a child scopes** for the directives that are nested inside.
"A child $scope is simply a JavaScript object that prototypically inherits methods and properties from
its parent $scope(s), including the application's $rootScope."

Some things to keep in mind: 

- It’s important to not to set a primitive value (string, boolean, or number) directly on the
$scope of a controller. Data in the DOM should always be attached to an object
`(eg. props.name )`.

---

#ng-include
Use ng-include to **fetch, compile, and include** an external HTML fragment into your current
application. 

```html
<div ng-include="views/myTemplate.html"
     ng-controller="MyCtrl">
</div>
```

Some things to consider:
- CORS rules apply.
- ng-include creates a child $scope that **does not inherit** unless the controller is declared on the element itself.

---

#ng-if
```html
<div ng-if="2 + 2 === 5">
    DOM is removed
</div>
<div ng-if="2 + 2 === 4">
  DOM is rendered
</div>
```

Some things to consider: 
- The $scope for elements that are hidden with ng-if is completely destroyed (unlike show/hide)
- The element itself is reset on every show hide (so it will loose any external modifications, like from jQuery)

---

#ng-show / ng-hide

```html
<div ng-show="2 + 2 == 5">
  2 + 2 isn't 5, don't show
</div>
<div ng-show="2 + 2 == 4">
  2 + 2 is 4, do show
</div>
<div ng-hide="2 + 2 == 5">
  2 + 2 isn't 5, don't hide
</div>
<div ng-hide="2 + 2 == 4">
  2 + 2 isn't 5, do hide
</div>
```

Behind the scenes, Angular uses a special css class to set `display:none;` on hidden elements.
(Let's take a look)

---

#ng-switch

```html
<input type="text" ng-model="person.name" />
<div ng-switch on="person.name"></div>
<p ng-switch-default>And the winner is</p>
<h1 ng-switch-when="Mandi">{{ person.name }}</h1>
```
https://docs.angularjs.org/api/ng/directive/ngSwitch

---

#ng-change

```html
<div ng-controller="PersonCtrl">
  <input type="text"
         ng-model="person.name"
         ng-change="change()" />
  <p>{{ person.nameGreeting }}</p>
</div>
```

```js
angular.module('myApp', [])
.controller('PersonCtrl', function($scope) {
  // assign $scope props to parent object!
  $scope.person = {};
  $scope.change = function() {
    if($scope.person.name.length > 5){
      $scope.person.nameGreeting = $scope.person.name + " Looooong name!"
    }
  };
});
```

This directive evaluates the given expression when the input changes and has to be used with `ng-model`.

---

#ng-click

```html
<button ng-click="countUp($event)" ng-init="count=0">
  Increment
</button>
<span>
  count: {{count}}
</span>
```

```js
angular.module('myApp', [])
.controller('CountCtrl', function($scope) {
    $scope.countUp = function($event){
      // we have access to the event object, should we need it!
      $event.preventDefault();
    }
});
```

"...Specify custom behavior when an element is clicked!"

.footnote[source: Angular docs]

---

#ng-repeat
"The ngRepeat directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key."

Inside the repeated element we have access to the following special values
- $index
- $first
- $middle
- $last
- $even
- $odd

---

#ng-repeat cont...

Iterating over Arrays
```html
  <div ng-repeat="value in myObj"> ... </div>
```
<br>

Iterating over Objects
```html
  <div ng-repeat="(key, value) in myObj"> ... </div>
```
*JS Gotcha: 
Various browsers implement Object property sorting in different ways. The order of object properties isn't guaranteed when iterating!

---

#ng-repeat cont...

"By default, ngRepeat does not allow duplicate items in arrays. 
If you do need to repeat duplicate items, you can substitute the default tracking behavior with your own using the track by expression.

```html
<div ng-repeat="num in [42, 42, 43, 43] track by $index">
  {{n}}
</div>
```
or more commonly:

```html
<div ng-repeat="model in collection track by model.id">
  {{model.name}}
</div>
```

.footnote[source: Angular docs]

---

#ng-repeat cont...

"Repeat a series of elements by defining explicit start and end points by using ng-repeat-start and ng-repeat-end respectively.

```html
<header ng-repeat-start="item in items">
  Header {{ item }}
</header>
<div class="body">
  Body {{ item }}
</div>
<footer ng-repeat-end>
  Footer {{ item }}
</footer>
```

.footnote[Input: ['A', 'B'], source: Angular docs]

---

template: inverse

# Questions?

{% endhighlight %}
