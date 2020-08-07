import React, { useState, useEffect } from 'react'
import UserContact from "./UserContact"
const Contact = ()=>{
  const [users, setUsers] = useState([]);
  const startUseApi = async()=>{
    const response  = fetch("/api/getAllUser",{
      headers:{
        "Content-Type":"application/json"
      },
      method:"POST"
    }).then(res=>res.json())
    const data  =await response
    
    setUsers([...data.users])
  }
  useEffect(() => {
    

    startUseApi() 
    
  }, []);
  return (
    <div>
    {
      users.map(u=>{
        return <UserContact name={u.name} phNum={u.phoneNumber} photo={u.img} key={u._id} id={u._id} startUseApi={startUseApi}/>
      })
    }
    </div>
    
  )
}

export default Contact