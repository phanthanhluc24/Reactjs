import React, { useState } from 'react'
import List from './List'
import axios from 'axios'
import {
    ListGroup,
    ListGroupItem,
    Container,
    Col,
    Row,
    Form,
    Button,
    Input
} from "reactstrap"

const Home = () => {
    const [student,setStudent]=useState({
        name:"",
        price:"",
        avatar:"",
    })
    const [statu,setStatu]=useState()
    const onValue =(e)=>{
        const values={...student,[e.target.name]:e.target.value}
        setStudent(values)
    }
    const  handelSubmit = async (e)=>{
        e.preventDefault()
        try{
            await axios.post(`https://63a572342a73744b008e2ce7.mockapi.io/API/products`,student)
            setStatu(true)
        }catch(error){
            console.log("lôi!")
        }

       
    }
    if(statu){
            return(
                <Home/>
            )
        }
    return (
        <div>
            <ListGroup>
                <ListGroupItem style={{ background: "yellow" }} className={"text-center"}>
                    <h2>Hello</h2>
                </ListGroupItem>
            </ListGroup>
            <Container>
                <Row>
                    <Col md="6">
                    <ListGroup>
                        <ListGroupItem style={{background:"#28a745"}} className='text-center'> Add Student</ListGroupItem>
                    </ListGroup>
                    <Form onSubmit={handelSubmit}>
                        <Input type='text' name='name' placeholder='Your Name' onChange={onValue}></Input>
                        <Input type='text' name='price' placeholder='Your Price' onChange={onValue}></Input>
                        <Input type='text' name='avatar' placeholder='Your avatar' onChange={onValue}></Input>
                        <Button className='btn btn-primary' type='submit'>Add</Button>
                    </Form>
                    </Col>
                    <Col md="6">Student List
                    <List></List>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home

