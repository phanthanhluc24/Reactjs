import React, { Component } from 'react'
import {Table,Button} from "reactstrap"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useEffect,useState } from 'react'
function List(){
    const [students,setStudents]=useState([])
    useEffect(()=>{
        getAllStudent()
    },[])

    async function getAllStudent(){
        try{
            const students=await axios.get("https://63a572342a73744b008e2ce7.mockapi.io/API/products")
            // console.log(students.data)
            setStudents(students.data)
        }catch(error){
            console.log("lôi!")
        }
       
    }

    const handleDelete = async (id)=>{
        await axios.delete(`https://63a572342a73744b008e2ce7.mockapi.io/API/products/${id}`);
        const newStudent=students.filter((item)=>{
            return item.id!==id
        })
        setStudents(newStudent)
    }
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {students.map((item,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><img style={{width:50,height:50}} src={item.avatar}></img></td>
                        <td>
                            <Link className='btn btn-success' to={`/edit/${item.id}`}>Edit</Link>
                            <Button onClick={() => handleDelete(item.id)} type='submit'  className='btn btn-danger'>Delete</Button>
                        </td>
                    </tr>
                ))}
                   
                </tbody>
            </Table>
        </div> 
    )
}


export default List
