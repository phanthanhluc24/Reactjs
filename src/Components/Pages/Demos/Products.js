import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Container,Card,CardImg,Button,CardTitle,Row,Col} from "reactstrap"
export const Products = () => {

    const [product,setProduct]=useState([]);

    useEffect(()=>{
        getAllProduct()
    },[])
    const getAllProduct=async ()=>{
        try {
            const products=await axios.get("https://63a572342a73744b008e2ce7.mockapi.io/API/products")
            setProduct(products.data);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <Container className='position-relative z-index-2 mt-4'>
            <Row>
            {product.map((item)=>(
                <Col md="3" className='mt-5 d-grid '>
                    <Card className='h-100'>
                        <CardImg src={item.image}></CardImg>
                        <CardTitle>{item.title}</CardTitle>
                        <CardTitle>{item.price}</CardTitle>
                    </Card>
                    <div className='text-center mt-2'>
                    <Button className='btn btn-warning mr-2'>Mua Ngay</Button>
                    <Button className='btn btn-primary'>Chi tiết</Button>
                    </div>
                   
                </Col>
            ))}
                
            </Row>
           
        </Container>
    </div>
  )
}
