# vehicle-make-model-data

Year, Make, and Model data of nearly all motor vehicle manufactured between 2001 and 2015, in sql, json, and csv format.

- [Features](#features)
- [Requirement](#requirement)
- [Installation](#installation)
- [Setup](#setup)
- [Examples](#example)
  - [What models does BMW manufacture in model year 2015?](#q1)
  - [What model years was BMW R1200GS in production?](#q2)
  - [How many motor vehicle manufactures are there in model year 2015?](#q3)
- [License](#license)

## Features<a name="features"></a>

Accurate motor vehicle make & model data since year 2001. This data set includes Car, Motorcycle, Truck, and UTV manufactures and their corresponding models. 
The data is database agnostic and is user-friendly as _same_ set of data is ported to mysql, json, and csv format. Json and csv data sets are flattened while mysql data set being normalized to 3 tables.
Currently there are 19,722 models and increasing.

## Requirement<a name="requirement"></a>

None

## Installation<a name="installation"></a>

```bash
$ git clone https://github.com/arthurkao/vehicle-make-model-data.git
$ cd ./vehicle-make-model-data
```

## Setup<a name="setup"></a>

### MySQL

Replace _myDBName_ with db name to your liking. Three tables, makes, make_years, and models , will be created with proper foreign key constraint(s).

```bash
$ mysql -uroot myDBName < mysql_data.sql 
```

### Mongo

Replace _myDBName_ with db name and _myCollectionName_ with collection name to your liking.

```bash
$ mongoimport -d myDBName -c myCollectionName --jsonArray --file json_data.json
```

## Examples<a name="example"></a>

### What models does BMW manufacture in model year 2015?<a name="q1"></a>

###### Mongo

Replace _collectionName_ with the collection name set during setup

```javascript
> db.collectionName.find({ year: 2015, make: "BMW" });

# { "_id" : ObjectId("5559d73bd4ad885f71d607c1"), "year" : 2015, "make" : "BMW", "model" : "118I" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c2"), "year" : 2015, "make" : "BMW", "model" : "220I" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c3"), "year" : 2015, "make" : "BMW", "model" : "228I" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c4"), "year" : 2015, "make" : "BMW", "model" : "228I XDRIVE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c5"), "year" : 2015, "make" : "BMW", "model" : "320I" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c6"), "year" : 2015, "make" : "BMW", "model" : "320I XDRIVE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c7"), "year" : 2015, "make" : "BMW", "model" : "328D" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c8"), "year" : 2015, "make" : "BMW", "model" : "328D XDRIVE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607c9"), "year" : 2015, "make" : "BMW", "model" : "328I" }
# { "_id" : ObjectId("5559d73bd4ad885f71d607ca"), "year" : 2015, "make" : "BMW", "model" : "328I GT XDRIVE" }
# ...
# Type "it" for more
# ...

```

---

### What model years was BMW R1200GS in production?<a name="q2"></a>

###### Mongo

Replace _collectionName_ with the collection name set during setup

```javascript
> db.collectionName.find({ model: /^R1200GS/ });

# { "_id" : ObjectId("5559d73bd4ad885f71d5cc7f"), "year" : 2004, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5d1ce"), "year" : 2005, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5d743"), "year" : 2006, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5d744"), "year" : 2006, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5d745"), "year" : 2006, "make" : "BMW", "model" : "R1200GS HP2" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5dccb"), "year" : 2007, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5dccc"), "year" : 2007, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5dccd"), "year" : 2007, "make" : "BMW", "model" : "R1200GS HP2" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5e27f"), "year" : 2008, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5e280"), "year" : 2008, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5e853"), "year" : 2009, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5e854"), "year" : 2009, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5eded"), "year" : 2010, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5edee"), "year" : 2010, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5f309"), "year" : 2011, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5f30a"), "year" : 2011, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5f831"), "year" : 2012, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5f832"), "year" : 2012, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5fd68"), "year" : 2013, "make" : "BMW", "model" : "R1200GS" }
# { "_id" : ObjectId("5559d73bd4ad885f71d5fd69"), "year" : 2013, "make" : "BMW", "model" : "R1200GS ADVENTURE" }
# Type "it" for more
```

---

### How many motor vehicle manufactures are there in model year 2015?<a name="q3"></a>


###### Mongo

Replace _collectionName_ with the collection name set during setup

```javascript
> db.collectionName.aggregate([
  {$match: {year: 2015}},
  {$group: { _id: "$make" }},
  {$group: {
    _id: null,
    count: {$sum: 1}
  }}
])

# { "_id" : null, "count" : 56 }
```

## License<a name="license"></a>

MIT