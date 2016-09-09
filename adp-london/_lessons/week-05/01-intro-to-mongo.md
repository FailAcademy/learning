---
layout: lesson
title: Intro to Mongo
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

Please follow this link. https://docs.mongodb.com/manual/installation/#tutorials and complete the necessary steps to download MongoDB.

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

[Click here](https://github.com/redacademy/adp-mongo-exercise3/blob/master/data.json)

Copy the text there and paste it into your terminal with mongo running.

run the below to make sure it inserted correctly
```
db.newts.find()
```

Update the information you just inserted into the newts collection. 

1. Use the update and set parameters
2. Increment a field by a certain amount
3. Add a value via $push operator 
4. Sort by weight
5. Sort by name then vampires


---

## Project

We are going to use similar commands with a much larger data set. 



## Resources
- https://www.mongodb.com/nosql-explained
- https://www.sitepoint.com/sql-vs-nosql-differences/
- http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/
- http://www.querymongo.com/
- http://openmymind.net/mongodb.pdf

## PROJECT
Head to this [link]( https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json) and save the json with the filename primer-dataset.json