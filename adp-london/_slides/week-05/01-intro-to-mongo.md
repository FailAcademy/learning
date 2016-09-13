---
layout: slidedeck
title: Intro to Mongo Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Intro to MongoDB

.title-logo[![Red logo](/public/img/red-logo-white.svg)]


---
layout: false

# Agenda

1. NoSQL
2. Distinguish between SQL & NoSQL 
2. What is MongoDB and why we use it
3. Mongod & Mongo
4. Define collections, documents and fields
5. Use Query selector
6. MongoDB and CRUD
8. Sharding

---
# What is your relation

**MySQL** (relational database) try to position a one-size-fits-all solution

- **Examples**: Oracle, SQL Server, MySQL

- **Customers**: Uber, Nasa, USNavy

**NoSQL** is about being open and aware of alternative, exisiting and additional patterns and tools for managing your data

- **Examples**: *CouchDB, Cassandra, MongoDB*

- **Customers**: *Google, Facebook, Ebay*

---
# True or False

NoSQL is better than SQL?
![think](/public/img/slide-assets/homer-thinking.png)

---
# NoSQL vs SQL

**FALSE!**

Some projects are better suited to use a SQL db while others are better suited for NoSQL dbs

Like anything NoSQL has it's **positives** and **negatives**

Which projects should use what...?

---
# SQL

Projects where you might use SQL:

- Data requirements which can be identified up-front
- Where you want standards-based proven technology with good developer experience and support.


---
#NoSQL

Projects where you might use NoSQL:

- You have lots of data that needs to be stored which is unstructured
- Simpler/looser project objectives, able to start coding immediately
- You generally don't need to define your schema up front
- Scalability and speed needs


---
# NoSQL

So what is NoSQL?

A NoSQL database is a mechanism for storage and retrieval of data which is different from relational databases which use tabular relations.

***"Not only have SQL"*** databases have exsisted since the late 1960s but didn't gain popularity until the demands of **Web 2.0**
---
# Metaphor

A great example of the difference between **SQL** and **NoSQL** dbs is the difference between standard(NoSQL) and automatic cars(SQL).

With standard cars you are responsible for a lot more work but you are also have more freedom and are able to get more performance out of your vehicle.

But most cars simple sit in traffic and don't need that extra performance...

---
# MongoDB

We will be using MongoDB for our project and it is a Document-oriented database.
![mongo](/public/img/slide-assets/mongo_logo.png)
Mongo is viewed as an alternative to relational dbs and is great for unstructured data, especially when you have a lot of it.

Mongo's named is derived from humongus.

---
# How do they look
SQL TABLE
![SQL-Table](/public/img/slide-assets/MySQL.png)

MongoDB
```
{
  ID: 1,
  title: "JavaScript Ninja",
  Experience: 0.1,
  Industry: "Made-up",
}
```

---
# Watch

<iframe width="650" height="395" src="https://www.youtube.com/embed/b2F-DItXtZs" frameborder="0" allowfullscreen></iframe>

---
# Vocabulary

Mongo has **collections** vs. SQL's **tables**

Mongo's **collections** are made up of **documents** vs. SQL **tables** which are made up of **rows**

Relational db's management systems save **data** in **rows** within **tables**. MongoDB save's **data** as **documents** within **collections**.

---

# Documents

**Documents** exist independently. They can also have different fields

**Dynamic Schema**, allows documents to have different information but still be grouped together

**Document Field order** is always persevered except in two cases
1. The first field in the document is always the _id
2. Updates may result in the reordering of fields in the document.

---

# MongoDB
So...

MongoDB contains **collections** which are made up of **documents** which is made up of **fields** 

**Collections** can be **indexed** to improve lookup and sorting performance. 

The **cursor** which is a pointer to the result set of a query. Clients can iterate through a cursor to retrieve results.

---
# Mongod

***Straight from the Mongo docs:***

*"mongod is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations. This document provides a complete overview of all command line options for mongod."*

[Click this Link](https://docs.mongodb.com/manual/reference/program/mongod/)


Mongo is the command-line shell that connects to a specific instance of mongod. Mongo is a Javascript shell.

---
# Less Talking More Doing

In your terminal type 
```
mongod
```
In another terminal type
```
mongo
```
You should see
```
-> ~ mongo
MongoDB shell version: 3.0.4
connecting to: test
>
```

---
# Commands
```
db.help()

db.stats()

db.getCollectionNames()

use db_name

db.collection.find()

db.collection.insert({field: value})

show dbs

db.collection.remove({})

db.collection.find({field: value})

db.collection.remove({field: value})

db.collection.update

```

---
# Exercise 1

With the commands from the previous slide perform the following tasks. Make sure to replace collection with a name.

1. Can you insert multiple field and value entries into one collection?
2. Change exsisting entries
2. How do you remove specific field and values? 
3. Can you find all the entries of a specific field?

---
# Query selector 

The query selector (think the where clause in SQL) help with

- Finding
- Counting
- Updating
- Removing

Documents from collections.

---
# Exercise 2

Spend 15 minutes reading and implementing the different commands from 

[this link](https://docs.mongodb.com/manual/reference/operator/query/)

After you will be reponsible for teaching a Query operator to the rest of the class

---
# Exercise 3

In this exercise you will be working through different query commands follow the link below. Copy the JSON from the data.json file

[Link below](https://github.com/redacademy/adp-mongo-exercise3/blob/master/data.json)

Then paste the data into your terminal with mongo running

Run the command below to make sure it inserted correctly and head to the next slide
```js
db.newts.find()
```
---
# Exercise 3 continued...

Update the information you just inserted into the newts collection.

1. Use the update and set parameters
2. Increment a field by a certain amount
3. Add a value via $push operator 
4. Sort by weight
5. Sort by name then weight


---
# Data Modeling
As mentioned before MongoDB's collections do not **force document structures** therefore some decisions need to be made. 

Key Decision in designing data models:

- Structure of documents

- How the application reresents relationships between data

There are two tools that help these relationships

---
# References

**Normalized Data Models**

 References store the relationships between data by including links or <strong>references</strong> from one document to another

 [Click here](https://docs.mongodb.com/manual/reference/database-references/)

  and read the documentation after we will have a discussion

---
# Embedded documents

**Denormalized data models**

Embedded Data creates a relationship between data by storing related data in a single document structure

[Click here](http://openmymind.net/Multiple-Collections-Versus-Embedded-Documents/# 1)

What does the mean for you?

---
# Sharding

Lastly Sharding...

What the heck is Sharding?

**Shard**: a piece of broken ceramic, metal, glass, or rock, typically having sharp edges

**Think**: rather than having one solid database you "shard" (break) pieces of data across multiple machines

---
# Sharding continued...
There are two systems for dealing with system growth

**Vertical scaling**: Making the single server more powerful. More RAM more storage space - limited to available technologies

**Horizontal scaling**: "Many hands make light work" - rather than overwhelm a single server you spread the work over. There is a trade off with complexity

MongoDB horizontal scaling is **sharding**

---
class: center, middle

![sharding](/public/img/slide-assets/sharding.jpg)


---

{% endhighlight %}
