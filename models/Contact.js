const {Schema, model} = require("mongoose")

const schema = new Schema ({
  name:{type:String, required:true},
  img:{type:String, required:true},
  phoneNumber:{type:String, required:true},
})

module.exports = model("Contact", schema)