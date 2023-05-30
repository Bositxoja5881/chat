import React from 'react'

function ChatForm({ setMassages }) {


    const sendMassage = (e) => {
        e.preventDefault()
        let forma = new FormData(e.target)
        const { msg } = Object.fromEntries(forma.entries())
        setMassages(p => [...p, { msg, id: p.length + 1 }])
    }
    return (
        <div>
            <form onSubmit={sendMassage} action="">
                <textarea name="msg" placeholder='xabar kirting'></textarea>
                <button>select</button>
            </form>
        </div>
    )
}

export default ChatForm