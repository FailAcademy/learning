---
layout: slidedeck
title: Working with Animation and Forms in jQuery Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Working with Animation and Forms in jQuery

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Creating animation effects with jQuery
2. Working with HTML forms with jQuery
3. Putting it all together...

---
template: inverse

# jQuery Magic Show: Animating Elements

---

# Animation with jQuery

jQuery makes it easy to bring a webpage to life with animation. It offers many animation methods out of the box, including:

- `.show()`
- `.hide()`
- `.fadeIn()`
- `.fadeOut()`
- ...and many more!

---

# Show/Hide Effect

```javascript

```

# Show/Hide Effect

```javascript

```

---

# Effects and Events

- event.preventDefault();

---
template: inverse

# HTML Forms & jQuery

---
class: center, middle

### First things first...

What actually happens when you submit a form on the web?

---

# The Server Side

We already learned that JavaScript is a programming language for writing client-side scripts.

In most cases, when a user submits a form on a web page we want to send that data to server, and likely save it in a database there too.

We can use HTML forms as tools to collect information from users on the **client-side** (their browser) and submit that data to the **server side** (our web server) using the **HTTP protocol**.

---
class: center, middle

![HTTP request diagram](../../public/img/slide-assets/http-request-diagram.svg)

---

# Hold Up!

We're not going to dig into server-side scripting languages like PHP or databases like MySQL in this course...

So for our purposes we'll just be learning about what happens in the browser during this process, and simulating the rest.

---
class: center, middle

### Souping Up Your Forms with JQuery

jQuery has some special features that make it much easier to work with and enhance HTML forms.

---

# Form Element Selectors

jQuery has special selectors that allow you to easily grab onto form elements, some of which include*:

- `:checkbox`
- `:input`
- `:focus`
- `:selected`
- `:submit`

.footnote[.red[ * ] You can find a complete list of these selectors on page 342 of your text book.]

---

# The .val() Method

The `.val()` method allows you get or set the value entered into a form element:

```javascript
// Get the text string currently entered into the input:
$('input:text').val();

// Set a new value for the input by passing in a string:
$('input:text').val('A new value');

// Clear out an input by passing empty quotes into .val():
$('input:text').val('');
```

---

# The .is() Method

You can also use jQuery to figure out if a checkbox is checked:

```javascript
if ( $('input:checkbox').is(':checked') ) {
   console.log('The checkbox is checked.');
} else {
   console.log('The checkbox isn\'t checked.');
}
```

---

# Forms and Events

We can also use jQuery's `.on()` method to handle a variety of HTML form-related events:

- `blur`
- `change`
- `focus`
- `selected`
- `submit`

---

# Gotcha Alert!

You may have noticed that there are both `:focus` and `:submit` selectors, and `focus` and `submit` events.

Keep in mind that the former are for **finding** the focused element or submit element in the DOM, while the latter are for **detecting when** an input/select element is focused or a form is submitted.

---

# To Clarify...

You select the submit element like this:

```javascript
$('input:submit');
```

You detect when the form has been submitted like this:

```javascript
$('#my-form').on('submit', function() {
   // Do things on submit here...
});
```

---

# Form Event Example

Let's take a closer look at how we can use the `submit` event:

```html
<form id="my-form">
   <input type="text" id="my-text-input" />
   <input type="submit" />
</form>
```

```javascript
$('#my-form').on('submit', function(event) {
   event.preventDefault();

   if ( $('#my-text-input').val() == '' ) {
      alert('You missed the field.');
   } else {
      alert('Thanks for filling the field!');
   }
});
```

---

# Form Event Example

Note that you can also write the previous code using `submit` as the actual method as follows:

```javascript
$('#my-form').submit(function(event) {
   event.preventDefault();

   if ( $('#my-text-input').val() == '' ) {
      alert('You missed the field.');
   } else {
      alert('Thanks for filling the field!');
   }
});
```

However, using `submit` with the `.on()` method permits the use of event delegation.

---
# The .change() Method

Similarly, we can also detect when a user chooses an option in a select menu using the change event:

```html
<select id="my-select-menu">
   <option value="">-- Pick an option --</option>
   <option value="option1">Option 1</option>
   <option value="option2">Option 2</option>
</select>
```

```javascript
$('#my-select-menu').on('change', function() {
   var selected = $(this).val('');

   if ( selected !== '' ) {
      console.log('The value you picked is: ' + selected);
   }
});
```

---

# Animating Forms

Last but not least, we can use jQuery effects to selectively show form elements based on values of other elements.

You can hide inputs by setting them to `display: none`:

```html
<style>
   label[for="fixins"], #fixins {
     display: none;
   }
</style>

<form id="food-order">
   <input type="checkbox" id="hamburger" />
   <label for="hamburger">Yes, I would like a hamburger</label>

   <label for="fixins">What would you like on your hamburger?</label>
   <input type="text" id="fixins" />
</form>
```

---

# Animating Forms

And then conditionally show those elements when the user completes another form field:

```javascript
$('#hamburger').on('change', function() {
   if ( $(this).is(':checked') ) {
      $('label[for="fixins"]').show('slow');
      $('#fixins').show('slow');
   } else {
      $('label[for="fixins"]').hide('slow');
      $('#fixins').hide('slow');
   }
});
```

---

# Exercise 1

The exercise goes here...

---
template: inverse

# Fin!

{% endhighlight %}
