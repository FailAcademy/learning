---
layout: lesson
title: Intro to Mongo
slides: [_slides/week-05/01-intro-to-mongo.md]
lesson_date: 2016-10-24
---

## Objectives

1. Define NoSQL
2. What is MongoDB and why we use it
3. Know the purpose of Mongod & Mongo
4. Define collections, documents and fields
5. Use a Query selector
6. Write commands in Mongo that CRUD
7. Understand the purpose of Sharding
8. Be able to debate the differences of NoSQL & SQL


## Pre-Work

Please follow this link. https://docs.mongodb.com/manual/installation/#tutorials and complete the necessary steps to download MongoDB.

## Keywords

- NoSQL
- Mongo
- Mongod
- Collection
- Document
- Sharding
- Query selector
- Data Modeling
- Normalized Data models
- Denormalized Data models

## Exercise 1
Partner up and understand what each of the commands do

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

## Exercise 2

[Click Here](https://raw.githubusercontent.com/redacademy/adp-mongo-exercise3/master/data.json?token=ALZHC1bq8DWbeqm4YPxcxDD2zuxv7an7ks5X5B_EwA%3D%3D#)
and copy the information into a new dbs.

Spend 15 minutes reading and implementing the different commands from 

[This Link](https://docs.mongodb.com/manual/reference/operator/query/)

After everyone will be reponsible for teaching a Query operator to the rest of the class

---

## Project

We are going to use similar commands with a much larger data set. Head over to https://github.com/redacademy/adp-mongo-project and clone down the repo. From there answer each of the questions in the README.

Head to this [link]( https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json) and save the json with the filename primer-dataset.json

## Resources
- https://www.mongodb.com/nosql-explained
- https://www.sitepoint.com/sql-vs-nosql-differences/
- http://www.querymongo.com/
- http://openmymind.net/mongodb.pdf
