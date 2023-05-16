import React, { useState, useEffect, useRef } from 'react'
import { Input, Button } from "reactstrap"
import { database, ref, push, onValue } from "./Fire"
import "../../../Css/Chat.css"
export const Chat = ({ name }) => {
    const [inputmass, setInputMasss] = useState("")
    const input = useRef()
    const [mess, setMess] = useState([])
    useEffect(() => {
        onValue(ref(database, "mess"), data => {
            let getMess = []
            data.forEach(element => {
                getMess.push(element.val())
            });
            setMess(getMess)
        })
    }, [])

    const handelValue = (e) => {
        const value = e.target.value;
        setInputMasss(value)
    }
    const handelSentMess = () => {
        push(ref(database, 'mess'), {
            name: name,
            mess: inputmass
        })
        setTimeout(() => {
            setInputMasss('');
            input.current.focus();
        },100);
    }
    return (

        <>
            <div>xin chào {name}</div>
            <ul>
                {mess.map((mess) => (
                    <li  className={`message-item ${mess.name === name ? 'right' : 'left'}`}>
                        <span>{mess.name}: </span>
                        <span>{mess.mess}</span>
                    </li>
                ))}

            </ul>

            <Input type='text' value={inputmass} onChange={handelValue} ref={input}></Input>
            <Button onClick={handelSentMess}>Gửi</Button>
        </>
    )
}
