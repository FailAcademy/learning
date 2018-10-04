---
layout: slidedeck
title: HTML Forms and Animation with jQuery Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# HTML Forms & Animation with jQuery

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Creating forms
2. Common form elements
3. Working with forms in CSS
4. Creating animation effects with jQuery
5. Working with HTML forms with jQuery
6. Putting it all together...

---
template: inverse

# Creating Forms

---
class: center, middle

### Forms on the Web

The concept of a **form** on the web is borrowed from print, but today they provide an important way for users to **interact** with a website and **send/receive information** from a server.

---
class: center, middle

![HTTP request diagram](/public/img/slide-assets/http-request-diagram.svg)

---
class: center, middle

### How often do you use a search engine?

Forms like Google's search input allow us to **GET** information from a large database.

---
class: center, middle

### How often do you shop online?

When you fill out a form to make a purchase online, the **POST** method is used to send your payment information and allow a vendor to process your order with the data they receive.

---
template: inverse

# Common Form Elements

---

# The Form Element

All forms on the web use the `<form>` element:

```html
<form action="submit.php" method="get">
   <!-- The form inputs go here... -->
</form>
```

The `action` attribute defines the location (a URL) where the form's collected data should be sent.

The `method` attribute defines which HTTP method to use to send the data (can be `get` or `post`).

---

# Input Element

We can use the `<input>` element inside a form to create a variety of different form controls:

```html
<form action="submit.php" method="post">
   <input type="text" name="username" size="12" maxlength="12" />
   <input type="checkbox" name="registered" checked="checked" />
</form>
```

By specifying the `type` attribute, the browser will know what kind of input to display.

Common input types include `text`, `checkbox`, `radio`, and `submit`. HTML5 introduced a number of [more specific form input types](http://html5doctor.com/html5-forms-input-types/) as well.

---

# Input Element

To create radio inputs, we simply create multiple `<input>` elements with a type of `radio`:

```html
<form action="submit.php" method="post">
   <input type="radio" name="gender" value="male" id="male" />Male
   <input type="radio" name="gender" value="female" id="female" />Female
</form>
```

Radio buttons that have the same value for the `name` attribute are in the same "radio button group"; only one radio button in a group can be selected at one time.

---

# Input Element

The `password` input type will obfuscate the characters that a user types into it:

```html
<input type="password" name="password" size="8" minlength="6" maxlength="8" />
```

Note that while the characters are hidden this doesn't mean that the entered data is secure.

Best to use Secure Sockets Layer (SSL) on the server for full security.

---

# Textarea Element

A `<textarea>` element will create a multi-line text input:

```html
<form action="submit.php" method="post">
   <textarea name="message" cols="10" rows="4">Enter your message...</textarea>
</form>
```

Using the `cols` and `rows` attributes you can specify the size of the `<textarea>` box.

---

# Select Element

The `<select>` tag is a special form element that will create a drop-down menu based on the `<option>` tags nested inside:

```html
<form action="submit.php" method="get">
   <select>
      <option value="mac" selected="selected">Mac</option>
      <option value="pc">PC</option>
   </select>
</form>
```

The `selected` attribute will set an option to be selected by default.

---

# Label Element

The `<label>` tag is used to describe what an input is for, and helps with accessibility for vision-impaired users.

It can be used by wrapping an `<input>` element, or by giving it a `for` attribute that matches the `id` of the input it's labeling:

```html
<label>
   First Name: <input type="text" name="first_name" />
</label>

<label for="terms">I agree to the terms and conditions</label>
<input type="checkbox" name="terms" id="terms" />
```

---

# Button Element

Last but not least, you're probably going to want some way for the user to submit the form data.

For that, we have the `<button>` element

```html
<button type="submit">Submit Form</button>
```

It's optional to specify `type="submit"` because this is the default. Other types for the `<button>` element include `reset` and `button`.

---

# Button vs. Input

In lieu of a `<button>` element, you can may also see an `<input>` element with `type="submit"`:

```html
<input type="submit" name="submit" value="Submit Form" />
```

The main difference between `<button>` and `<input type="submit" />` is that the input element is self-closing, while the button can contain content.

*Functionally they are the same if their types are the same.*

---

# Exercise 1

Try creating a basic contact form:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/EjXNLx/?height=268&theme-id=0&default-tab=html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/EjXNLx/'>EjXNLx</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Forms and CSS

---

# Styling Forms

We can style forms and their inputs just like any other HTML element, but there are a few extra things to think about.

For example:

- What should happen to an individual form input when a user **focuses** it?
- How should buttons react when hovered or clicked?
- How should the form display on a mobile device to assist with usability?

---

# Form Style Tips

We can always target form inputs by their `id` or `class`, but we can also target entire types of form elements using the attribute selector in our CSS:

```css
input {
   margin-bottom: 10px;
}

input[type="text"],
input[type="search"] {
   color: #111;
   font-family: Helvetica, sans-serif;
   padding: 2px 5px;
}
```

---

# Form Style Tips

The `:focus` pseudo-class also helps us target special styles toward the field that the user has currently activated.

```css
input {
   border: 1px solid #969696;
}

input:focus {
   border: 1px solid #464646;
}
```

---

# Form Style Tips

And the `:active` pseudo-class allows to provide feedback to a user to let them know that a button has been activated:

```css
button {
   background-color: blue;
}

button:hover,
button:active {
   background-color: navy;
}
```

---

# Form Style Tips

We can also get creative spiffing up our buttons use CSS3:

```css
button {
   border: 0;
   background-color: blue;
   color: #fff;
   padding: 10px 15px;
   border-radius: 3px;
   box-shadow:
      inset 0px -3px 1px rgba(0, 0, 0, 0.45),
      0px 2px 2px rgba(0, 0, 0, 0.25);
}

```

---

# Exercise 2

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/LVLbKb/?height=268&theme-id=0&default-tab=html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/LVLbKb/'>LVLbKb</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# jQuery Magic Show: Animating Elements

---

# Animation with jQuery

jQuery makes it easy to bring a webpage to life with animation. It offers many animation methods out of the box, including*:

- `.show()`
- `.hide()`
- `.fadeIn()`
- `.fadeOut()`
- ...and many more!

.footnote[.red[ * ] You can find a complete list of these methods on page 332 of the textbook.]

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

We can pass in `fast`, `slow`, or a speed in milliseconds as a parameter for this method.

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

### First things first...

What actually happens when you submit a form on the web?

---

# The Server Side

We already learned that JavaScript is a programming language for writing client-side scripts.

In most cases, when a user submits a form on a web page we want to send that data to a server, and likely save it in a database there too.

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

.footnote[.red[ * ] You can find a complete list of these selectors on page 342 of the textbook.]

---

# The .val() Method

The `.val()` method allows you to get or set the value entered into a form element:

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

# Exercise 3

Now let's try putting jQuery effects together with form inputs:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/xGVmEq/?height=268&theme-id=0&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/xGVmEq/'>xGVmEq</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

# What We've Learned

- How to create a form in an HTML document
- What special HTML elements we can use to create form elements
- How to work with form elements in CSS
- How we can bring our websites to life with jQuery's animation methods
- How to add interactivity to forms with jQuery

---
template: inverse

# Questions?

{% endhighlight %}
