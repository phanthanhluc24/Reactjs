import React from 'react'
import {Route,Routes} from "react-router-dom"
import Header from '../Header'
import { Admin } from '../Admin'
export const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Header></Header>}></Route>
            <Route path='/Admin' element={<Admin></Admin>}></Route>
        </Routes>
    </div>
  )
}
