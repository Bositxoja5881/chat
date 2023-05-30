import React from 'react'

function ChatsCard({ msg, id, massages, setMassages }) {

    const deleteBtn = id => {
        let filter = massages.filter(item => item.id !== id)
        setMassages(filter)
    }
    return (
        <div>
            <h2>{msg}</h2>
            <button onClick={() => deleteBtn(id)}>delete</button>
        </div>
    )
}

export default ChatsCard