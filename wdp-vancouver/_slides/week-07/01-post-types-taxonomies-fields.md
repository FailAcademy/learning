---
layout: slidedeck
title: Custom Post Types, Taxonomies and Fields Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Custom Post Types, Taxonomies and Fields

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Functionality plugins
2. Custom post types
3. Custom taxonomies
4. Custom fields/metaboxes

---
template: inverse

# Functionality Plugins

---

# What Is It?

We discussed last week that we don't want to include any functionality that should remain **theme-independent** in our theme files.

To avoid that, we create a **functionality plugin** for our site.

In doing, we can easily keep our custom post types, taxonomies, and fields separate from our theme.

---

# What Goes In It?

- Code that creates your custom post types
- Code that creates your custom taxonomies
- Code that creates your custom meta boxes/fields
- Code that adds/adjusts user roles
- ...anything that should continue to exist on your site regardless of what theme is activated

---

# How Do I Use One?

You'll have to create a custom plugin to contain all of the code that needs to be theme independently.

We'll learn more about plugin development later this week, but for now you can download this template and we'll work through installing it together.

**[https://github.com/redacademy/red-functionality](https://github.com/redacademy/red-functionality/archive/master.zip)**

---
template: inverse

# Custom Post Types

---
class: center, middle

.large[
   Blogging Platform &rarr; CMS
]

---

# The Defaults

WP comes with 5 default post types:

- **Post** (Post Type: `post`)
- **Page** (Post Type: `page`)
- **Attachment** (Post Type: `attachment`)
- **Revision** (Post Type: `revision`)
- **Navigation menu** (Post Type: `nav_menu_item`)

---
class: center, middle

.large[
   Lightbulb moment:<br />Everything in WP is a post!
]

(well, almost everything...)

---
class: center, middle

Posts                                          | Pages
---------------------------------------------- | ------------------------------------
Typically used for blog posts/comments         | Typically used for static, one-off pages
Normally appear in reverse chronological order | Live outside normal time-based listing
Not hierarchical                               | Hierarchical
Have categories and tags                       | Are not assigned categories or tags by default
Cannot use page templates                      | Can use custom page templates

---
class: center, middle

### When Do We Make a CPT?

Whenever you need to create a special content type in WP to contain content that doesn't fit into the default types!

UX deliverables will help you make decisions about this.

---

# How Do We Make One?

The ability to create new custom post types is **not** native to the WP admin UI.

Knowing that, you have two ways to create a CPT:

- With code! (using the `register_post_type()` function)
- Using a plugin (like [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)) that adds a UI for this to the WP admin area

We're going to learn how to do it the **code** way...

---

# How Do We Make One?

The code for registering a CPT is quite simple on the surface:

```php
function inhabitent_cpt_product() {
   $args = array();
   register_post_type( 'product', $args );
}
add_action( 'init', 'inhabitent_cpt_product' );
```

But this won't actually add the CPT to your WP admin area...you need some `$args` for that!

**[Let's take a look at the Codex.](https://codex.wordpress.org/Function_Reference/register_post_type)**

---
class: center, middle

.large[
   **[Post Type Generator](https://generatewp.com/post-type/)**
]

---

# Flushing Permalinks

Note that whenever you create a new custom post type (or taxonomy) in WP, you need to "flush your permalinks."

This can be done programmatically by calling `flush_rewrite_rules()`, or it can be done by going to **Settings > Permalinks** and clicking **Save Changes** (you don't need to change anything).

---

# Exercise 1

Time to create a custom post type for our projects...let's build the **Product** custom post type together, and add it to our functionality plugin.

Once we have created our Product custom post type, how we will add its archive page as the "Shop" menu item in the navigation menu?

---
template: inverse

# Custom Taxonomies

---
class: center, middle

### Taxonomies == Metadata

Metadata is *content about your content*.

Taxonomies are a type of metadata that are specific **classification schemes** that you can apply to your content.

---

# Types of Metadata

- **Descriptive:** relevant words or phrases that describe the subject matter of the content (e.g. title, tags)
- **Administrative:** information about how the content was created, and how it can and will be used (author, publication date, license)
- **Structural:** expresses the content (e.g. page, post)

---
class: center, middle

.large[
   Taxonomies are a type of **descriptive** metadata.
]

---

# Exercise 2

Let's try classifying some data into taxonomies that we design.

[See the lesson page](/lesson/custom-post-types-taxonomies-fields/) for details.

---

# Default Taxonomies

WordPress has three taxonomies built-in by default:

- **Category** (Taxonomy: `category`)
- **Tags** (Taxonomy: `post_tag`)
- **Post Formats** (Taxonomy: `post_format`)

---
class: center, middle

Categories                             | Tags
-------------------------------------- | ------------------------------------
Hierarchical (can have sub-categories) | Not hierarchical (no relationships)
Has a default ("Uncategorized")        | Does not have a default
Meatier                                | Grainier

---

# When and How Do We Make Them?

- Whenever you need a special way to classify your content
- Again, UX deliverables will help you make decisions
- And again, we can create custom taxonomies using our own code, or by using a plugin (but we'll use code of course!)

---

# How Do We Make One?

The code for registering a CPT is quite simple on the surface:

```php
function inhabitent_tax_product_type() {
   $args = array();
   register_taxonomy( 'product_type', array( 'product' ), $args );
}
add_action( 'init', 'inhabitent_tax_product_type' );
```

Again, we're going to need some `$args` for the taxonomy to actually do something.

**[Let's take a look at the Codex.](https://codex.wordpress.org/Function_Reference/register_taxonomy)**

---
class: center, middle

.large[
   **[Taxonomy Generator](https://generatewp.com/taxonomy/)**
]

---

# Exercise 3

Now let's add a custom taxonomy called **Product Type** to our project. We generate the code together, and add it our functionality plugin as well.

---
template: inverse

# Custom Fields / Metaboxes

---

# Custom Fields

There are two types of custom metadata we can create on our WordPress sites.

The first, as we have seen, is a **custom taxonomy**.

The second are known as **custom fields/metaboxes**.

---

# What's the difference?

Custom taxonomies are meant for creating **classification schemes** for our content. They will be **term-based**, and they have **implications for the WordPress Template Hierarchy**.

Custom fields are meant for more **arbitrary pieces of metadata**. They are a bit **more open-ended** (can take the form of text inputs, radio buttons, select menus, etc.), and they **don't have special templates** associated with them.

---

# Thought Experiment

If we had an **Event** post type on our site to manage content for an online events calendar, **what kind of custom taxonomies and fields** might we need to add to the post type to help better describe the content, and make it more functional for users?

---

# How Do We Add Them?

You have three options for adding custom fields to your site:

- With your own code! (using the `add_meta_boxes` action)
- Using a code library to expedite the process (like [CMB2](https://github.com/WebDevStudios/CMB2))
- Using a plugin (like [Custom Field Suite](https://en-ca.wordpress.org/plugins/custom-field-suite/) or [Advanced Custom Fields](https://en-ca.wordpress.org/plugins/advanced-custom-fields/))

---
class: center, middle

.large[
   As usual, with great power comes great responsibility.
]

---
class: center, middle

.large[
   Important sidebar!
]

---

# Content Requires Design

- When people think about content in WP, they often just think of the WYSIWYG editor
- Metadata about our content doesn't belong in a WYSIWYG
- By strategically building out custom fields for our site, we are making our content more modular, repurpose-able, and future-friendly

---
class: center, middle

.large[
   Blobs vs. Chunks
]

---
class: center, middle

**Worth an hour of your time to watch!**

<iframe src="https://player.vimeo.com/video/45965788" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

See also: [Adapting Ourselves to Adaptive Content](https://karenmcgrane.com/2012/09/04/adapting-ourselves-to-adaptive-content-video-slides-and-transcript-oh-my/)

---

# Exercise 4

Let's install the [Custom Field Suite](https://en-ca.wordpress.org/plugins/custom-field-suite/) together, take a tour, and try creating a field group.

---

# What We've Learned

- How to install and modify a functionality plugin
- How to create custom post types
- How to create custom taxonomies
- How to create custom fields/metaboxes

---
template: inverse

# Questions?

{% endhighlight %}
