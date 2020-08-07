const express =require("express")
const rp = require("request-promise") 
const config = require("config") 
const { connect } = require("mongoose")
const app = express()

app.use(express.json({extended:true}))
app.use("/api", require("./routes/contact"))

const start =async ()=>{
  try {
    await connect(config.get("mongoUrl"),{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
    })

    app.listen(5000, ()=>{
      console.log("[server was startder...]")
    })    
  } catch (e) {
    console.log(e)
  }
}
start()