import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'

const Tablet = () => {
  return (
    <div className="tablet">
        <h1>TABLET</h1>

        <Routes >
            <Route  path="/home" element={<Header parent="tablet"/>}/>
            <Route  />
            <Route  />
        </Routes>
    </div>
  )
}

export default Tablet
