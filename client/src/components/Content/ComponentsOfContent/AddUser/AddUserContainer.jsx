import React from 'react'
import M from "materialize-css"
import AddUser from './AddUser'

const AddUserContainer = ()=>{
  /*
    name:{type:String, required:true},
    img:{type:String, required:true},
    phoneNumber:{type:String, required:true},
   */
  const add = async(d)=>{
    try {
      const body = JSON.stringify({name:d.name,phoneNumber:d.tnum, img:d.uri })
      const response = fetch("/api/add", {
        headers:{
          "Content-Type":"application/json"
        },
        body,
        method:"POST"
      }).then(res=>res.json())
      const data = await response
      debugger
      M.toast({html:data.message})
      
    } catch (e) {
      
      console.error(e)
    }
    
  }
  return(
    <div>
      <AddUser add={add}/>
    </div>
  )
}
export default AddUserContainer