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

.left-column[

### RDBMS Recap

]

.right-column[

Here are the main takeaways from yesterday's lesson.
Can you think of any other important points?

- Data is stored in tables
- Data in tables in normalized
- Data is accessed using SQL
- Data consistency / integrity is maintained by Constraints
- Relationships between tables are defined by
  Foreign Key / Primary Key references
  ]

---

# Constraints in Detail

Here is an example of a constrain we've added to a table in our Database:

```sql
TEXT NOT NULL
```

Constraining our columns ensures that any data we add to our database is consistent.

- What other constraints are present on the columns in tables we created?<br/>
- Why are constraints important?

.footnote[.red[*]
constraints can be written in ALL CAPS or lowercase
]

???

Constraints we've created:

- text DEFAULT null
- number references items (itemid)
- number references tags (tagid)
- unique (itemid, tagid)
- serial primary key
- text not null

---

# Exercise 1

Review and ensure the appropriate constraints have been added to your project's database.

- What fields in our tables should be unique?
- What are the specific types of data we're storing in each column?
- Do we need to initialize any default values in our tables?
- How can we check if the data being sent by client applications for storage is valid?

---

# Primary Key Constraint

#### A Primary Key is the column that will be used as a reference in other tables of related data.

A Primary Key is defined by adding the PRIMARY KEY constraint to a specific column in your table.

- Can a table have more than one Primary Key?
- Does a Primary Key have to be unique for each record (row) in your table?

.footnote[.red[*]
There are other ways of defining Primary Keys
]

---

# Foreign Key Constraint

#### A Foreign Key Constraint is a column which references (usually) the Primary Key of another table.

A Foreign Key is defined by adding the PRIMARY KEY constraint to a specific column in your table.

- Can a table have more than one Foreign Key?
- Does a Foreign Key have to be unique for each record (row) in your table?

---

class: center, middle

Get to know Constraints. Take a moment and review the Postgres documentation on constraints:

### [Postgres 9.6 Docs: Constraints](https://www.Postgres.org/docs/9.6/static/ddl-constraints.html)

---

template: inverse

# Querying Relations

---

# Exercise 2

Now that we have our data and relationships set up. Let's write some SQL queries.

- Write a query that returns all of the tags for a given Item.
- Write a query that returns the number of Items in the database.
- Write a query that returns the average number of Items which are tagged in your database.
- Write a query that returns all of the Items in your database sorted by most recently created.

---

# Exercise 3

What happens if we remove a row from our database that is referenced by it's foreign key?
Add the appropriate `ON DELETE` behavior for all of the foreign keys you defined.

Hint: Using the Postico GUI will prove much easier that the `psql` shell.

???

Solution

ownerid (items): ON DELETE CASCADE, ON UPDATE CASCADE
borrowerid (items): ON DELETE SET NULL, ON UPDATE CASCADE
itemid (itemTags): ON DELETE CASCADE, ON UPDATE CASCADE
tagid (itemTags): ON DELETE NO ACTION, ON UPDATE CASCADE

---

#Lab Activity

_See the lesson page for a list of queries we'll need to write today._

Use the _Postico_ app to connect to your local instance of Postgres. Once connected, use the
SQL query interface to test your queries. Once you've completed a query, save it to a `.sql` file.

At the end of today you should have `.sql` files containing all of the queries necessary for your project.

---

template: inverse

# Questions?

{% endhighlight %}
