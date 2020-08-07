import React from 'react'
import Header from './ComponentsOfContent/Header/Header'
import Contact from './ComponentsOfContent/Contact/Contact'
import { Switch, Route } from 'react-router-dom'
import AddUserContainer from './ComponentsOfContent/AddUser/AddUserContainer'

const Content = (props)=>{
  return (
    <div className="container">
      <Header/>
      <hr/>

      <Switch >

        <Route path="/" exact>
          <Contact/>
        </Route>

        <Route path="/addUser" >
        <AddUserContainer/>
        </Route>

      </Switch>
      
    </div>
  )
}

export default Content