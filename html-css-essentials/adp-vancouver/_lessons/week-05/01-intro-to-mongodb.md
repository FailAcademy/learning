---
layout: lesson
title: Intro to MongoDB
slides: [_slides/week-05/01-intro-to-mongo.md]
lesson_date: 2016-10-24
---

## Objectives

- What is Mongo
- Distinguish between SQL & NoSQL
- Mongo and Mongod
- Understand collections, documents and fields.
- Mongo and CRUD
- What is sharding


## Pre-Work

Please follow this link. https://docs.mongodb.com/manual/installation/#tutorials and complete the necessary download of MongoDB.

Also read
1. https://docs.mongodb.com/manual/text-search/
2 https://docs.mongodb.com/manual/core/data-modeling-introduction/
3. https://docs.mongodb.com/manual/crud/
4. https://docs.mongodb.com/manual/mongo/

## Exercise 1

Connect to mongo via the terminal and figure out the commands needed to answer the below questions. 

1. Can you insert multiple field and value entries into one collection
2. change exsisting entries
2. How do you remove specific field and values? 
3. Can you find all the entries of a specific field

## Exercise 2

Spend 15 minutes reading and implementing the different commands from [this link](https://docs.mongodb.com/manual/reference/operator/query/)

Students will be picked at random to explain how and why they might use it.

---
## Exercise 3

[Click here](https://github.com/BFriz/mongodbData)

Copy the text there and paste it into your terminal with mongo running.

run the below to make sure it inserted correctly
```
db.unicorns.find()
```

Update the information you just inserted into the unicorns collection. 

1. Use the update and set parameters
2. Increment a field by a certain amount
3. Add a value via $push operator 
4. Sort by weight
5. Sort by name then vampires


---


## Resources
- https://www.mongodb.com/nosql-explained
- https://www.sitepoint.com/sql-vs-nosql-differences/
- http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/
- http://www.querymongo.com/
- http://openmymind.net/mongodb.pdf

## PROJECT
Head to this [link]( https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json) and save the json with the filename primer-dataset.json