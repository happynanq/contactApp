import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props)=>{
  const clickHandler = ()=>{
    const data = prompt("Enter name, phoneNumber, uri of img through ';' ")
    const body = data.split(";").map(s=>s.trim())
    if(prompt(body + " right? if no enter 0, if true enter 1" )){
      return 
    }
    fetch("/api/addUser", {
      headers:{
        "Content-Type":"application/json"
      },
      body,
      method:"POST"

    })
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
            <button className="btn" onClick={clickHandler}>add user</button>
          </li>
        </div>
      </ul>
    </div>
  </nav>
  )
}

export default Header