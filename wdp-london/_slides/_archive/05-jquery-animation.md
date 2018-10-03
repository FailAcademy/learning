---
layout: slidedeck
title: Animation with jQuery Slides
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
What method allows you to select sibling elements?
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

jQuery makes it easy to bring a webpage to life with animation. It offers many animation methods out of the box, including:

* `.show()`
* `.hide()`
* `.fadeIn()`
* `.fadeOut()`
* ...<a href="https://api.jquery.com/category/effects/" target="_blank">and many more!</a>

---

# Toggle Example

One of the most basic uses of animation in jQuery is to toggle the visibility of elements:

```html
<a href="#">Show a div</a>
<div id="my-div">This div is toggled when the link is clicked</div>
```

```javascript
$("a").on("click", function(event) {
  event.preventDefault();
  $("#my-div").toggle("fast");
});
```

We can pass in `fast`, `slow`, or a speed in milliseconds an argument for this method.

<a href="https://codepen.io/jimRedAcad/pen/YYOwrK" target="_blank">Try the Codepen example.</a>

---

# The .animate() Method

jQuery also offers an `.animate()` method, which will give you finer-grained control over how you implement your effects:

```html
<a href="#">Resize text</a>
<div id="my-div">This text will grow when the link is clicked</div>
```

```javascript
$("a").on("click", function(event) {
  event.preventDefault();

  $("#my-div").animate({ fontSize: "2em" }, 1000, function() {
    $(this).css("font-size", "1em");
  });
});
```

<a href="https://codepen.io/REDwdp/pen/MrqKVG" target="_blank">Try the Codepen example.</a>

---

# .animate() Complete

You may have noticed that you can run functions once .animate() has completed.

The basic structure looks like this.

```javascript
$(".box").animate() {
  // animation runs
}, 2000, function() {
  // function run after animation finished, e.g. after 2000ms
});
```

---

# Repeating Animation

```javascript
$(".box").animate(
  {
    width: "10rem",
    height: "10rem"
  },
  1000, // after 1 second run function
  function() {
    $(".box").animate(
      {
        width: "8rem",
        height: "8rem"
      },
      3000, // after 3 seconds run another function
      function() {
        alert("animations complete");
      }
    );
  }
);
```

---

class: center, middle

<iframe height='500' scrolling='no' title='jQuery animation complete function' src='//codepen.io/REDwdp/embed/preview/Gywmvq/?height=500&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/REDwdp/pen/Gywmvq/'>jQuery animation complete function</a> by REDwdp (<a href='https://codepen.io/REDwdp'>@REDwdp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

.large[
Possible use case of running a function after an animation?
]

---

# Reveal Animation

<iframe height='400' scrolling='no' title='jQuery chaining animation' src='//codepen.io/REDwdp/embed/preview/dJQWgY/?height=400&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/REDwdp/pen/dJQWgY/'>jQuery chaining animation</a> by REDwdp (<a href='https://codepen.io/REDwdp'>@REDwdp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Easing

Easing helps to bring animations to life. Without easing animations run from point A to B without speeding up or slowing down. This is ok, however by adding easing you can create more interesting animations.

jQuery doesn't support easing by default, however there are two options to add easing:

* <a href="http://jqueryui.com/themeroller/" target="_blank">jQuery UI</a>
* <a href="http://gsgd.co.uk/sandbox/jquery/easing/" target="_blank">jQuery easing plugin</a>

---

# jQuery Easing Plugin

To add easing most of the time the easing plugin is the best option.
jQuery UI is great however it provides a lot of things we may not need e.g. accordions, date pickers, drag and drop etc...

**Gotcha alert!** Animating background colors requires jQuery UI.

- Easing Plugin: <a href="http://gsgd.co.uk/sandbox/jquery/easing/" target="_blank">Download</a> 
- Easing Plugin: <a href="https://cdnjs.com/libraries/jquery-easing" target="_blank">CDN</a>

- jQuery UI: <a href="https://jqueryui.com/" target="_blank">Download</a>
- jQuery UI: <a href="https://developers.google.com/speed/libraries/#jquery-ui" target="_blank">CDN</a>

---

# Script Order Matters 🤓

The order that you load scripts in your HTML document should be:

* **jQuery**
* **jQuery plugins**
* **Your Scripts**

---

class: center, middle

.large[
Let's see some examples of easing with jQuery...
]

---

class: center, middle

<iframe height='500' scrolling='no' title='jQuery animation: spaceship' src='//codepen.io/REDwdp/embed/preview/qpQjqN/?height=500&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/REDwdp/pen/qpQjqN/'>jQuery animation: spaceship</a> by REDwdp (<a href='https://codepen.io/REDwdp'>@REDwdp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: middle, center

<iframe height='500' scrolling='no' title='jQuery, animate in Flexbox' src='//codepen.io/Onomicon/embed/preview/ZvqLYz/?height=500&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/ZvqLYz/'>jQuery, animate in Flexbox</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Mini Exercise

We've seen quite a few things we can do with jQuery to animate. Let's spend a bit of time trying out animating a box.

A **<a href="https://codepen.io/REDwdp/pen/wpQYdg" target="_blank">Codepen Starter</a>** has been setup for you with jQuery and jQuery UI added, so you can animate easing and background colors. 

There is also a small amount of CSS to create a box. The box is using absolute positioning which enables us to animate properties like `left` and `top`.

**TLDR, Try animating different properties.**

---

template: inverse

# HTML Forms & jQuery

---

class: center, middle

### Souping Up Your Forms with jQuery

jQuery has some special features that make it much easier to work with and enhance HTML forms.

---

# Form Element Selectors

jQuery has special selectors that allow you to easily grab onto form elements, some of which include:

* `:checkbox`
* `:input`
* `:focus`
* `:selected`
* `:submit`

---

# The .val() Method

The `.val()` method allows you get or set the value entered into a form element:

```javascript
// Get the text string currently entered into the input:
$("input:text").val();

// Set a new value for the input by passing in a string:
$("input:text").val("A new value");

// Clear out an input by passing empty quotes into .val():
$("input:text").val("");
```

---

# The .is() Method

You can also use jQuery to figure out if a checkbox is checked:

```javascript
if ($("input:checkbox").is(":checked")) {
  console.log("The checkbox is checked.");
} else {
  console.log("The checkbox is not checked.");
}
```

---

# Forms and Events

We can also use jQuery's `.on()` method to handle a variety of other HTML form-related events:

* `blur`
* `change`
* `focus`
* `selected`
* `submit`

---

# Gotcha Alert!

You may have noticed that there are both `:focus` and `:submit` selectors, and `focus` and `submit` events.

Keep in mind that the former are for **finding** the focused element or submit element in the DOM, while the latter are for **detecting when** an input/select element is focused or a form is submitted.

---

# To Clarify...

You select the submit element like this:

```javascript
$("input:submit");
```

You detect when the form has been submitted like this:

```javascript
$("#my-form").on("submit", function() {
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
$("#my-form").on("submit", function(event) {
  event.preventDefault();

  if ($("#my-text-input").val() == "") {
    alert("You missed the field.");
  } else {
    alert("Thanks for filling the field!");
  }
});
```

---

# Form Event Example

Note that you can also write the previous code using `submit` as the actual method as follows:

```javascript
$("#my-form").submit(function(event) {
  event.preventDefault();

  if ($("#my-text-input").val() == "") {
    alert("You missed the field.");
  } else {
    alert("Thanks for filling the field!");
  }
});
```

However, using `submit` with the `.on()` method permits the use of event delegation.

What the? Let's take a closer look <a href="https://codepen.io/REDwdp/pen/qpQrbp" target="_blank">Codepen example.</a>

---

# The .change() Method

Similarly, we can also detect when a user chooses an `<option>` in a `<select>` menu using the change event:

```html
<select id="my-select-menu">
   <option value="">-- Pick an option --</option>
   <option value="option1">Option 1</option>
   <option value="option2">Option 2</option>
</select>
```

```javascript
$("#my-select-menu").on("change", function() {
  var selected = $(this).val();

  if (selected !== "") {
    console.log("The value you picked is: " + selected);
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

And then conditionally show those elements when the user changes another form field:

```javascript
$("#hamburger").on("change", function() {
  if ($(this).is(":checked")) {
    $('label[for="fixins"]').show("slow");
    $("#fixins").show("slow");
  } else {
    $('label[for="fixins"]').hide("slow");
    $("#fixins").hide("slow");
  }
});
```

<a href="https://codepen.io/REDwdp/pen/MvjdzE?editors=1010" target="_blank">Codepen example</a>

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

Plugins allow us to extend jQuery to add additional functionality to suit needs of our websites.

In other words, they allow us to easily do more cool stuff on our sites with jQuery, and with minimal effort on our parts!

---

class: center, middle

### Why create a plugin?

Plugins allow you to create re-usable components for your webpages, and makes it easier to share that code with other developers too. Open source FTW, right?

---

# How to make a plugin

We can create "plugin" (some reusable code) by creating a function starting with `$.fn.yourFunctionName`:

```javascript
$.fn.animateFadeIn = function(speed) {
  this.hide().fadeIn(speed);
};

$.fn.animateFadeOut = function(speed) {
  this.fadeOut(speed, function() {
    $(this).animateFadeIn("slow");
  });
};
```

<a href="https://codepen.io/REDwdp/pen/MrzpRE?editors=1010" target="_blank">Try the Codepen example.</a>

---

# Exercise 2

We're not going to build a slider from scratch for Project 1 (phew!).

Instead, we will use a plugin called **[Flickity](http://flickity.metafizzy.co/)** to implement the product slider. To do that, you will need to **[install Flickity](http://flickity.metafizzy.co/#install)** and then **[initialize it with jQuery](http://flickity.metafizzy.co/#initialize-with-jquery)**.

Do this on your project now!

---

# What We've Learned

* How we can bring our websites to life with jQuery's animation methods
* jQuery easing
* How to add interactivity to forms with jQuery
* What jQuery plugins
* How to create a plugin for reusable code

---

template: inverse

<iframe height='500' scrolling='no' title='OzagxE' src='//codepen.io/REDwdp/embed/preview/OzagxE/?height=500&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/REDwdp/pen/OzagxE/'>OzagxE</a> by REDwdp (<a href='https://codepen.io/REDwdp'>@REDwdp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

{% endhighlight %}
