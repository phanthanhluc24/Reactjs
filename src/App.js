import React, { Component ,useState} from 'react'
import { Route,Routes,Router, } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Routers } from './Components/Pages/Demos/Routers/Routers'
// import Home from './Components/Pages/Home'
// import Edit from './Components/Pages/Edit'
// import Add from './Components/Pages/DemoAPI/Add'
// import Show from './Components/Pages/DemoAPI/Show'
// import Edit from './Components/Pages/DemoAPI/Edit'
// import Header from './Components/Pages/Header/Header'
// import Menu from './Components/Pages/Header/Menu'
// import UploadFile from './Components/Pages/ChatBox/Upload'
// import Drag from './Components/Pages/ChatBox/Drag'
// import Caculator from './Components/Pages/MiniTest/Caculator'
// import StudentData from './Components/Pages/MiniTest/StudentData'
// import ApiData from './Components/Pages/MiniTest/ApiData'
// import Login from './Components/Pages/Chat/Login'
// import { Chat } from './Components/Pages/Chat/Chat'
export default function App () {
  // const[showChat,setShowChat]=useState(false)
  // const[name,setName]=useState("")
  // const getName=(name)=>{
  //   setName(name)
  //   setShowChat(true)
  // }
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
      {/* <Caculator></Caculator> */}
      {/* <StudentData></StudentData> */}
      {/* <ApiData></ApiData> */}

      {/* {!showChat && <Login callback={getName}></Login>}
      {showChat &&  <Chat name={name}></Chat>} */}
      <Routers/>
      </div>
     
    )
  }

