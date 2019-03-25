---
layout: slidedeck
title: Intro to Databases with Postgres II Slides
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

1.  Review
2.  Write all of the SQL queries for your project.

---

# Exercise 1

What happens if we remove a row from our database that is referenced by its foreign key?
Add the appropriate `ON DELETE` behavior for all of the foreign keys you defined.

Hint: Using the Postico GUI will prove much easier that the `psql` shell.

???

Solution

```
ownerid (items): ON DELETE CASCADE, ON UPDATE CASCADE
borrowerid (items): ON DELETE SET NULL, ON UPDATE CASCADE
itemid (itemTags): ON DELETE CASCADE, ON UPDATE CASCADE
tagid (itemTags): ON DELETE NO ACTION, ON UPDATE CASCADE
```

---

## Lab Activity

Please see the lesson page for the lab description. There are 2 labs for this module which you'll work on over the the next 4 days.

---

# What We've Learned

- How to use SQL constraints
- The importance or the `PRIMARY KEY` constraint
- How to configure `ON DELETE` behaviour
- How to use the `JOIN` query

---

template: inverse

# Questions?

{% endhighlight %}
