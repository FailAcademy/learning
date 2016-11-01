---
layout: lesson
title: Meteor Collections & Accounts
lesson_date: 2016-10-25
---

## Pre-Work

Prior to class, please [download and install MongoDB](https://docs.mongodb.com/manual/installation/#tutorials).

You may also wish to install a tool such as [Robomongo](https://robomongo.org/).

---

## Learning Objectives

- Explain what a NoSQL database is, and describe the differences between NoSQL and SQL databases.
- Explain the advantages of MongoDB as a choice for a NoSQL database.
- Interact with a MongoDB database through the shell.
- Explain the roles of collections, documents, and fields in relation to MongoDB.
- Use query operators to match documents based on comparison of a particular value.
- Write commands that create, read, update, and delete data from a MongoDB database.
- Explain what sharding is, and how it can make it easier to manage a large database.

---

## Keywords

- NoSQL
- MongoDB
- Mongod
- Collection
- Document
- Query operator
- Data modeling
- Normalized data models
- Denormalized data models
- Sharding

---

## Exercise 1

Partner up and understand what each of the commands do

```bash
db.help()

db.stats()

db.getCollectionNames()

db.collection.find()

db.collection.insert({field: value})

db.collection.remove({})

db.collection.find({field: value})

db.collection.remove({field: value})

db.collection.update
```

---

## Exercise 2

Create a new database using [this data](https://github.com/redacademy/adp-mongo-exercises/blob/master/data.json).

Review the MongoDB docs on [Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/) and try implementing some of these commands on your new database.

---

## Lab Activity

We're going to keep practicing our MongoDB skills, but with a much larger dataset.

Clone the following repo:

- https://github.com/redacademy/adp-mongo-project

Complete each of the challenges in `README.md` based on the dataset provided in `primer-dataset.json`.

---

## Additional Resources

- [NoSQL Databases Explained](https://www.mongodb.com/nosql-explained)
- [SQL vs NoSQL: The Differences](https://www.sitepoint.com/sql-vs-nosql-differences/)
- [NoSQL Databases: a Survey and Decision Guidance](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.db92brvvh)
- [SQL or NoSQL?](https://www.pgcasts.com/)
- [Query Translator: Convert MySQL Queries to MongoDB Syntax](http://www.querymongo.com/)
