---
layout: slidedeck
title: Intro to WordPress Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to WordPress - Part 1

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  What is WordPress?
2.  Installing WordPress
3.  The admin area

---

template: inverse

# What is WordPress?

---

class: center, middle

.large[
What is a CMS for?
]

---

# Why WordPress?

- It powers ~30% of the top 10 million websites
- More non-English than English downloads of WP
- Very extendible via many different APIs
- Backward compatibility
- The back-end UI does not suck

???

WordPress percentage changes often and is displayed on wordpress.org

<a href="https://www.codeinwp.com/blog/wordpress-statistics/" target="_blank">wordpress-statistics</a>
---

# Just for Blogs?

- WordPress allows us to create **custom post types** and **custom taxonomies**, and also has a host of other features that make it far more CMS-like than it used to be
- Some people even use it as an application platform...

???

Custom taxonomies: a grouping mechanism for some posts (or links or custom post types

Wordpress USED to be just for blogging, but with the addition of more sophisticated plugins, like ordering/payment, it quickly became used for e-commerce more and more

---

# .org vs .com

- .com sites are a hosted service offered by [Automattic](https://automattic.com/)
- .com sites don't offer much in the way of customization
- .org sites are self-hosted by you
- .org sites are entirely customizable via plugins and themes

???

* As you can see, there are pros and cons to both .org and .com, the main difference being customizability vs ease of launch


---

template: inverse

# Installing WordPress

---

# Running WP Locally

- Running a WP site locally on your computer is a bit different from a static HTML site
- We need to use a local server environment to do that (MAMP!)
- We must start MAMP's servers in order to see our site

---

class: center, middle

# Download Wordpress

[https://wordpress.org/download/](https://wordpress.org/download/)

---

# Exercise 1

1.  Unzip your download and move it to your `htdocs` folder
2.  Start MAMP after choosing the folder you added to `htdocs` as the document root 
3.  Go to phpMyAdmin (via MAMP) and create a new database
4.  Rename `wp-config-sample.php` to `wp-config.php` and fill in your database name and MAMP credentials from the MAMP start page
5.  Go to http://localhost:8888/wp-admin/install.php

???

#### Exercise Suggestion:

Students independently try the local install. Then do a fresh install walk through together. Even if individuals figured it out, get everyone to start new.

Note that there are a few ways to install locally.

*Let the students know:* where to find database credentials, change default installation values (admin, wp\_)

(10~15 min)

---

template: inverse

# WordPress Tour

---

class: center, middle

.large[
**WP UI Components**
]
<br /><br />
.inline-images[
![WP Front and Back Ends](/public/img/slide-assets/wp-front-back-concept.svg)
]

???

#### Exercise Suggestion

WP Basics Handout:

Get students to walk through the UI of WordPress and to make notes in their worksheets as to what they discover. ( ~10-15 mins).

Once 'complete', get them to share findings at their table ( ~5-8 mins).

Finally, each table shares their findings with the class (~5 mins).

---

class: center, middle

.large[
**WP Internal Components**
]
<br /><br />
.inline-images[
![WP Database and Core](/public/img/slide-assets/wp-db-core-concept.svg)
]

???

They don't have to fill this in yet. Mention the db & core files and then goto the next slide. 

---

# What Is It All For?

- The **MySQL database** contains all of the data (content and saved settings) for your WP site
- The **PHP** files generate your site on the server (with the help of the **Apache** web server) so it can be rendered as HTML in the browser
- You can use PHP to get data from your database and populate your website with it&mdash;this is the difference between **dynamic sites** and static sites

???

For visual aid, you can draw out the components & show how they connect. 

In the next slides we can fill in the worksheet e.g. the core files & wp-content/

---

# Exploring the Database

Let's take a look at the WordPress database files we just created when we installed WordPress.

To do that, go to the MAMP WebStart page and click on the **Tools > phpMyAdmin** in the menu.

phpMyAdmin is a free tool (written in PHP) that can be used to manage MySQL databases via a web browser. We can also use a desktop-based app like Sequel Pro (Mac only) or MySQL Workbench.

You can use the username `root` and password `root` to log into the phpMyAdmin interface.

---

# Exploring the Core Files

Inside your WP installation directory...

- `wp-admin/`
- `wp-content/`
  - `plugins` - each plugin usually has its own directory
  - `themes` - each theme as its own directory
  - `uploads` - created on first media file upload
- `wp-includes/`
- `wp-config.php`

???

Emphasize to never touch wp-admin/ or wp-includes/

---

# What's Inside?

This is where you'll keep all of the code and content that's specific to your site:

- `wp-content` directory
- `wp-config.php`
- database

???

#### Recap

wp-content is where we will be working.

---

# WordPress Dashboard

- **Settings**
  - General, Reading, Discussion, and **Permalinks**
- **Users** ([Roles and Capabilities](https://codex.wordpress.org/Roles_and_Capabilities))
- **Appearance**
  - Themes, Customize, Widgets, and Menus
- **Plugins**

???

Be sure to mention how visiting the permalinks section helps with flushing permalinks, e.g. first step in debugging pages not working due to url rewrites.

You can also mention the customizer.

---

class: center, middle

.large[
Don't edit your theme or plugin files with the built-in Editor...
]

???

Show editor. As of WP 4.9.1. they have added an editor warning, syntax highlighting and CSS editor (in the customizer).

---

class: center, middle

.large[
And don't let other people do that either!!!
]

???

Admin and super admin roles are the only roles that can access the UI's file editor 

---

# Creating Content

- Posts
- Categories and tags
- Comments
- Pages
- Media

---

# Gutenberg Editor

- Implemented in core in WordPress 5.0+
- A new way to add content to the WP admin interface
- Uses "blocks" to structure your content
- You can create custom blocks (use React for this!)
- Now we must think about what should live in a content block versus what is separate metadata about the content (more on this to come!)

---

class: center, middle

.large[
Single vs. Multisite
]

???

***For our purposes, we'll be using single site only, buuuut:***

### Pros:
* It’s free to use and super scalable because it supports as many WordPress sites as you need.
* Quickly access all websites by logging in one time and managing all sites from one WordPress dashboard panel.
* Only install your plugins and themes one time, resulting in less server strain.
* It’s very shareable – central code is shared so you don’t need to update each individual site
* the user base is shared, meaning usernames and passwords are consistent across all sites
* plugins are shared so all sites have similar internal and external features, and themes are shared (though each site can have their own) so swapping designs across sites is easily done.


### Cons: 

* All users who are added to your network will be guests on all sites on your network. To allocate a different default role for users on individual sites, you must use a plugin.
* Site administrators cannot install new themes or plugins and cannot edit the profiles of users on their individual sites. Only the Network Admin has the ability to perform these tasks in a WordPress network.
* There is no way to restrict plugins on individual sites.
* All themes are installed for the entire network. If you edit the code of one theme, you edit it for all sites using that theme. - Note: You can install plugins in order to allow each site to tweak their own CSS without affecting anyone else.
* There are many plugins that aren’t WordPress Multisite compatible.
* Changing hosts, or removing a single site from Multisite is a very difficult thing to do.

---

# Mini-Exercise

Log into the WordPress site you just created (if you haven't already) and try creating a **new post and page** of your own.

Experiment with various configurations of **blocks** in the Gutenberg editor.

Create some **categories and tags** too, and apply them to your new post.

Now check out the front end of your site...do you see your new content?

---

# What We've Learned

- How to install a self-hosted copy of WordPress
- The ins and outs of the WordPress admin area
- How to add content to WordPress

???

---

template: inverse

# Questions?

{% endhighlight %}
