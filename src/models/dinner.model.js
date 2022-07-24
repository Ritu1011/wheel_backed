const mongoose=require("mongoose")

const DinnertSchema= new mongoose.Schema(
    {
      name: {type: String, required: false },
      price: {type: Number,required: true },
      img:{type: String ,required: true},
       category:{type: String ,required: true}
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );

  const DinnerData=mongoose.model("dinner", DinnertSchema)
  module.exports=DinnerData