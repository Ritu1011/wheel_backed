const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
// const importBrekfastData=require("./breakfast.json")
const BreakFastController=require("./controllers/breackfast.controllers")
const DinnerController=require("./controllers/dinner.collection")
const AllFoodController=require("./controllers/allfood.controller")
app.use(express.json())

app.use("/breakfast",BreakFastController)
app.use("/all",AllFoodController)
app.use("/dinner",DinnerController)


module.exports=app