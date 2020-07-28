import React, { useState, useEffect } from 'react'
import UserContact from "./UserContact"
const Contact = (props)=>{
  const [users, setUsers] = useState([]);
  const[, setRerender] = useState()
  useEffect(() => {
    
    const startUseApi = async()=>{
      const response  = fetch("/api/getAllUser",{
        headers:{
          "Content-Type":"application/json"
        },
        body:["Hello, Nikesh bro! "],
        method:"POST"
      })
      const data = await response
      setUsers([...data])
    }

    // startUseApi() //! Вызвать эту функцию когда будет готова апи
    const twoUser = [
      {userName:"Kirill", telephoneNumber:"+12345678910", photo:"https://sun4-10.userapi.com/SKv8BP0Pf4QelrfFzQtXY_1omfybyKLnOVLQjQ/vDbSQIntKr8.jpg", id:0 },
      {userName:"Nekish", telephoneNumber:"+01987654321", photo:"https://sun9-5.userapi.com/c858124/v858124292/223d83/vj-q5Gkmec8.jpg", id:1 },
    ]
    // А следующую строку //!! закоментировать!!
    
    setUsers([...twoUser])
  }, []);
  return (
    <div>
    {
      users.map(u=>{
        return <UserContact name={u.userName} phNum={u.telephoneNumber} photo={u.photo} key={u.id} id={u.id} setRerender={setRerender}/>
      })
    }
    </div>
    
  )
}

export default Contact