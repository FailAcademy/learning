---
layout: slidedeck
title: WP Security, Deployment and Hosting Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# WP Security, Deployment and Hosting

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Securing all the things
2. Hosting 101
3. Migrating and deploying

---
template: inverse

# Securing WordPress

---
class: center, middle

.large[
   PHP is **not** secure by design (but it's easy to learn...).
]

---
class: center, middle

.large[
   Security is your responsibility!
]

---

# What to Worry About

- Sanitizing data (cleaning up user input)
- Validating data (verifying user input)
- Escaping data (securing output)

---
class: center, middle

### Escaping Data

Escaping changes **possibly evil** content into **safe content**.

---

# How and Why?

- Escaping converts characters or strings to be interpreted literally so that those characters can't be interpreted as code
- One of the biggest concerns is around the `<script>` tag
- Very dangerous to output a malicious `<script>` tag when the page loads!
- Escaping the tag would turn it into `&lt;script&gt;` when the page renders

---
class: center, middle

### Escaping in WP

WordPress offers us [many functions](http://codex.wordpress.org/Data_Validation) that help us escape our data as it goes into and comes out of the database.

---

# esc_html()

**Used for:** Output that should have absolutely no HTML in the output.

**What it does:** Converts HTML special characters (such as `<`, `>`, `&`) into their "escaped" entity (`&lt;`, `&gt;`, `&amp;`).

**[esc_html() in the Codex.](http://codex.wordpress.org/Function_Reference/esc_html)**

---

# esc_attr()

**Used for:** Output being used in the context of an HTML attribute (think `title`, `data-` fields, `alt` text).

**What it does:** The exact same thing as `esc_html`. The only difference is that different WordPress filters are applied to each function.

**[esc_attr() in the Codex.](http://codex.wordpress.org/Function_Reference/esc_attr)**

---

# esc_url()

**Used for:** Output that is necessarily a URL. Examples would be image `src` attributes and `href` values.

**What it does:** A more thorough, specific escaping than the `esc_attr` & `esc_html` functions, which removes or converts any characters not allowed in URLs into their URL-safe format.

**[esc_url() in the Codex.](http://codex.wordpress.org/Function_Reference/esc_url)**

---

# wp_kses()

**Used for:** Output that needs to allow some HTML, but not all tags or attributes.

**What it does:** Strips the content of any tags or attributes that don't match the list of rules passed in.

**[wp_kses() in the Codex.](http://codex.wordpress.org/Function_Reference/wp_kses)**

---
class: center, middle

### Hardening WP

By taking a few basic steps up front, we can potentially save ourselves a lot of hassle down the road with our WP sites...

---

# Be Smart!

- Pick a good host
- Don't use **admin** for any username
- Pick long, complex passwords
- Change your DB prefix
- Set-up the salts in `wp-config.php`
- Don't trust anyone/anything!

---
class: center, middle

.large[
   More WordPress security basics in the [Codex](http://codex.wordpress.org/Hardening_WordPress).
]

---

# Security/Spam Plugins

- [Akismet](https://wordpress.org/plugins/akismet/)
- [Bad Behavior](https://wordpress.org/plugins/bad-behavior/)
- The "Protect" feature in [Jetpack](https://wordpress.org/plugins/jetpack/)

---

# CYA with Backups!

It's absolutely essential that you set-up some kind of automated back-up system for your site!

The essentials of WP back-ups:

- Back up your **site files** AND your **database**
- Don't store your back-ups in your hosting environment (**use third-party storage** like Amazon S3 or Rackspace)
- Use a plugin to **automate the process** on a regular schedule
- **Never trust your host** to back-up your site for you!

---
class: center, middle

.large[
   How often? It depends!
]

---
template: inverse

# Hosting WordPress

---

# Basic Steps

1. Purchase a domain name
2. Select a web host
3. Set the nameservers

---

# Domain Names

There are plenty of domain name registrars out there...

Hover has a simple user interface and they don't try to up-sell you with extra services that you don't need when you buy your domain.

---

# Buying a Domain Name

To purchase a domain, follow these simple steps:

1. Go to [www.hover.com](http://www.hover.com)
2. Type in your desired domain name
3. Add the domains you want to your cart
4. Register for the service and pay (keep this user and password handy)

---

# Types of Web Hosts

So far, we've seen how we can use GitHub Pages to host our web pages, but there are many other options:

- Shared hosting
- Managed hosting
- Dedicated/VPS hosting

---

# Shared Hosting

Shared hosting is the most **basic** and **inexpensive** hosting option.

The trade-off is that there can be **greater security risks** in these hosting environments, and you're also **sharing server resources** with other websites.

Some shared web hosting options include: [GreenGeeks](http://greengeeks.com/), [SiteGround](https://www.siteground.com/), [Bluehost](http://www.bluehost.com/), and [Site5 Hosting](http://www.site5.com/).

---

# Managed Hosting

Managed hosting is **more hands-on** than a typical shared hosting plan.

A managed hosting option will **provide software and security updates** for you, and variety of other potential services such as spam filtering and caching.

Managed hosting is usually **more expensive** than shared hosting plans.

An example of a managed web host is [WP Engine](http://wpengine.com/).

---

# Dedicated/VPS Hosting

Dedicated web hosting means just that—your website **lives on server by itself** and you control what's installed on it.

VPS hosting is like a **hybrid** of shared hosting and dedicated hosting. Your website will live on server with other websites, but you control what's installed on the server.

Your VPS host will also provide a **minimum allocation of resources** for your site 24/7.

[Digital Ocean](https://www.digitalocean.com/) is an example of a VPS hosting option.

---

# Picking a Host

What hosting option you pick will depend on your needs and the type of website you're launching.

The key is to do your homework! Whichever option you choose, you want to make sure your host has:

- Consistent up-time
- 24/7 support
- Track record of good customer service

---
class: center, middle

.large[
   How do you connect your domain name to your host?
]

---
class: center, middle

### Nameservers!

**Name servers**, or **DNS servers**, translate the domain name you use to the actual numeric IP address used by the machines.

---

# Nameservers

Once you have a domain name and hosting plan, you'll need to set your domain to point to your web host's public name servers. They will look something like this:

.center[
   `ns1.greegeeks.com`

   `ns2.greengeeks.com`
]

Every web host will have unique name servers, and will likely email them to you when you sign-up.

---
class: center, middle

.inline-images-border[
   ![Changing nameservers](/public/img/slide-assets/domain-dns.jpg)
]

---
class: center, middle

.large[
   Then wait...
]

---
template: inverse

# Migrating and Deploying WordPress

---
class: center, middle

### Rule No. 1 of WP Hosting

**DO NOT TRUST** one-click installs through cPanel or Plesk in shared hosting environments!

---

# Setting Up WP

1. Create your database in phpMyAdmin (you may want to create a special database user too)
2. Download WP and FTP the core files into the appropriate directory in your hosting environment
3. Create your `wp-config.php` and add the appropriate info (`WP_DEBUG` should be `false` salts and db prefix too!)
4. Complete the install as you usually do

---
class: center, middle

.large[
   What three things do you need to migrate a WordPress site?
]

---

# Migrating Your Site Files

To migrate your site files, all you need to do is transfer the files in your local `wp-content` folder into the `wp-content` folder on your server.

That means your uploads, themes, and (most of) your plugins!

We can use FTP for to do this, or we can use Git-based deployments (more on that in second...).

---

# Migrating Your DB

1. Use the [WP Migrate DB](https://wordpress.org/plugins/wp-migrate-db/) plugin to export your local database (this is important if you don't want to break **serialized** arrays)
2. In phpMyAdmin drop all the tables in the DB you just created
3. Import the file you just exported locally into the DB in the live environment
4. Make sure everything looks OK on the front and back ends of your site :)

---

# Using Git for Deploys

Manually FTPing files into our hosting environment after we change them locally is time-consuming and it's easy to make a mistake.

Instead, we can use Git to manage our initial and ongoing deployments of our site files.

---
class: center, middle

### First, What's SSH?

It's a network protocol that allows you to securely send data from one computer to another.

---

# Option 1: All Git

If your web host support Git, you can up a remote repo on that server to manage your deploys.

First, you'll need to initialize **bare** repository:

```bash
ssh username@123.456.789
# enter your password if prompted...
mkdir mandiwise.git
cd mandiwise.git
git init --bare
```

A [bare repo](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/) is simply a repo with no working tree.

---

# Option 1: All Git

Next, you'll set-up a [Git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to allow deployment from local to production.

Do do that, `cd` a level down in your repo's `hooks` sub-directory, and open the `post-receive` hook file using `nano`:

```bash
cd hooks
nano post-receive
```

---

# Option 1: All Git

Once the nano editor has opened, (customize and) insert the following lines:

```bash
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received. Deploying master branch to production..."
        git --work-tree=/var/www --git-dir=/home/username/mandiwise.git checkout -f
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
```

---

# Option 1: All Git

Once you've inserted those lines, press `CTRL + O` and press `ENTER` to save, then `CRTL + X` to exit the file.

Next, you'll need make to make the `post-receive` hook executable by running the following command:

```bash
chmod +x post-receive
```

---

# Option 1: All Git

Lastly, go back to your local version of the repo, and add your new remote to it.

```bash
git remote add production ssh://username@123.456.789/mandiwise.git
```

You should now be able to push changes to your remote using:

```bash
git push production master
```

---

# Option 2: Git-driven Deployment Tool

- Occasionally you may run into a web host that doesn't support Git
- [DPLOY](https://leanmeanfightingmachine.github.io/dploy/) is a Node package that allows you to manage deploys based on your Git commits, but deploy the added/changed files to your web host's server using SFTP/FTP
- [Dandelion](https://github.com/scttnlsn/dandelion) is the Ruby version

---

# Setting Up DPLOY

DPLOY just takes a few steps to set up:

```bash
# Globally install DPLOY
npm install dploy -g

# Install DPLOY in the same directory where your Git repo lives
cd ProjectName/
dploy install
```

---

# Setting up DPLOY

Installing DPLOY will create a `dploy.yaml` file that you will need to configure with your info:

```bash
prod:
    scheme: sftp
    host: mywebsite.com
    port: 22
    user: username
    pass: password
    branch: master
    check: true
    path:
        remote: public_html/
    exclude: ["README.md", ".gitignore"]
```

See DPLOY's GitHub repo for [more config options](https://github.com/LeanMeanFightingMachine/dploy).

---

# Using DPLOY

Now whenever you want to deploy changes to your site, all you have to do is run this command when in your local website folder:

```bash
dploy prod
```

DPLOY keeps track of the last time you deployed based your Git commits, and only deploys the files that changed since then.

---

# What We've Learned

- How to keep your WP installation secure
- Different types of web hosts
- How to migrate and deploy sites on a ongoing basis

---
template: inverse

# Questions?

{% endhighlight %}
