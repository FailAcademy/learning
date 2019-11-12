---
layout: slidedeck
title: Custom Post Loops & the WP Database Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Custom Post Loops & the WP Database

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. 4 Ways to Loop Posts
2. `WP_Query`
3. WP Database Tour

---
template: inverse

# Custom Post Loops

---
class: center, middle

.large[
   **Why?**
]

---

# 4 Ways to Loop

1. The default loop (aka **main loop** or **main query**)
2. `query_posts()`
3. `WP_Query`
4. `get_posts()`

---

# Default Loop

- Uses the main query to loop through post content/meta (e.g. `the_title`, `the_content`)
- The main query is the one triggered automatically when WordPress has determined what to show based on the request URI (different depending on the template!)
- Look at the template files in `redstarter`...it's everywhere

---

# What It Looks Like

The default loop:

```php
<?php if ( have_posts() ) : ?>

   <?php while ( have_posts() ) : the_post(); ?>

      <h2><?php the_title(); ?></h2>
      <?php the_content(); ?>

   <?php endwhile; ?>

   <?php the_posts_navigation(); ?>

<?php else : ?>

   <h2>Nothing found!</h2>

<?php endif; ?>
```

---

# query_posts()

- `query_posts` allows us to alter our **default loop**
- It's inefficient and often produces unexpected results
- **NEVER USE THIS!**
- If you need to mess with the main loop use the `pre_get_posts` hook (and use sufficient conditionals)

---

# What It Looks Like

Using `query_posts()`:

```php
<?php
   global $query_string; // required
   query_posts( $query_string . '&posts_per_page=3&order=ASC' );
?>

   <?php /* DEFAULT LOOP STUFF GOES HERE */ ?>

<?php wp_reset_query(); ?>
```

---
class: center, middle

.large[
   Now you know, <br />but again, don't use it!
]

---

# WP_Query

- For complete, fine-grained control over creating custom loops in WordPress
- Allows you to create **secondary loops** (aka **custom queries**)
- It's not a function, it's a **class** (which we use to create objects, and these objects can access the properties and methods of the class...more on that tomorrow!)
- It's powerful&mdash;you can create incredibly complex queries with it, and break your site at scale if you're not careful

---

# What It Looks Like

It looks a lot like the default WP loop, with some exceptions:

```php
<?php
   $args = array( 'post_type' => 'product', 'order' => 'ASC' );

   $products = new WP_Query( $args ); // instantiate our object
?>

<?php if ( $products->have_posts() ) : ?>

   <?php while ( $products->have_posts() ) : $products->the_post(); ?>

      <?php /* Content of the queried post results goes here */ ?>

   <?php endwhile; ?>
   <?php wp_reset_postdata(); ?>

<?php else : ?>

      <h2>Nothing found!</h2>

<?php endif; ?>
```

---

# get_posts()

- A wrapper for `WP_Query`
- However, it's a function (not an object instantiated from the `WP_Query` class) so none of the `WP_Query` methods will be available to you
- What it does is returns an array of `WP_Post` objects that you can loop over yourself

---

# What It Looks Like

We pass `$args` into `get_posts()` just like we do `WP_Query`, but we handle the output a bit differently:

```php
<?php
   $args = array( 'post_type' => 'product', 'order' => 'ASC' );

   $product_posts = get_posts( $args ); // returns an array of posts
?>

<?php foreach ( $product_posts as $post ) : setup_postdata( $post ); ?>

   <?php /* Content from your array of post results goes here */ ?>

<?php endforeach; wp_reset_postdata(); ?>
```

---
template: inverse

# WP_Query, in Detail

---

# Main vs. Secondary

- The **default loop** is based on the **URL request** and is processed before templates are loaded (remember when we looked at the query strings?)
- The **secondary loops** are **additional database queries** (using arguments passed into `new WP_Query()`) in theme template or plugin files

---

# All About the $args

The `$args` are where the magic happens in `WP_Query`:

```php
$args = array(
   'order' => 'ASC',
   'posts_per_page' => 8,
   'post_type' => 'product',
   'tax_query' => array(
      array(
         'taxonomy' => 'product-type',
         'field'    => 'slug',
         'terms'    => 'bread',
      ),
   ),
);

$products = new WP_Query( $args );
```

Explore all the **[available parameters in the Codex](https://codex.wordpress.org/Class_Reference/WP_Query#Parameters)** and have fun...but remember to **be responsible** about this!

---

# In Use

We can use all of our normal loop functions!

```php
<?php $products = new WP_Query( $args ); /* $args set above*/ ?>

<?php if ( $products->have_posts() ) : ?>

   <?php while ( $products->have_posts() ) : $products->the_post(); ?>

      <h1><?php the_title(); ?></h1>
      <?php the_content(); ?>

   <?php endwhile; ?>

   <?php the_posts_navigation(); ?>
   <?php wp_reset_postdata(); ?>

<?php else : ?>

      <h2>Nothing found!</h2>

<?php endif; ?>
```

---

# wp_reset_postdata()

According to the Codex, `wp_reset_postdata` will &#8220;restore the global `$post` variable of the **main query** loop after a **secondary query** loop using `new WP_Query`. It restores the `$post` variable to the current post in the main query.&#8221;

Whether using `WP_Query` directly or `get_posts()`, you will often be creating a secondary loop within *the default loop*.

For that reason, you need to **reset** the `WP_Post` object to the main query's post when your done with your secondary loop.

---
class: center, middle

.large[
   Remember that `get_posts()` is a wrapper for `WP_Query`, so it does *almost* everything that `WP_Query` does, but what you get back from WP is very different.
]

---

# Subtle Differences

- `get_posts` should be faster than `WP_Query`
- `get_posts` returns the `$posts` property of `WP_Query` only, while `WP_Query` returns the complete object (which means you can access all of its properties and methods)
- `get_posts` doesn't use the loop, and requires a `foreach` loop to display posts.
- No template tags are available by default with `get_posts`, but you can use `setup_postdata( $post )` to make them available

---

# Which Do I Pick?

- Use `WP_Query` when you need to create a paginated query
- Use `get_posts()` to create static, additional loops (e.g. a list of a few recent posts on a homepage, etc.)

---

# Exercise 1

Let's try building a custom post loop for Project 4 by building the news feed on the homepage.

You'll need to decide whether to use `WP_Query` or `get_posts` first, then you need to create and pass in an array of the appropriate arguments, and finally figure out how to display the returned data on your homepage.

Don't worry about styling yet, just grab the data!

---
template: inverse

# WP Database Tour

---

# WP Does Most of the Heavy Lifting

- We don't have to worry too much about database schema because **WP abstracts the direct database interaction away from us** (we use WP functions for that, not direct SQL queries)
- You mostly just have to worry about setting the right database user and password in your `wp-config.php` file

---
class: center, middle

### Getting, Adding & Deleting Data:

`WP_Query`, `WP_User_Query`, `WP_Tax_Query`, `WP_Meta_Query`, `WP_Comment_Query`, `get_posts()`, `get_users()`, `wp_insert_post()`, `wp_update_post()`, `get_adjacent_post()`, `get_metadata()`, `update_post_meta()`, `delete_usermeta()`, `wp_insert_user()`, `delete_term()`, `wp_get_object_terms()`, etc.

---

# Why Do We Care?

- The underlying architecture of WP is less scary when we understand it a bit better
- Easier to debug issues when certain DB-related functions aren't working
- Allows us to solve (and invent) more interesting problems in WordPress &#9786;

---

# About the WP DB

- We know that WP runs on MySQL, which is an open-source **relational database managament system**
- Relational databases organize data into **rows** and **columns**, with a **unique identifier** for each row (which makes it easier to link rows between tables)
- A single-site installation of **WP creates 12 database tables** (but really only 11 that we're worried about)
- `wp_` is the default table prefix, but you should change this for security reasons upon installation

---

# wp_{object}s Tables

- `wp_posts`
- `wp_comments`
- `wp_users`

---

# wp_{object}meta Tables

- `wp_postmeta`
- `wp_commentmeta`
- `wp_usermeta`
- `wp_termmeta`

---

# wp_term* tables

- `wp_terms`
- `wp_term_taxonomy`
- `wp_term_relationships`

---

# Last but not least...

- `wp_options`

For backward compatibility only:

- `wp_links`

---

# Exercise 2

Let's explore WP's database tables in greater depth. You'll be assigned a table, and it's your job to figure out:

- what it's for
- what data is stored in there (the columns!)
- what other tables it's linked to

You will **create a poster** to illustrate what you've discovered.

After you're done researching your table and creating your visual explanation of it, we'll share our findings as a group.

---
class: center, middle

.large[
   Let's take a closer look at an actual database...
]

---

# Custom DB Tables?

- Generally discouraged in WP...the existing schema is very flexible so work with it wherever possible
- There are valid use cases for custom tables (e.g. the Posts 2 Posts and Gravity Forms plugins)
- There are tools within WP to make creating custom tables easier, but we're not going to tackle that in this course

---

# What We've Learned

- How to loop all the things in WP
- The dos and do-not-dos of secondary loops with WP Query
- How to not fear the WP database

---
template: inverse

# Questions?

{% endhighlight %}
