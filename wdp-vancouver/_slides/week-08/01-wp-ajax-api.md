---
layout: slidedeck
title: Ajax in WordPress & WP REST API Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Ajax in WordPress <br />& WP REST API

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Ajax in WP (the old way)
2. Using `wp_localize_script()`
2. WP REST API
3. Ajax in WP (the newer, saner way)

---
template: inverse

# Ajax in WordPress

---

# In a Nutshell

Ajax requests in WP traditionally involved quite a bit of PHP:

1. Make the Ajax call in JS
2. Create a PHP function, which will handle the action
3. Make sure the request should be happening (security!)
4. Add the function to the `wp_ajax_` hook (and the `wp_ajax_nopriv_` for logged out users)
5. Create success handlers as needed

---
class: center, middle

.large[
   About security...
]

---

# Nonces in WP

A "number used once" (but not really...):

- They are hashes made up of **numbers** and **letters**
- They have a limited lifetime after which they will expire
- During that time period the same nonce will be generated for a given user in a given context

---

# How Does WP Know?

- Nonces themselves aren't actually stored anywhere
- You create a nonce using the `wp_create_nonce()` function, which will in turn call the `wp_hash()` function to hash together a custom string, the user_id, and the session token
- The resulting hash is stored in `wp_usermeta` with the key `session_tokens`

---

# How to Use Nonces

You **generate them at the point of the action** and then **validate it at the target**. Nonces can be placed in a link, hidden form field, or Ajax request.

To create a nonce to use in an Ajax request, you use the following function:

```php
wp_create_nonce( 'wp_rest' );
```

The argument is the name of the action (should give context to what is taking place).

---
class: center, middle

.large[
   So how do we generate our nonce in PHP and pass it through our Ajax request in JS?
]

---
template: inverse

# Localizing a Script

---
class: center, middle

### What does localizing mean?

Localizing a script allows you to take data typically only accessible on the server side on your site and make it available for use in your JS. Very handy!

---

# How to Do It?

Use `wp_localize_script()` to pass data from PHP to JS:

```php
// In your functions.php file

function red_scripts() {
   wp_enqueue_script( 'jquery' );
   wp_enqueue_script( 'red_api', get_template_directory_uri() . '/build/js/api.min.js', array( 'jquery' ), false, true );

 	wp_localize_script( 'red_api', 'api_vars', array(
      'nonce' => wp_create_nonce( 'wp_rest' ),
      'success' => 'Thanks, your submission was received!',
      'failure' => 'Your submission could not be processed.',
 	) );
}
add_action( 'wp_enqueue_scripts', 'red_scripts' );
```

```js
// In api.js file

console.log( api_vars.success );
```

---
class: center, middle

**Under the hood:**

.inline-images-border[
   ![Localized data](/public/img/slide-assets/wp-localized-script.png)
]

---
class: center, middle

.large[
   An example of how this all works together...
]

---

# The Premise

Let's imagine we want to add a button to our blog posts on the front-end of the site that allows post authors to close comments on their posts with a single click.

---

# The Setup

First we'll add a bit mark-up to `single.php`:

```html
<button type="button" id="close-comments">Close Comments</button>
```

We'll eventually trigger our Ajax request with a click event attached to this button.

---

# Enqueue & Localize

Next, let's enqueue and localize our script:

```php
function red_scripts() {
   $script_url = get_template_directory_uri() . '/scripts.js';

   wp_enqueue_script( 'jquery' );
   wp_enqueue_script( 'red_comments', $script_url, array( 'jquery' ), false, true );

  wp_localize_script( 'red_comments', 'red_vars', array(
      'ajax_url' => admin_url( 'admin-ajax.php' ),
      'comment_nonce' => wp_create_nonce( 'red_comment_status' ),
      'post_id' => get_the_ID()
  ) );
}
add_action( 'wp_enqueue_scripts', 'red_scripts' );
```

---

# Write the JS

Now we'll set up our Ajax-ified event handler:

```js
(function( $ ) {
   $('#close-comments').on('click', function(event) {
      event.preventDefault();

      $.ajax({
         method: 'post',
         url: red_vars.ajax_url,
         data: {
            'action': 'red_comment_ajax',
            'security': red_vars.comment_nonce,
            'the_post_id': red_vars.post_id
         }
      }).done( function(response) {
         alert('Success! Comments are closed for this post.');
      });
   });
})( jQuery );
```

---

# Finish the Job

```php
function red_comment_ajax() {
   check_ajax_referer( 'red_comment_status', 'security' );

   if ( ! current_user_can( 'edit_posts' ) ) {
      exit;
   }

   $id = $_POST['the_post_id'];

   if ( isset( $id ) && is_numeric( $id ) ) {
      $the_post = array(
         'ID' => $id,
         'comment_status' => 'closed'
      );

      wp_update_post( $the_post );
   }

   exit;
}
add_action( 'wp_ajax_red_comment_ajax', 'red_comment_ajax' );
// add_action( 'wp_ajax_nopriv_red_comment_ajax', 'red_comment_ajax' );
```

---
template: inverse

# WP REST API

---

# APIs

First, let's recall what an API is:

- Stands for Application Programing Interface
- Defines how software can interact with the outside world
- A way to hook into an application (data, CRUD, and functionality)
- Portability and extendibility

---

# XML-RPC / RSS

Who knew?! WP already has an [XML-RPC API](https://codex.wordpress.org/XML-RPC_WordPress_API).

But that means we have to deal with RSS to interact with it (much harder to consume than JSON)...

That's where the [WP REST API](http://v2.wp-api.org/) comes in!

---

# A REST API?

- REST stands for REpresentational State Transfer
- Uses HTTP methods explicitly (e.g. GET, POST, PUT, DELETE)
- Is stateless (the client includes any state information needed in the request sent to the server and vice versa)
- Transfers XML or JSON

---
class: center, middle

.large[
   Why does it matter?
]

---
class: center, middle

.large[
   [Let's check it out &rarr;](https://developer.wordpress.org/rest-api/)
]

---

# A Basic Request

```bash
GET http://fourth.academy.red/wp-json/wp/v2/posts
```

`http://fourth.academy.red/`: URL of the WP installation

`/wp-json`: the endpoint prefix

`/wp`: the namespace of the WP REST API plugin

`/v2`: the version of the WP REST API plugin

`/posts`: the resource you want to get from the server

---

# Working With Resources

A **resource** is a discrete entity within WordPress (e.g. post, page, comment, user, term).

`GET /wp-json/wp/v2/posts` to get a collection of posts

`GET /wp-json/wp/v2/posts/42` to get a post with ID 42

`POST /wp-json/wp/v2/posts` to create a new post

`POST /wp-json/wp/v2/posts/42` to update post with ID 42

`DELETE /wp-json/wp/v2/posts/42` to delete post with ID 42

---

# More Vocabulary

- **Endpoints** are functions available through the API (e.g. updating post meta or deleting a taxonomy term)
- A **route** is the “name” you use to access endpoints&mdash;so a route may have multiple endpoints depending on what you can do with it!
- A **schema** is a representation of the format for the API's response data ([detailed resource here](https://developer.wordpress.org/rest-api/reference/))

---

# Filter Syntax

We can filter the results we get back in our response using the `WP_Query()` variables the WP REST API exposes for us using the `filter[]` syntax. For example...

Get 3 posts per pages (instead of the default 10):

```bash
GET /wp/v2/posts?filter[posts_per_page]=3
```

Get all posts published on August 17, 2016:

```bash
GET /wp/v2/posts?filter[year]=2016&filter[monthnum]=08&filter[day]=17
```

---
template: inverse

# Ajax in WordPress<br /> (the New Way)

---

# Ajax with WP API

WP API isn't just a cool way to interact with our data outside of WordPress.

It also makes it a lot easier to (securely) deal with internal Ajax requests that make updates to the WP database.

*Let's revisit our comment closing example...*

---

# The Setup

We'll still use the same button in `single.php`:

```html
<button type="button" id="close-comments">Close Comments</button>
```

---

# Enqueue & Localize

We'll still enqueue and localize our scripts, but we'll localize the **REST URL** instead of the admin Ajax URL, and we'll use the special **REST API nonce** instead of a custom one:

```php
function red_scripts() {
   $script_url = get_template_directory_uri() . '/scripts.js';

   wp_enqueue_script( 'jquery' );
   wp_enqueue_script( 'red_comments', $script_url, array( 'jquery' ), false, true );

  wp_localize_script( 'red_comments', 'red_vars', array(
      'rest_url' => esc_url_raw( rest_url() ),
      'wpapi_nonce' => wp_create_nonce( 'wp_rest' ),
      'post_id' => get_the_ID()
  ) );
}
add_action( 'wp_enqueue_scripts', 'red_scripts' );
```

---

# Write the JS

This time we'll add the nonce in the request's header:

```js
$('#close-comments').on('click', function(event) {
   event.preventDefault();

   $.ajax({
      method: 'post',
      url: red_vars.rest_url + 'wp/v2/posts/' + red_vars.post_id,
      data: {
         comment_status: 'closed'
      },
      beforeSend: function(xhr) {
         xhr.setRequestHeader( 'X-WP-Nonce', red_vars.wpapi_nonce );
      }
   }).done( function(response) {
      alert('Success! Comments are closed for this post.');
   });
});
```

---
class: center, middle

.large[
   That's it!
]

---

# What We're Not Doing

The REST API handles this stuff for us:

- Validating the nonce in PHP
- Checking the currently logged in user or capabilities
- Validating or sanitizing data

---

# What We've Learned

- Two ways to use Ajax in WP
- How to get data from the server side to client side with `wp_localize_script()`
- All about the WP REST API

---
template: inverse

# Questions?

{% endhighlight %}
