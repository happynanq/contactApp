import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Header = (props)=>{
  let h = useHistory()
  const [isAdd, setIsAdd] = useState(h.location.pathname === "/addUser");
  
  const clickHandler = (e, type)=>{
    if(type==="toAdd"){
      setIsAdd(true)
      h.push("/addUser")  
    }else{
      setIsAdd(false)

      h.push("/")  

    }
    
      
    /*
    fetch("/api/addUser", {
      headers:{
        "Content-Type":"application/json"
      },
      body,
      method:"POST"
    })
    */ 
    
  }
  return (
    <nav>
    <div className="nav-wrapper blue darken-1 row">
      <div className="col s6 offset-s5">
        <Link to="/" className="brand-logo">Contact App</Link>
      </div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <div className="row">
          <li>
            {/* isAdd  */}

          {
            isAdd
          ? 
            <button className="btn" onClick={(e)=>{clickHandler(e, "toAll")}}>View all contanc</button>
          :
            <button className="btn" onClick={(e)=>{clickHandler(e, "toAdd")}}>add contact</button>

          }
          </li>
        </div>
      </ul>
    </div>
  </nav>
  )
}

export default Header