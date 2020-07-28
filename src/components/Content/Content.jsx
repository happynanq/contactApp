import React from 'react'
import Header from './ComponentsOfContent/Header/Header'
import Contact from './ComponentsOfContent/Contact/Contact'

const Content = (props)=>{
  return (
    <div className="container">
      <Header/>
      <hr/>
      <Contact/>
    </div>
  )
}

export default Content