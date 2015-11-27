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

### Escaping Data

All things...

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

1. Go to www.hover.com
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
   [Green Geeks](https://www.greengeeks.com/track/redacademy/cp-default/lp-1)

   20% Off Discount Code:
   **TAKE20OFF**
]

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

No one-click installs through cPanel or Plesk in shared hosting environments!

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

# Option 1: All Git

Initialize bare repo:

```bash
ssh username@123.456.789
mkdir mandiwise.git
cd mandiwise.git
git init --bare
```

Set-up a Git hook to allow deployment from local to production:

```bash
cd hooks
nano post-receive
```

Insert the following lines and save:

```bash
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received. Deploying master branch to production..."
        git --work-tree=/var/www --git-dir=/home/jame4906/mandiwise.git checkout -f
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
```

And then make post-receive executable:

```bash
chmod +x post-receive
```

In your user directory on the server:

```bash
# git remote add production ssh://username@123.456.789/mandiwise.git
```



---

# Option 2: Git-driven Deployment Tool

- Occasionally you may run into a web host that doesn't support Git
- [DPLOY](https://leanmeanfightingmachine.github.io/dploy/) is a Node package that allows you to manage deploys based on your Git commits, but deploy the added/changed files to your web host's server using SFTP/FTP
- [Dandelion](https://github.com/scttnlsn/dandelion) is the Ruby version

---

# What We've Learned

- How to keep your WP installation secure
- Different types of web hosts
- How to migrate and deploy sites on a ongoing basis

---
template: inverse

# Questions?

{% endhighlight %}
