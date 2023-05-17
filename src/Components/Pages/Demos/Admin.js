import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Container,Form,FormGroup,Label,Input,Button,Card,CardHeader,CardBody,Col, Table} from "reactstrap"
export const Admin = () => {
    const input =useRef()
    const navigate=useNavigate()
    const [product,setProduct]=useState([]);
    const [values,setValues]=useState({
        title:"",
        price:"",
        image:""
    })

    const handeleValue =(e)=>{
        const value={...values,[e.target.name]:e.target.value}
        setValues(value)
    }

    const handelSubmit=async (e)=>{
        e.preventDefault()
        try {
            await axios.post("https://63a572342a73744b008e2ce7.mockapi.io/API/products",values)
            navigate("/Admin")
        } catch (error) {
            console.log(error)
        }

        setTimeout(()=>{
            setValues(" ")
            input.current.focus()
        },100)
    }

    useEffect(()=>{
        getAllProduct()
    },[])
    const getAllProduct= async()=>{
        try {
            const products=await axios.get("https://63a572342a73744b008e2ce7.mockapi.io/API/products")
            setProduct(products.data);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
    <Container>
        <Card>
            <CardHeader>
                <Col className='text-center'>
                    <h1>Đây là trang Admin</h1>
                    <Link to="/" className='btn btn-primary d-flex'>Quay vể trang chủ</Link>
                </Col>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handelSubmit}>
                    <FormGroup>
                        <Label>Tên sản phẩm</Label>
                        <Input type='text' name='title' onChange={handeleValue} ref={input}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Giá sản phẩm</Label>
                        <Input type='text' name='price' onChange={handeleValue} ref={input}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Ảnh sản phẩm</Label>
                        <Input type='text' name='image' onChange={handeleValue} ref={input}></Input>
                    </FormGroup>

                    <Button type='submit' className='btn btn-success'>Thêm mới</Button>
                </Form>
            </CardBody>
        </Card>
    </Container>


    <Container className='mt-5'>
        <Card>
            <CardHeader>
                <Col>Sảm phẩm</Col>
            </CardHeader>
            <CardBody>
                <Table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {product.map((item,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td><img style={{width:100,height:50}} src={item.image} alt="" /></td>
                            <td className='d-flex'>
                                <Link className='btn btn-danger mr-2'>Xóa</Link>
                                <Link className='btn btn-success'>Sửa</Link>
                            </td>
                        </tr>
                    ))}
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    </Container>
    </div>
  )
}
