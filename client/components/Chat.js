import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'
import auth from '../auth/auth-helper'
import { getUser } from '../chat/users'


const Chat = ( ) => {
    const [ messages, setMessages] = useState([])
    const [ message, setMessage] = useState([])
    const [name, setName] = useState('')
    const [shop, setShop] = useState('')

    let socket;
    const ENDPOINT =`http://localhost:4000`
    
    useEffect(() => {
        socket = io(ENDPOINT);
        setName(name)
        setShop(shop)
        socket.emit('chat', { name, shop},()=>{

        })
        return ()=>{
            socket.emit('disconnect')
            socket.off();
        }
    }, [ENDPOINT]);

    useEffect(() => {
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        }
        )  
    },[messages])
    const sendMessage = (event)=>{
        event.preventDefault();
        let userId =  props.user.id
        let name = props.user.name
        if(message){
            socket.emit('sendMessage',{ 
                message, 
                userId, 
                name }, setMessage(''));
        }
    }
    console.log(message, messages)
    return (
        <div className="chat-popup"  id="myForm">
            <InfoBar />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> 
        </div>
    )
}



export default Chat;