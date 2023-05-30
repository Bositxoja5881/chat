import React from 'react'
import ChatsCard from './ChatsCard'

function Chats({ massages, setMassages }) {
    return (
        <div>
            {massages.map(item => (
                <ChatsCard key={item.id} {...item} massages={massages} setMassages={setMassages} />
            ))}
        </div>
    )
}

export default Chats