const express = require("express");
const router = express.Router();
const Plan = require("../models/plan");

//Index
router.get("/", async (req, res) => {
    try {
      res.json(await Plan.find());
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  //Create
  router.post("/", async (req, res) => {
    try {
      res.json(await Plan.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  //Delete
  router.delete("/:id", async (req, res) => {
    try {
      res.json(await Plan.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  //Update
  router.put("/:id", async (req, res) => {
    try {
      res.json(
        await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  //Show
  router.get("/:id", async (req, res) => {
    try {
      res.json(await Plan.findById(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  module.exports = router;