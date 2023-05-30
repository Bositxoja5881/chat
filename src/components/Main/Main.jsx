import React, { useState } from 'react'
import ChatForm from './ChatForm'
import Chats from './Chats'

function Main() {

    const [massages, setMassages] = useState([])
    return (
        <div>
            <Chats massages={massages} setMassages={setMassages} />
            <ChatForm setMassages={setMassages} />
        </div>
    )
}

export default Main