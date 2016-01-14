---
layout: slidedeck
title: HTML Forms, Audio & Video Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# HTML Forms, Audio & Video

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Creating forms
2. Common form elements
3. Working with forms in CSS

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

The `action` attribute defines the location (an URL) where the form's collected data should be sent.

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

The `selected` attribute will set a option to be selected by default.

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

We can also get creative spiffying up our buttons use CSS3:

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

# Exercise 1

Build this form!

.inline-images[
   ![HTML form prototype](/public/files/exercises/html-forms-e1.png)
]

---
template: inverse

# Audio & Video

---
class: center, middle

### More from HTML5...

The HTML5 specification gives us two new elements to add media to our websites: `audio` and `video`

---

# Adding Audio

The audio tag should look familiar. It has a `src` attribute just like an `img` tag:

```html
<audio src="macerena.ogg"></audio>
```

If we wanted to set the audio file to autoplay and give the user controls to manage playback, we can add these attributes:

```html
<audio src="macarena.ogg" autoplay="autoplay" controls="controls"></audio>

<!-- This syntax is also valid: -->
<audio src="macarena.ogg" autoplay controls></audio>
```

---
class: center, middle

.large[
   But there's a catch!
]

---

# Fallback Formats

The `audio` tag isn't a self-closing tag for reason...not all browsers support the same audio file formats, so we have to provide fallback formats.

To do this, we take the `src` attribute out of the audio element tag, and nest all of our file formats inside some child `source` tags like this:

```html
<audio autoplay loop controls>
   <source src="macarena.ogg" type="audio/ogg">
   <source src="macarena.mp3" type="audio/mpeg">
   <source src="macarena.wav" type="audio/wav">
</audio>
```

---

# Adding Video

Similar to the audio element, we can add video like this:

```html
<video src="my-video.mp4" controls poster="video-thumb.jpg"></video>
```

The video element gives us `poster` attribute to specify a custom image that should be shown before the video plays.

---

# Fallback Formats

But of course, not all browsers support the same video formats.

We need to provide fallback formats, just like with `audio`:

```html
<video controls poster="video-thumb.jpg">
   <source src="my-video.ogv" type="video/ogg">
   <source src="my-video.mp4" type="video/mp4">
</video>
```

Note that the `.mp4` format with (H.264 encoding) is almost ubiquitously supported now, but you'll likely want to provide at least one fallback in `.ogv`/`.ogg` or `.webm` formats.

---

# Encoding Media

Wondering how you create all of these different versions of your video files?

You'll need an app for that:

- [Miro Video Converter](http://www.mirovideoconverter.com/)
- [EasyHTML5Video](http://easyhtml5video.com/)

And if you need to convert audio files check out [media.io](http://media.io/).

---

# Other Concerns

Always consider if hosting your own audio and video files is the right choice for a given website:

- Do (or your client) you have the **administrative capacity** to juggle all those formats?
- Does your web host provide the necessary **bandwidth** to deliver those files to users?
- Would a **third-party** service like Soundcloud, YouTube, or Vimeo be a better choice?

---

# What We've Learned

- How to create a form in an HTML document
- What special HTML elements we can use to create form elements
- How to work with form elements in CSS
- How to use HTML5 `audio` and `video` elements

---
template: inverse

# Questions?

{% endhighlight %}
