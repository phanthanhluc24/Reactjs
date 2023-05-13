import React, { Component } from 'react'
import { Route,Routes,Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Home from './Components/Pages/Home'
// import Edit from './Components/Pages/Edit'
import Add from './Components/Pages/DemoAPI/Add'
import Show from './Components/Pages/DemoAPI/Show'
import Edit from './Components/Pages/DemoAPI/Edit'
import Header from './Components/Pages/Header/Header'
import Menu from './Components/Pages/Header/Menu'
import UploadFile from './Components/Pages/ChatBox/Upload'
import Drag from './Components/Pages/ChatBox/Drag'
import Caculator from './Components/Pages/MiniTest/Caculator'
import StudentData from './Components/Pages/MiniTest/StudentData'
import ApiData from './Components/Pages/MiniTest/ApiData'
export default class App extends Component {
  render() {
    return (
      <div>
       {/* <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/show' element={<Show/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
       </Routes> */}
       {/* <Header></Header>
       <Menu></Menu> */}
      {/* <UploadFile></UploadFile> */}
      {/* <Drag></Drag> */}
      <Caculator></Caculator>
      {/* <StudentData></StudentData> */}
      {/* <ApiData></ApiData> */}
      </div>
     
    )
  }
}
