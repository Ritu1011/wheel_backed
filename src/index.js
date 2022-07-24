const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
// const importBrekfastData=require("./breakfast.json")
const BreakFastController=require("./controllers/breackfast.controllers")
const DinnerController=require("./controllers/dinner.collection")

app.use(express.json())

app.use("/breakfast",BreakFastController)
// app.use("/dinner",DinnerController)


module.exports=app