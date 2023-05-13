import React from 'react'
import { Input, Button, Form, FormGroup, Container,Label } from "reactstrap"
import { Link,useNavigate } from 'react-router-dom'
import { useEffect,useState, } from 'react'
import { FaSearch,FaHome} from 'react-icons/fa';

import axios from 'axios'
const Add = () => {
    const navigate=useNavigate()
    const [product,setProduct]=useState({
        title:"",
        price:"",
        image:""
        
    })
    const handelInput =(e)=>{
        const Arr={...product,[e.target.name]:e.target.value}
        setProduct(Arr)
    }

    const handelForm=(e)=>{
        e.preventDefault()
        PostApiProduct()
    }

    const PostApiProduct =async ()=>{
        try {
            await axios.post(`https://63a572342a73744b008e2ce7.mockapi.io/API/products`,product)
            navigate("/show")
        } catch (error) {
            console.log("Lỗi tại! "+error)
        }
    }
    return (
        <div>
            <Container>
                <Form onSubmit={handelForm}>
                    <FormGroup >
                    <FaSearch></FaSearch>
                        <Label>Title</Label>
                        <Input type='text' name='title' onChange={handelInput}></Input>
                    </FormGroup>
                    <FormGroup>
                    <FaHome></FaHome>
                        <Label>Price</Label>
                        <Input type='text' name='price' onChange={handelInput}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Image</Label>
                        <Input type='text' name='image' onChange={handelInput}></Input>
                    </FormGroup>
                    <Button className='btn btn-success' type='submit'>Add</Button>
                </Form>
            </Container>

        </div>
    )
}

export default Add

