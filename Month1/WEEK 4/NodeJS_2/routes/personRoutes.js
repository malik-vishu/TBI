const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();

    console.log("Saved data");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error saving", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error saving", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:workT", async (req, res) => {
  try {
    const work = req.params.workT;
    if (work == "chef" || work == "waiter" || work == "manager") {
      const response = await Person.find({ work: workT });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async(req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
      new: true,
      runValidators:true
    })
    if(!response){
      return res.status(404).json({err:'Person not found'})
    }
    console.log('updated')
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
    
  }
});

router.put("/:id", async(req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndRemove(personId)
    if(!response){
      return res.status(404).json({err:'Person not found'})
    }
    console.log('data deleted')
    res.status(200).json({message:'Deleted successfully'});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
    
  }
});


module.exports = router;
