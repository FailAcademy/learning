---
layout: slidedeck
title: HTML Forms
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# HTML Forms

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1.  Discover why it's important to use forms
2.  Learn about how forms work
3.  Get familiar with various form control elements
4.  How to target form elements with values/IDs

---

template: inverse
#Why Use Forms?

---
## Everyday Uses for Forms

Forms are a way for the users/viewers of your site to provide you with feedback about anything that you’d like to find out from them. Forms provide a uniform way for those users to interact with a website quickly and easily through their web browser, rather than directly through email. 

---
## Everyday Uses for Forms

Forms that you typically see include ones that ask for your mailing information, like an order forms, or ask for your opinions, like surveys. There are many uses for forms especially in online commerce and retail transactions and online banking. 
---
### How Often Do You Google Everyday?

Forms like Google allow us to **GET** information from a database.
.inline-images[![Google Search box](../../public/img/slide-assets/google-search-box.png)]

---
### How Often Do You Buy or Pay for Something Online?
Checkout forms allow you input your information & payment information for a company to process your order. 

.inline-images[![Sample Online Shipping Form](../../public/img/slide-assets/sample_shipping_address_form.jpg)]

---
template: inverse
# How Forms Work

---
## How Do Forms Work?

The basic syntax for a form is: 
```HTML
<form action="[URL]">


</form>
```
You can only put one form per HTML page, but that form can contain many form elements, as discussed on the next slide.

---
## How Do Forms Work?

When the form is submitted, the form data is sent to the URL specified in the ACTION attribute. In a basic email handler example, this URL will refer to a client-side program (user’s email program) that will process the form data. The form itself should contain: 

- At least one submit button ```<input type="submit">```
- Some form data elements  ```<input>,<textarea>,<select>``` 
- Additional markup (e.g., identifying data elements through IDs and Values, and presenting instructions as needed. 

---
## Parts of a Form

**FORM** tags tells the browser, where it ends and begins. 

**ACTION** tag tells the browser where to send the information. 

**INPUT TYPE** represents the form objects that will gather information.

**ENCTYPE** represents how the input collected is ‘encrypted’. Usually it has a value of “text/plain” for basic forms, to make sure that the data is kept in its raw form, rather than converted into some encrypted text.

---
## BASIC FORM STRUCTURE

This basic form consists of a text field followed by a Submit button.  An example of this type of form would just ask for the user’s e-mail for a website’s monthly email newsletter.

```HTML
<form method=”post”  action=http://www.myserver.com/cgi-bin/mailscript/ enctype="text/plain">

<input type="text" name="text_field" />
<input type="Submit" value="Submit" />

</form>
```

---
template: inverse
# Types of Form Controls

---
## Types of Form Controls

###1. Adding Text
###2. Making Choices
###3. Submitting Forms
###4. Uploading Files

---
## Types of Form Elements
### 1. Adding Text
- Text Input (Single Line)
- Text Area (Multi Line)
- Password Input

---
## Types of Form Elements
### 2. Making Choices
- Radio Buttons
- Check Boxes
- Drop Down Menus

---
## Types of Form Elements
### 3. Submitting Forms
- Submit Buttons
- Image Buttons

---
## Types of Form Elements
### 4. Uploading Files
- File Upload Button

---

## How to Target Form Elements

When defining a form element such as an text input for a **Name** field for instance, you'll want to also put in a **Value** and **ID** as well, so that these elements can be targeted through CSS as well as Javascript.

```HTML
 <input type="text" name="firstname" id=”firstname” size=”60” /> 
 
 ```

---
template: inverse

# Fin!

{% endhighlight %}
