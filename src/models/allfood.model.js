const mongoose=require("mongoose")

const AllFoodSchema= new mongoose.Schema(
    {
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

  const AllFoodData=mongoose.model("allFood", AllFoodSchema)
  module.exports=AllFoodData