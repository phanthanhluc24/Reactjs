import React from 'react'
import { Input, Button, Form, FormGroup, Container,Label } from "reactstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import { useEffect,useState, } from 'react'
import axios from 'axios'
const Edit = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [product,setProducts]=useState({
        title:"",
        price:"",
        image:""
    })
    useEffect(()=>{
        getProduct()
    },[])
    const handelInput=(e)=>{
        const Arr={...product,[e.target.name]:e.target.value}
        setProducts(Arr)
    }
    const getProduct =async ()=>{

        try {
            const product=await axios.get(`https://63a572342a73744b008e2ce7.mockapi.io/API/products/${id}`)
            setProducts(product.data)
        } catch (error) {
            console.log("lỗi!"+error)
        }
       
    }
    const putProduct= async ()=>{
        try {
            await axios.put(`https://63a572342a73744b008e2ce7.mockapi.io/API/products/${id}`,product)
            navigate('/show')
        } catch (error) {
            
        }
    }
    const handelForm=(e)=>{
        e.preventDefault()
        putProduct()
    }
  return (
    <div>
      <Container>
                <Form onSubmit={handelForm}>
                    <FormGroup >
                        <Label>Title</Label>
                        <Input type='text' name='title' value={product.title} onChange={handelInput}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Price</Label>
                        <Input type='text' name='price' value={product.price} onChange={handelInput}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Image</Label>
                        <Input type='text' name='image' value={product.image} onChange={handelInput}></Input>
                    </FormGroup>
                    <Button className='btn btn-success' type='submit'>Update</Button>
                    <Link to="/show" className='btn btn-danger'> Cancel</Link>
                </Form>
            </Container>
    </div>
  )
}

export default Edit
