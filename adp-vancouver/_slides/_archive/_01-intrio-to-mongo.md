



# Less Talking More Doing
Mongo - Doesn't run without Mongod*"
      - mongod is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations.*
      - Mongo is the command-line shell that connects to a specific instance of mongod. Mongo is a Javascript shell.



# GAME

#1 
Implicitly created on first insert() operation. The primary key _id is automatically added if _id field is not specified.

db.apple.insert( {
    user_id: "abc123",
    quantity: 55,
    quality: "A"
 } )
However, you can also explicitly create a collection:

db.createCollection("apple")

#2
Collections do not describe or enforce the structure of its documents; i.e. there is no structural alteration at the collection level.

However, at the document level, update() operations can add fields to existing documents using the $set operator.

db.apple.update(
    { },
    { $set: { purchased_date: new Date() } },
    { multi: true }
)

#3

db.apple.drop()

#4

db.apple.find()

#5

db.apple.find(
    { quality: { $ne: "A" } }
)

#6
db.apple.find( { quality: "A" } ).sort( { user_id: 1 } )


#What 
Craiglist -  For example, the ALTER TABLE command required to add a single, new field to Craiglist’s MySQL database would take months to execute. The Craigslist team migrated to MongoDB because it can accommodate changes to the data model without such costly schema migrations.

