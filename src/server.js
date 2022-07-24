const app=require("./index")
const connect=require("./configs/db")
const port=process.env.PORT || 5100;

app.listen(port,async()=>{
    try {
        await connect();
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log({message:error.message})
    }
})