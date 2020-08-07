import React, { useState } from 'react'

const AddUser = ({add})=>{
  const [user, setUser] = useState({
    name:" ",
    tnum:" ",
    uri:" "
  })
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(e.target);
    add(user)
    
  }
  const handleChange = (e)=>{
    
    console.log(e.target.value)
    setUser({...user, [e.target.name]:e.target.value})

  }
  return(
    <div className="row">
      <form className="col s12" onSubmit={submitHandler}>
      
      
        <div className="row">
          <div className="input-field col s6">
            <p>
              <input  id="name" type="text" name="name" className="validate" onChange={handleChange} value={user.name} className="active" placeholder="Name" />
              <label htmlFor="name">Name</label>
            </p>
          </div>
          <div className="input-field col s6">
            <p>

              <input id="tnum" type="text" name="tnum" className="validate"  onChange={handleChange} value={user.tnum}/> 
              <label htmlFor="tnum">Number</label>
            </p>

          </div>

        </div>
        <div className="row">

          <div className="input-field col s12">
            <p>

              <input id="uri" type="text" name="uri" className="validate" onChange={handleChange} value={user.uri}/>
              <label htmlFor="uri">URI of image</label>
            </p>

          </div>

        </div>
        
        <button className="btn blue darken-1" >add</button>

        
      </form>
    </div>
  )
}
export default AddUser