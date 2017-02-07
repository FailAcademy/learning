# Collections and Accounts

## Exercise 1 Solutions

### How many people are humans from Tatooine?

```bash
db.people.find({"homeworld.name": "Tatooine", "species.name": "Human"}).count()
```

**Note:** Encourage use of the implicit `$and` here.

**Answer:** 8

### How many people appear in The Empire Strikes Back?

```bash
db.people.find({ films: { $elemMatch: { $eq: "The Empire Strikes Back" } } }).count()
```

**Note:** Students may think they need to use the `$in` operator. The `$in` operator selects the documents where the value of a field equals any value in the specified array, rather than searching for matching value in an array field (e.g. `db.people.find({ name: { $in: ["Luke Skywalker", "Leia Organa"] } })`).

**Answer:** 16

### How many people are taller than than 160cm?

```bash
db.people.find({ height: { $gt: 170 } }).count()
```

**Answer:** 53

### How many people fly some form of X-Wing?

```bash
db.people.find({ "starships.name": /X-wing/ }).count()
```

**Note:** Must use a regex to find Poe's X-wing as well.

**Answer:** 5

### Return the names and masses of humans, ordered in descending order by known mass. Skip the first two results and limit your results to only four people.

```bash
db.people.find({ mass: { $type: "number" }, "species.name": "Human" }, { _id: 0, name: 1, mass: 1 }).sort({mass: -1}).skip(2).limit(4).pretty()
```

**Answer:**

```bash
{ "mass" : 110, "name" : "Jek Tono Porkins" }
{ "mass" : 89, "name" : "Qui-Gon Jinn" }
{ "mass" : 85, "name" : "Gregar Typho" }
{ "mass" : 84, "name" : "Biggs Darklighter" }
```