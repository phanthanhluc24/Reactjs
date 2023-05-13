import { useParams,useNavigate  } from 'react-router-dom'
import { useEffect,useState, } from 'react'
import {Form,Input,Label,FormGroup,Button} from "reactstrap"
import { Link } from 'react-router-dom'
import axios from 'axios'
function Edit(){
    const {id}=useParams()
    const navigate=useNavigate()
    const [student,setStudent]=useState({
        name:"",
        price:"",
        avatar:"",
    })
    useEffect(()=>{
        getStudent()
    },[id])


    const onValue =(e)=>{
        const values={...student,[e.target.name]:e.target.value}
        setStudent(values)
    }
    async function getStudent(){
        try{
            const student=await axios.get(`https://63a572342a73744b008e2ce7.mockapi.io/API/products/${id}`)
            // console.log(student.data)
            setStudent(student.data)
        }catch(error){
            console.log("lôi!")
        }
       
    }


    const  handelSubmit = async (e)=>{
        e.preventDefault()
        try{
            await axios.put(`https://63a572342a73744b008e2ce7.mockapi.io/API/products/${id}`,student)
          navigate('/')
        }catch(error){
            console.log("lôi!")
        }
      
       
    }
    return(
        <>
            <Form onSubmit={handelSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type='text' name='name' value={student.name} onChange={onValue}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Price</Label>
                    <Input type='text' name='price' value={student.price} onChange={onValue}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Image</Label>
                    <Input type='text' name='image' value={student.avatar} onChange={onValue}></Input>
                </FormGroup>
               <Button className='btn btn-success' type='submit'>Update</Button>
               <Link to="/" className='btn btn-danger'>Cancel</Link>
            </Form>
        </>
    )
}
export default Edit