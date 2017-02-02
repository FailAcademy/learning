---
layout: slidedeck
title: Custom WordPress Theming Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Custom WordPress Theming

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. WordPress Theming 101
2. Types of Themes
3. Basic Theme Anatomy
4. The WordPress Template Hierarchy
5. Comments, Sidebars and Menus

---
template: inverse

# WP Theming 101

---
class: center, middle

.large[
   What's a theme?
]

---
class: center, middle

.large[
   A way to skin WordPress!
]

---

# What Themes Do

**Themes can/will affect:**

- what/how content from your database is displayed
- the visual design of your site (branding!)
- the layout of your site (structure!)
- the navigation design of your site (menus!)

---
class: center, middle

.large[
   Themes are incredibly powerful if you understand how they work.
]

---

# Themes vs. Plugins

- A theme controls the **presentation** of content
- A plugin is used to control the **behavior and features** of your WordPress site

---
class: center, middle

.large[
   Themes should **not** add critical functionality to your site!
]

---
class: center, middle

.large[
   Review: What **two files** does every theme require?
]

---

# Beyond That

**At a minimum:**

- Some PHP/HTML
- Some CSS

**And probably also...**

- Some images
- Some JS
- Localization files (to translate your theme)

---

# Where Do I Get One?

- The wordpress.org [Theme Directory](https://wordpress.org/themes/)
- GitHub (to a lesser extent...)
- "Premium" theme markets and shops (e.g. Woo Themes, The Theme Foundry, ThemeForest &#9785; )
- ...or build a custom theme!

---
class: center, middle

.inline-images[
   ![Theme Forest fail](/public/img/slide-assets/premium-themes.jpg)
]

---
template: inverse

# Types of Themes

---
class: center, middle

.large[
   Child vs. Parent Themes?
]

---
class: center, middle

.large[
   Custom Themes vs.<br /> Theme Frameworks?
]

---
class: center, middle

.large[
   ...and starter themes?!
]

---
class: center, middle

The [only starter theme](http://underscores.me/) you'll ever need:

.inline-images[
   ![Underscores screenshot](/public/img/slide-assets/underscores.png)
]

---
template: inverse

# Theme Anatomy

---
class: center, middle

.inline-images[
   ![Vintage anatomy](/public/img/slide-assets/anatomy.jpg)
]

Image credit: [Double-M](https://www.flickr.com/photos/49879584@N00/4495939267/)

---

# Bones

The `index.php` file is only the beginning...

Just like our pseudo-blog, we **chunk up** our HTML into template files so they can be loaded dynamically:

- `header.php`
- `sidebar.php`
- `footer.php`

---

# Skin

- CSS (or Sass/Less/etc. compiled to CSS...)
- Images
- Fonts

---
class: center, middle

.inline-images[
   ![WP Theme Anatomy](/public/img/slide-assets/wp-theme-anatomy.svg)
]

---

# In Action

We **don't** need to use `include()` to include these template files&mdash;WordPress has special functions for that:

```php
<?php get_header(); ?>

   <div>
      <?php
         // The loop might go here...
      ?>
   </div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
```

---
class: center, middle

.large[
   But wait! There's more...
]

---
template: inverse

# The Template Hierarchy

---
class: center, middle

.large[
   The template hierarchy is how WordPress decides what template file(s) to use for individual pages for your site.
]

---

# The Many Pages of WP...

- Archive pages
- Singular pages
- Front page
- Blog post index page
- Comments pop-up page
- Search result page
- 404 page

---
class: center, middle

.large[
   The PHP files we include in our theme will determine how these pages are displayed.
]

---
class: center, middle

.large[
   **[Let's take a look...](http://wphierarchy.com/)**
]

---

# Custom Page Templates

In a file called `full-width.php` in your theme, you can:

```
<?php
/**
 * Template Name: Full-width
 */

get_header(); ?>

   <div id="primary" class="content-area">
		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'content', 'page' ); ?>
		<?php endwhile; // End of the loop. ?>
	</div><!-- #primary -->

<?php get_footer(); ?>
```

You can apply your custom template under **Page Attributes > Template** in the page editing screen.

---
class: center, middle

### Note!

Custom page templates will be globally available to all pages.

If you need to create a unique template for page, it makes more sense to create a `page-{slug}.php` template file.

---

# How Does WP Know?

WordPress knows what to load/display based on:

- the [query string](https://developer.wordpress.org/themes/basics/template-hierarchy/), or
- some WP-specific [conditional tags](https://developer.wordpress.org/themes/basics/conditional-tags/)

---

# Exercise 1

Let's demystify the [WordPress Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/) together.

Based on the questions posed, determine what will be the correct template file to select...

---
class: center, middle

### Question #1:

What template file is used to customize search results?

---
class: center, middle

### Question #2:

If you want to create a template for the single posts of a custom post type called *Products*, what will the template file name be?

---
class: center, middle

### Question #3:

What template file can we use for a static home page?

---
class: center, middle

### Question #4:

 What template files can be used for displaying blog posts on the home page?

---
class: center, middle

### Question #5:

What template file can we customize to show users when the URL they entered cannot be found?

---
class: center, middle

### Question #6:

If we don't provide a template file for `single.php` (single blog posts) or `page.php` (single pages), what new-ish template file can we use as a fallback for both?

---
class: center, middle

### Question #7:

What new template can we work with as of WP v4.4? What does it do for us?

---
class: center, middle

### Question #8:

How could we create a custom archive template for our *Product Type* taxonomy?

---
class: center, middle

### Question #9:

What two options do we have in the template hierarchy for creating a custom layout for a specific WP page?

---
class: center, middle

### Question #10:

What template file can we use to display single attachment pages for attachments that are images?

---
template: inverse

# Comments, Sidebars & Menus

---

# Comments

WordPress started out as blogging platform, so comments are a pretty big deal.

*They also take a bit of effort to customize...*

The `comments.php` file is the template file that contains all the logic for displaying the comments and the comment form.

---

# Comments

And inside `comments.php`:

- **[wp_list_comments()](https://codex.wordpress.org/Function_Reference/wp_list_comments)** can be configured with an array of arguments to customize how comments are listed
- **[comment_form()](https://codex.wordpress.org/Function_Reference/comment_form)** can be configured with an array of arguments to customize how the comment form is displayed

---

# Comments

And to add your comments template to your site (probably in `single.php` or `singular.php`):

```php
<?php
	// If comments are open or we have at least one comment, load up the comment template.

   if ( comments_open() || get_comments_number() ) :
		comments_template();
	endif;
?>
```

*Note that the `comments_template()` must go in the loop!*

---

# Sidebars

**Sidebar** in WordPress is a bit of misnomer today. So here comes some jargon...

A sidebar in WP is an **widgetized** area of your theme.

**Widgetized areas** are places where users can add their own widgets via the WordPress admin area.

---

# Sidebars

To create a **widgetized** area in a WordPress theme, in your `functions.php` file you will need to add:

```php
function my_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html( 'Sidebar' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'my_widgets_init' );
```

.footnote[.red[* ] More to come on `functions.php` tomorrow...]

---

# Sidebars

Now that we've registered our sidebar, we actually need it to show up somewhere in our theme!

So in your `sidebar.php` file:

```html
<?php
if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area" role="complementary">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</div><!-- #secondary -->
```

---

# Multiple Sidebars?

You can register multiple sidebars (i.e. widgetized areas) in a WP theme.

It's a bit more complicated, but if you're interested in exploring how it's done, then check out the **[Twenty Fourteen Theme](https://github.com/WordPress/WordPress/tree/master/wp-content/themes/twentyfourteen)** that comes bundled with the WP core.

---

# Menus

Like our sidebars, we must "register" all of the navigation menus we want to add to our WordPress theme:

In your `functions.php` file:

```php
function my_theme_setup() {
   register_nav_menus( array(
		'primary' => 'Primary Menu',
	) );
}
add_action( 'after_setup_theme', 'my_theme_setup' );
```

---

# Menus

In whatever template file you want your menu to appear (almost invariably `header.php` or `footer.php`), add:

```php
<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
```
Note that `wp_nav_menu()` has **many other parameters** that you can set to customize how the nav menu is rendered.

**[Check it out in the Codex.](https://codex.wordpress.org/Function_Reference/wp_nav_menu)**

---
template: inverse

# One Last Thing...

---

# Don't Forget!

When you build a WP theme, you want to make sure you include the following right before your closing `<head>` tag:

```html
   <!-- ...all of the <head> stuff above -->
   <?php wp_head(); ?>
</head>
```

And this right before the closing body tag:

```html
   <!-- ...all of the <body> stuff above -->
   <?php wp_footer(); ?>
</body>
```

*These template tags are very important for dynamically appending CSS and JS to our pages...more on that tomorrow!*

---

# Exercise 2

Let's explore the inhabitent site demo site and apply our knowledge of the template hierarchy.

Visit the inhabitent demo site at [tent.academy.red](http://tent.academy.red/).

Explore the site and using the WordPress template heiarchy, try to idenitfy the template files needed to build this theme. 

Write down these template files and how they correspond with the site. 


---

# What We've Learned

- What makes a WP theme
- The difference between a theme and a plugin
- Different types of themes
- How template files work
- How the WordPress template hierarchy works
- How to add comments, sidebars, and menus

---
template: inverse

# Questions?

{% endhighlight %}
