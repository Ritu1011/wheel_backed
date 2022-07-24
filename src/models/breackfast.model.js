const mongoose=require("mongoose")

const BreakFastSchema= new mongoose.Schema(
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

  const BreakFastData=mongoose.model("breakfast", BreakFastSchema)
  module.exports=BreakFastData