---
layout: slidedeck
title: Intro to Databases with Postgres Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Databases with Postgres II

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Add Relations to our data
2.  Implement constraints

---

template: inverse

# Relationships Matter

---

# Relational Relationships

We've created 2 tables in our database. Each table will hold information about a specific _thing_ in our application.

Now, it's time to use our Relational Database to create relationships between them! But first it's helpful to know what kind of relationships we can define. Here are the most common:

- 1 to 1 (1:1)
- 1 to many (1:n)
- Many to many (n:n)

???

Here you can introduce the following relationships among data in the project application:

**Items and Tags share a n:n (Many to many) relationship.** <br/>
**Users and Items share a 1:n (One to many) relationship.**

We haven't mentioned Users yet. Introduce them now.

---

# Primary Keys in Action

Imagine we're storing Users in our Database (We're going to put users in a separate database and connect them using GraphQL, which we'll talk about later):

```sql
CREATE TABLE "public"."users" (
  "id" serial primary key,
  "email" text NOT NULL,
  "fullname" TEXT NOT NULL,
  "bio" TEXT
);
```

---

# Primary Keys in Action

In Relational Databases, the PRIMARY KEY is used to define relationships between tables. To relate users to their items, we would use the PRIMARY KEY as follows, when creating the items table:

```sql
CREATE TABLE "public"."items" (
  "id" serial primary key,
  "title" text not null,
  "imageurl" text DEFAULT null,
  "description" text not null,
  "ownerid" text unique not null,
  "borrowerid" text unique not null,
  CHECK (borrowerid != ownerid)
);
```

In what other table will we find the itemid?

---

# Primary Key Constraint

```sql
"ownerid" integer REFERENCES users (id),
"borrowerid" integer REFERENCES users (id)
```

These lines are telling Postgres that the values stored in these columns will be references to values stored in the `users` table, namely the userid of actual users.

This is called a **Foreign Key constraint**, because no other value can be stored in this column, and it's a common way of defining relationships between tables in a relational database.

???
WARNING: This is just for example, we're not creating a user table for the project!

---

# Exercise 1

**Defining an n:n (Many to many) relationship**<br/>

Creating a 1:n relationship is straightforward. How should we create a many-to-many relationship? <br/>

Use what you know, and see if you can reason about how to implement a many-to-many relationship between **Items** and **Tags** in your database.

???

Solution

Create a Link Table

```sql
CREATE TABLE "public"."itemtags" (
  "itemid" integer references items (id),
  "tagid" integer references tags (id),
  unique (itemid, tagid)
);
```

---

# What We've Learned

- How to create relationships between database tables using primary keys
- How add data to Postgres using SQL
- How to create a "link" table

---

template: inverse

# Questions?

{% endhighlight %}
