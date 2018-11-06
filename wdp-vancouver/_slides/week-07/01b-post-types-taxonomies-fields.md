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

1.  Functionality plugins
2.  Custom post types
3.  Custom taxonomies
4.  Custom fields/metaboxes (versus blocks)
5.  Block templates and custom blocks

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

* Code that creates your custom post types
* Code that creates your custom taxonomies
* Code that creates your custom fields
* Code that creates custom blocks
* Code that adds/adjusts user roles
* _Or anything that should continue to exist on your site regardless of what theme is activated!_

---

# How Do I Use One?

You'll have to create a custom plugin to contain all of the code that needs to be theme independent.

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

* **Post** (Post Type: `post`)
* **Page** (Post Type: `page`)
* **Attachment** (Post Type: `attachment`)
* **Revision** (Post Type: `revision`)
* **Navigation menu** (Post Type: `nav_menu_item`)

---

class: center, middle

.large[
Lightbulb moment:<br />Everything in WP is a post!
]

(well, almost everything...)

---

class: center, middle

| Posts                                          | Pages                                          |
| ---------------------------------------------- | ---------------------------------------------- |
| Typically used for blog posts/comments         | Typically used for static, one-off pages       |
| Normally appear in reverse chronological order | Live outside normal time-based listing         |
| Not hierarchical                               | Hierarchical                                   |
| Have categories and tags                       | Are not assigned categories or tags by default |
| ~~Cannot use page templates~~ Now they can!    | Can use custom page templates                  |

---

class: center, middle

### When Do We Make a CPT?

Whenever you need to create a special content type in WP to contain content that doesn't fit into the default types!

UX deliverables will help you make decisions about this.

---

# How Do We Make One?

The ability to create new custom post types is **not** native to the WP admin UI.

Knowing that, you have two ways to create a CPT:

* With code! (using the `register_post_type()` function)
* Using a plugin (like [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)) that adds a UI for this to the WP admin area

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

???

**Answer to "why do I need to do this?"**

Because WordPress saves/caches information about your permalink rewrite rules in the `rewrite_rules` option in the database (in the `wp_options` table).

When we create a custom post type or taxonomy with its own rewrite rules, the rewrite rules need to be re-cached to account for these now.

Flushing permalinks is an expensive operation, so we only want to do it when absolutely needed (i.e. never with the `init` hook, etc.).

---

# Exercise 1

Time to create a custom post type for our projects...let's build the **Product** custom post type together, and add it to our functionality plugin.

Don't forget to flush your permalinks!

Once we have created our Product custom post type, how we will add its archive page as the "Shop" menu item in the navigation menu?

---

template: inverse

# Custom Taxonomies

---

# Default Taxonomies

WordPress has three taxonomies built-in by default:

* **Category** (Taxonomy: `category`)
* **Tags** (Taxonomy: `post_tag`)
* **Post Formats** (Taxonomy: `post_format`)

---

class: center, middle

| Categories                             | Tags                                |
| -------------------------------------- | ----------------------------------- |
| Hierarchical (can have sub-categories) | Not hierarchical (no relationships) |
| Has a default ("Uncategorized")        | Does not have a default             |
| Meatier                                | Grainier                            |

---

# When and How Do We Make Them?

* Whenever you need a special way to classify your content
* Again, UX deliverables will help you make decisions
* And again, we can create custom taxonomies using our own code, or by using a plugin (but we'll use code of course!)

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

# Exercise 2

Now let's add a custom taxonomy called **Product Type** to our project. We generate the code together, and add it our functionality plugin as well.

Be sure to flush your permalinks again!

---

template: inverse

# Custom Fields <br />(versus Blocks)

---

# Custom Fields

There are two types of custom metadata we can create on our WordPress sites.

The first, as we have seen, is a **custom taxonomy**.

The second are known as **custom fields** (or **custom metaboxes** in WordPress jargon).

---

# What's the difference?

Custom taxonomies are meant for creating **classification schemes** for our content. They will be **term-based**, and they have **implications for the WordPress Template Hierarchy**.

Custom fields are meant for more **arbitrary pieces of metadata**. They are a bit **more open-ended** (can take the form of text inputs, radio buttons, select menus, etc.), and they **don't have special templates** associated with them.

---

# Fields versus Blocks

Gutenberg blocks should be used for **structuring content**.

Custom fields should be used for **storing arbitrary pieces of metadata about that content**. This data will be stored in a completely different table in the database from the rest of your post content (in the `wp_postmeta` table).

_How might we benefit from the flexibility afforded by keeping metadata separate from content?_

---

# Thought Experiment

If we had an **Event** post type on our site to manage content for an online events calendar, **what kind of custom taxonomies and fields** might we need to add to the post type to help better describe the content, and make it more functional for users?

---

# How Do We Add Them?

You have three options for adding custom fields to your site:

* With your own code! (using the `add_meta_boxes` action)
* Using a code library to expedite the process (like [CMB2](https://github.com/WebDevStudios/CMB2))
* Using a plugin (like [Custom Field Suite](https://en-ca.wordpress.org/plugins/custom-field-suite/) or [Advanced Custom Fields](https://en-ca.wordpress.org/plugins/advanced-custom-fields/))

---

class: center, middle

.large[
As usual, with great power comes great responsibility.
]

???

* As developers, you need to make thoughtful decisions about how to implement custom fields (and custom blocks) to facilitate an intuitive editing experience for the "internal" end users of a website
* Think about forward-compatibility of how you've structured/modeled your content is also important

---

class: center, middle

.large[
Important sidebar!
]

---

# Content Requires Design

* When people think about content in WP, they often just think of the ~~WYSIWYG~~ Gutenberg editor
* Again, metadata about our content likely doesn't belong in a block (it may be tricky to make decisions about this!)
* By strategically building out custom fields for our site, we are making our content more modular, repurpose-able, and future-friendly

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

# Exercise 3

Let's install the [**Custom Field Suite**](https://en-ca.wordpress.org/plugins/custom-field-suite/) together, take a tour, and try creating a field group store the price of a product.

Once we've created the price custom field, how do we get it to display in a template specific to single product posts? Check the [**WordPress Template Hierarchy**](https://wphierarchy.com/) to find out what template you'll need to create first.

Next, check the [**Custom Field Suite docs**](http://customfieldsuite.com/) to figure out how display your price metadata in the template.

---

# Exercise 4

Gutenberg allows us to create [**Block Templates**](https://wordpress.org/gutenberg/handbook/templates/) to automatically add predetermined sets of blocks to custom post types (and "lock" the templates so no other blocks can be added, if this is required).

Read the Gutenberg docs to create a block template for products. This template should have one `core/paragraph` block to add the product description. Be sure to add helpful placeholder text for the client in this block.

Also be sure to set `'template_lock' => 'all'` in your product custom post type args so that no additional blocks can be added to the template.

---

# Exercise 5

We will use our first custom block for the hero image header on the About page.

Download and install the [**Inhabitent Blocks plugin**](https://github.com/redacademy/inhabitent-blocks). Once activated, you can add the Hero Image Block to your About page content. Will you need to make any adjustments to your About page custom template now?

---

# What We've Learned

* How to install and modify a functionality plugin
* How and when to create custom post types
* How and when to create custom taxonomies
* How and when to create custom fields
* How to create Gutenberg block templates
* How to install and use custom Gutenberg blocks

---

template: inverse

# Questions?

{% endhighlight %}
