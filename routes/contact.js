const {Router, json} = require("express")
const Contact = require("../models/Contact")
const router = Router()

router.post("/getAllUser",async (req,res)=>{
  try {
    const users = await Contact.find()
    res.status(200).json({users, message:"Пользователи получены"})
  } catch (e) {
    console.error(e)
  }
}) 

router.post("/add", async(req,res)=>{
  const d = {...req.body}
  console.log("Data: ", d)

  const user = new Contact({...d})
  await user.save()
  res.status(200).json({ message:"Пользователь создан"})
})

router.post("/modify", async(req,res)=>{
  let c = Contact.findOneAndUpdate({_id:req.body.id}, {...req.body} )
  await c.save()
  res.json({message:"Пользователь модифицирован"}, )

})

router.post("/delete", async(req,res)=>{
  // let f = await Contact.findOne({_id:req.body.id})
  let c = await Contact.deleteOne({_id:req.body.id})
  // console.log(f)
  res.json({message:"Пользователь удалён"} )

})

module.exports = router