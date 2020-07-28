import React, { useEffect } from 'react'
import M from "materialize-css"
const UserContact = (props)=>{
  // name photo phNum
  // TODO: Сделать popup 
  // useEffect(()=>{
  //     console.log("wewe");
  //     var elems = document.querySelectorAll('.modal');
  //     var instances = M.Modal.init(elems);
  //     console.log(instances);
  //     instances.open();
  // })

  const action = (uri, method, body)=>{
    fetch(uri, {
      headers:{
        "Content-Type":"application/json"
      },
      method,
      body

    }).then((r)=>{props.setRerender(r)})
  }

  const clickHandler = async()=>{
    let id = props.id
    const res = +prompt("Select an action: 1: delete user, 2:modify ")
    switch (res) {
      case 1:
        action("/api/delete", "DELETE", {id})
        break;
      case 2:
        action("/api/modify", "POST", {id})
        break;
    
      default:
        alert("bad data :d")
    }
  }
  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <img src={props.photo} alt="User" className="circle"/>
        {/* <span className="title">Title</span> */}
        <p>
        {props.name}; {props.phNum}
        </p>
        <button className="btn" onClick={clickHandler}>Action</button>


        {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
        {/* <div className=" secondary-content">
          <select ффclassName="secondary-content">
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div> */}
        

        

        {/* <button className="btn secondary-content">call</button> */}
        {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div> */}
        
      </li>
    
  </ul>
  )
}

export default UserContact