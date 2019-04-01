---
layout: slidedeck
title: Debugging and Version Control in WordPress Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Debugging and Version Control in WordPress

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Debugging tips
2. WP + Git

---

template: inverse

# Debugging WordPress

---

# Debugging Tips

1. Make sure `WP_DEBUG` is set to `TRUE` in `wp-config.php` (in your dev environment only though!)
2. Install the [Debug Bar](https://wordpress.org/plugins/debug-bar/)
3. Install [Query Monitor](https://wordpress.org/plugins/query-monitor/)
4. Install the [Theme Check Plugin](https://wordpress.org/plugins/theme-check/) and run it before you submit your project!

Also, generally make sure that you're adhering to WordPress' [PHP Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/).

---

# Exercise 1

Install Theme Check and Debug Bar.

Try running Theme Check now. What message do you see?

If the Debug Bar link in the Admin bar is orange or red, be sure to investigate those warnings.

---

template: inverse

# WordPress & Git

---

class: center, middle

.large[
Many schools of thoughts...
]

---

# My Approach

1. Initialize a Git repo at the root of your `wp-content` folder
2. **Ignore everything**...then **selectively unignore** what you want in your repository (e.g. your specific custom theme, a functionality plugin, other bespoke plugins)
3. ...?
4. Profit!

---

class: center, middle

.large[
Why do it this way?
]

---

# Advantages

1. We typically don't need to version-control things at the WP core level (and working on a project version-controlled at this level with a team can be tricky...)
2. We typically don't need to version-control third-party plugins and themes (someone else should be doing that!)
3. It saves us from remembering to add new plugins or themes that we don't want to track to our `.gitignore` as we install them (they will be ignored by default)

---

# WP .gitignore

```bash
# Ignore everything in "wp-content" except these directories. #
/*
!.gitignore
!plugins/
!themes/
!uploads/
!README.md

# Ignore everything in "plugins" except certain plugins. #
plugins/*
!plugins/inhabitent-functionality/
!plugins/business-hours-widget/

# Ignore everything in "themes" except the active theme. #
themes/*
!themes/inhabitent/

# Ignore packages #
themes/inhabitent/node_modules/
```

---

# And the Usual Suspects

Also ignore...

```bash
# Ignore OS files #
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
*[Tt]humbs.db
*.Trashes

# Ignore logs and databases #
*.log
*.sql
*.sqlite
error_log
access_log
```

---

# Exercise 2

Time to add some version control to your project.

Initialize a Git repository in your project's `wp-content` directory in MAMP, add the `.gitignore` file as recommended, stage your files, make your commit, add a remote from GitHub, and push your code!

---

# What We've Learned

* How to debug WordPress
* How to version control our WP projects

---

template: inverse

# Questions?

{% endhighlight %}
