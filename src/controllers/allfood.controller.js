const express =require("express")
const AllFood=require("../models/allfood.model")

const router=express.Router()

router.get("", async (req, res) => {
    try {
      const allfood = await AllFood.find().lean().exec();
      return res.status(200).send(allfood ); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const allfood  = await AllFood.create(req.body);
      return res.status(201).send(allfood  );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
 
  
  router.get("/:id", async (req, res) => {
    try {
      const allfood  = await AllFood.findById(req.params.id).lean().exec();
   
  
      return res.status(200).send(allfood );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const allfood = await AllFood.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
   return res.status(200).send(allfood );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const allfood   = await AllFood.findByIdAndDelete(req.params.id).lean().exec();
       return res.status(200).send(allfood);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
module.exports=router