import React, { useState } from 'react'
import {Container,Form,Input,Button} from "reactstrap"
const Login = ({callback}) => {
    const[name,setName]=useState("")

    const handelValue=(e)=>{
        const name=e.target.value;
        setName(name)
    }

    const handelClick=()=>{
        callback(name)
    }
  return (
    <div>
      <Container>
        <Form>
            <Input type='text' value={name} name='value' onChange={handelValue}></Input>
            <Button onClick={handelClick} className='btn btn-success'>Đăng nhập</Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login
