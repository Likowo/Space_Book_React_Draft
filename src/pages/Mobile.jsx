import React, { useContext } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import { AppContext } from '../context/app_context'

const Mobile = () => {

    let { windowWidth } = useContext(AppContext)

  return (
    <div className="mobile">
      <h1>MOBILE</h1>

      <Routes>
        <Route path="/home" element={ <Header parent="mobile" windowWidth={windowWidth}/> }/>
        <Route/>
        <Route/>
      </Routes>

    </div>
  )
}

export default Mobile
