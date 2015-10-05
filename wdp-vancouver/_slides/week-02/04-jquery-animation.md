---
layout: slidedeck
title: jQuery Animation Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# jQuery Animation <br />(and Plugins too)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Creating animation effects with jQuery
2. Working with HTML forms with jQuery
3. Putting it all together...

---
template: inverse

# Review Time!

---
class: center, middle

.large[
   **Name that jQuery method!**
]

---
class: center, middle

.large[
   What method allows you to select a sibling element?
]

---
class: center, middle

.large[
   What method allows you to change a CSS property for an element?
]

---
class: center, middle

.large[
   What method allows you to change the text inside an element?
]

---
class: center, middle

.large[
   What method allows you to remove a class from an element?
]

---
class: center, middle

.large[
   What method allows you to add content just inside an element's closing tag?
]

---
class: center, middle

.large[
   What method allows you to add content just before an element's opening tag?
]

---
class: center, middle

.large[
   What method allows you to change an element's ID name?
]

---
class: center, middle

.large[
   What method allows us to execute code only when a user clicks on an element?
]

---
template: inverse

# Animating Elements

---

# Animation with jQuery

jQuery makes it easy to bring a webpage to life with animation. It offers many animation methods out of the box, including*:

- `.show()`
- `.hide()`
- `.fadeIn()`
- `.fadeOut()`
- ...and many more!

.footnote[.red[ * ] You can find a complete list of these methods on page 332 of your text book.]

---

# Toggle Example

One of the most basic uses of animation in jQuery is to toggle the visibility of elements:

```html
<a href="#">Show a div</a>
<div id="my-div">This div is toggled when the link is clicked</div>
```

```javascript
$('a').on('click', function(event) {
   event.preventDefault();
   $('#my-div').toggle('fast');
});
```

We can pass in `fast`, `slow`, or a speed in milliseconds as parameter for this method.

---

# The .animate() Method

jQuery also offers an `.animate()` method, which will give you finer-grained control over how you implement your effects:

```html
<a href="#">Resize text</a>
<div id="my-div">This text will grow when the link is clicked</div>
```

```javascript
$('a').on('click', function(event) {
   event.preventDefault();

   $('#my-div').animate({
      fontSize: '2em'
   }, 1000, function() {
      $(this).css( 'font-size', '1em' );
   });
});
```

---
template: inverse

# HTML Forms & jQuery

---
class: center, middle

### Souping Up Your Forms with jQuery

jQuery has some special features that make it much easier to work with and enhance HTML forms.

---

# Form Element Selectors

jQuery has special selectors that allow you to easily grab onto form elements, some of which include*:

- `:checkbox`
- `:input`
- `:focus`
- `:selected`
- `:submit`

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
   console.log('The checkbox is not checked.');
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
   var selected = $(this).val();

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

In this exercise, you're going to use jQuery to create an accordian-style show/hide effect for a basic FAQ list.

[See the lesson page](/lesson/animation-with-jquery/) for further instructions.

---
template: inverse

# jQuery Plugins

---
class: center, middle

### What's a plugin?

Plugins allow us to extend jQuery to add additional functionality to suit needs of our websites (i.e. add more cool stuff to our websites...).

---
class: center, middle

### Why create a plugin?

Plugins allow you to create re-usable components for your webpages, and makes it easier to share that code with other developers too.

---

# Exercise 2

Your task is to find an example of an interesting **jQuery plugin** and create a demo for your classmates showing how to use it.

[See the lesson page](/lesson/animation-with-jquery/) for further instructions.

---

# What We've Learned

- How we can bring our websites to life with jQuery's animation methods
- How to add interactivity to forms with jQuery
- What jQuery plugins are

---
template: inverse

# Questions?

{% endhighlight %}
