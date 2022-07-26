const express =require("express")
const  Dinner=require("../models/dinner.model")

const router=express.Router()

router.get("", async (req, res) => {
    try {
      const dinner = await Dinner.find().lean().exec();
      return res.status(200).send(dinner); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const dinner = await Dinner.create(req.body);
      return res.status(201).send(dinner );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
 
  
  router.get("/:id", async (req, res) => {
    try {
      const dinner = await Dinner.findById(req.params.id).lean().exec();
   
  
      return res.status(200).send(dinner);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const dinner= await Dinner.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
   return res.status(200).send(dinner);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const dinner  = await Dinner.findByIdAndDelete(req.params.id).lean().exec();
       return res.status(200).send(dinner );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
module.exports=router