---
layout: slidedeck
title: Intro to MongoDB

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
3. Mongod vs Mongo
4. Define collections, documents and fields
5. Use Query selector
6. MongoDB and CRUD
7. how to use find and sort your information
8. Sharding

---

#What is your relation

MySQL (relational DB) vendors try to position a one-size-fits-all solution

NoSQL = Catch-all term for databases that gnerally aren't relational and don't have a query language like SQL

NoSQL leans towards smaller units of responsibility. NoSQL is about being open and aware of alternative, existing and additional patterns and tools for managing your Data

---

#MongoDB

document-oriented database.

Generalized NoSQL solution. Viewed as an alternative to relational DBs. 

Like anything MongoDB has positives and negatives.

Mongo comes from the word Humongous

---

#Mongo vs PostgreSQL

Mongo has collections to SQL's tables

Mongo's collections are made up of documents where SQL tables are made up of rows

Relational db's management systems save data in rows within tables. MongoDB save data as documents within collections.

---

#Documents

Documents exist independently. 

They can also have different fields. 

Dynamic Schema, allows documents to have different information but still be grouped together. 

---

#MongoDB
So...

MongoDB contains collections which are made up of documents which is made up of fields. 

Collections can be index to iporve lookup and sorting performance. 

The cursor which is a pointer to the result set of a query. Clients can iterate through a cursor to retrieve results.

---

#Mongod

Mongod is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations.

Mongod is the server process and mongo is the client shell. it

{% endhighlight %}
