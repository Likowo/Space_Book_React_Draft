import React, { useContext } from 'react'
import SideNavBar from '../components/SideNavBar'
// import { AppContext } from '../context/app_context'
// import { useState } from 'react'
// import { ReactDOM } from 'react'
//import Stories from "../components/Stories"

const Desktop = () => {
  // let {quotes} = useContext(AppContext)
  // console.log(quotes)
  return (
    <div className="desktop">
      <h1>DESKTOP</h1>
      <SideNavBar />
      {/* <app_context /> */}
    </div>
  )
}

export default Desktop
