---
layout: slidedeck
title: Intro to Databases with PostgreSQL II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Databases with PostgreSQL II

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Review
2. Constraints in detail
3. Patterns for updating and deleting relational data
4. Install and set up the `node-postgres` library

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

Add the appropriate constraints to your project's database.

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
### [Postgres 9.6 Docs: Constraints](https://www.postgresql.org/docs/9.6/static/ddl-constraints.html)

---
template: inverse

# Querying Relations

---
# Exercise 2

Now that we have our data and relationships set up. Let's write some SQL queries.

- Write a query that returns all of the tags for a given Item.
- Write a query that returns the number of Items in the database.
- Write a query that returns the average number of Items which are tagged in your database.
- Write a query that returns the 5 newest Items.

---
template: inverse

# Environment Variables

---

# Environment Variables

Environment variables are: 

.large[...values available to a process, defined by the system where the process is executing. ]

---


# Environment Variables

In Express, we'll need to provide values to our application that will be used at runtime. 

.large[
    Environment variables should be *dynamic* depending on the 'Environment' where your app is running.
]

???

Explanation: 

We don't want to have to manually specify specific variables for each environment, in out application code.


---

# Defining Environments

**Development** (Your computer)
  - Connections to Express ingress from `localhost` (localhost:3000).
  - Postgres is also running on `localhost` (localhost:5432)

**Production** (On a server computer) 
  - Connections to Express ingress via some domain, eg *boom.academy.red*
  - Postgres could be running on a separate domain.

---

# Local Environment

To view your local environment run the following command:

```bash
env
```

.large[What do you see?]

---

# Learn to Use Environment Variables

Take a moment and read through this tutorial from DigitalOcean: <br/>

[How To Read and Set Environmental and Shell Variables](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps)

---

# `process.env`

Here is the code we'll use to connect Express to our environment.
This example contains the necessary configuration for connecting to Postgres. 
You should replace `boomtowndemo` with the values you set for your own database.

```js

  app.set('PGUSER', process.env.PGUSER || 'boomtowndemo');
  app.set('PGPASSWORD', process.env.PGPASSWORD || 'boomtowndemo');
  app.set('PGDATABASE', process.env.PGDATABASE || 'boomtowndemo');
  app.set('PGHOST', process.env.PGHOST || 'localhost');

```

Where should this code be written? <br/>
What other Environment variables doe we need?


???

Code should be written in a file called configs.js with the following export

```js
export default function(app) {
  app.set ...
}
```

And imported into the main `index.js` file

```js
import initConfigs from './configs
initConfigs(app);
```

Full config:

```js
app.set('DEV_JSON_SERVER', 'http://localhost:3001');
app.set('DEV_WEB_SERVER', 'http://localhost:3000');

app.set('FIREBASE_API_KEY', ...
app.set('FIREBASE_AUTH_DOMAIN', ...
app.set('FIREBASE_DB_URL', ...
app.set('FIREBASE_PROJECT_ID' ...
app.set('FIREBASE_STORAGE_BUCKET' ...

app.set('PGUSER', process.env.PGUSER ...
app.set('PGPASSWORD', process.env.PGPASSWORD ...
app.set('PGDATABASE', process.env.PGDATABASE ...
app.set('PGHOST', process.env.PGHOST ...
```

---

class: center, middle

.large[Installing `node-postgres`]


---

# `node-postgres`

This is the library we'll use to connect to our Postgres database from Express. First, install the dependency.
```
npm i -S pg
```

For usage information, take a look at the documentation. It's awesome!<br/>

.large[[Node Postgres Docs](https://node-postgres.com/)]

---

# Exercise 4

See the Lesson page for instruction on how to add Postgres to your project.
Once you've added it, add the following code to your Connection Pool instance configuration object:

```js
user: app.get('PGUSER'),
host: app.get('PGHOST'),
database: app.get('PGDATABASE'),
password: app.get('PGPASSWORD')

```

---

#Lab Activity

1) Add the necessary environment variables to our Express server.<br/>
2) Connect to our local instance of Postgres from our Node/Express server.<br/>
3) Test the connection by performing the `SELECT NOW()` query.<br/>
4) Create the necessary files & folders to hold our Postgres code. (Service pattern).<br/>
5) Begin to write the methods for querying and retrieving information from Postgres, to use in our GraphQL resolvers!<br/>

---

template: inverse

# Questions?

{% endhighlight %}
