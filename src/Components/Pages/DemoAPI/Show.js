import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { Link,useParams} from 'react-router-dom'
import { Container,Card,Row,Col,CardImg,CardTitle,Button } from 'reactstrap'

const Show = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        getAllProducts()
    },[])

    const getAllProducts =async ()=>{
        try {
            const products=await axios.get(`https://63a572342a73744b008e2ce7.mockapi.io/API/products`)
            setProducts(products.data)
        } catch (error) {
            console.log("Lỗi!"+error)
        }
    }

    const handelDelete =async (id)=>{
        try {
            await axios.delete(`https://63a572342a73744b008e2ce7.mockapi.io/API/products/${id}`)
            const product=products.filter((item)=>{
                return item.id!=id
            })
            setProducts(product)
        } catch (error) {
            
        }
    }
    return (
        <div>
            <Container>
                <Row>
                {products.map((item)=>(
                    <Col md="4">
                        <Card>
                            <CardImg src={item.image}></CardImg>
                            <CardTitle>{item.title}</CardTitle>
                            <CardTitle>{item.price}</CardTitle>
                           <Link className='btn btn-primary' to={`/edit/${item.id}`}>Edit</Link> 
                            <Button onClick={()=>handelDelete(item.id)} type='submit'>Delete</Button>
                        </Card>
                    </Col>
                ))}
                   
                </Row>
            </Container>
        </div>
      )
    }

  


export default Show
