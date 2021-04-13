var express = require("express");
var router = express.Router();

const Connection = require("../conection");
const Year = require('../model/year');
const Model = require('../model/model')
const Make = require('../model/make')
/* rendring to home page */
router.get("/", async function (req, res, next) {

  res.render("index");

});

//insert data in database
router.get("/create", async (req, res) => {
  console.log("req---", req.query);
  try {
    if (req.query.make && req.query.year && req.query.modelName) {
      var make = await Make.create({make:req.query.make})
      if (make) {
        let year = await Year.create({ makeId: make._id, year: req.query.year })
        if (year) {
          let model = await Model.create({ yearId: year._id, modelName: req.query.modelName })

          console.log("make", make, year, model);
          res.status(200).render('index');
        }
      } else {
        res.status(500).json({ error: "server error1" });
      }

    }
    else {
      res.status(500).json({ error: "server error2" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error3" });
  }
});


// gatting all make list
router.get("/list", async (req, res, next) => {
  console.log("req---", req.query);
  try {
    let make = await Make.find()
    let year = await Year.find()
    let modelName = await Model.find()
    let list=[];
    for(let i=0;i<make.length;i++){
      list.push({_id:make[i]._id,make:make[i].make,year:year[i].year,modelName:modelName[i].modelName})
    }
    
    console.log("make", list);
    res.status(200).render("list", { list });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }

});

// delete make
router.get("/delete/(:id)", async (req, res, next) => {

  try {
    
    await Make.deleteOne({_id:req.params.id});
    let year=Year.findOne({makeId:req.params.id})
    await Year.deleteOne({makeId:req.params.id});
    await Model.deleteOne({yearId:year._id});
   
    res.status(200).redirect("/vehicals/list");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});


// Update make form
router.get("/edit/(:id)", async (req, res, next) => {
  try {
    let make = await Make.findById(req.params.id);
    let year = await Year.findOne({makeId:req.params.id});
    let model = await Model.findOne({yearId:year._id});
    let vehicle={_id:make._id,make:make.make,year:year.year,modelName:model.modelName}
    
    res.status(200).render("update", { vehicle });
  } catch (err) {
    console.error(err);
    res.status(500).redirect("/vehicals/list");
  }

});

// Update make Data
router.get("/update/(:id)", async (req, res, next) => {
  try {
    console.log(req.query);
    let make = await Make.findOneAndUpdate({_id:req.params.id}, {$set: {make:req.query.make}})
    
    let year = await Year.findOneAndUpdate({makeId:req.params.id}, {$set: {year:req.query.year}});
    let model = await Model.findOneAndUpdate({yearId:year._id}, {$set: {modelName:req.query.modelName}});
    
    res.status(200).redirect("/vehicals/list");

  } catch (err) {
    console.error(err);
    res.status(500).redirect("/vehicals/list");
  }

});

module.exports = router;
