const mongoose=require("mongoose")

const CartSchema= new mongoose.Schema(
    {
       id: {type: String, required: false },
       name: {type: String, required: false },
      price: {type: Number,required: true },
      img:{type: String ,required: true},
       category:{type: String ,required: true} 
    },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const CartData=mongoose.model("cart",CartSchema)
  module.exports=CartData