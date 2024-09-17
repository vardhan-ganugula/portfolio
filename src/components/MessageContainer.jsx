import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/FirebaseContext'
import MessagesBox from './MessagesBox';
function MessageContainer() {
    const {getMessages} = useFirebase();
    const [messages, setMessages] = useState([])
    
    useEffect(()=> {
        async function allMessages(){
            setMessages(await getMessages())
        }
        allMessages();
    }, [getMessages])
  return (
    <>
        <section className='p-5 w-full h-auto overflow-y-auto'>
            {(messages.length==0) && <div>
                no messages to display
            </div> }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {messages.map(msg => (
                    <MessagesBox email={msg.email} id={msg.id} message={msg.message} username={msg.username} key={msg.time} />
                ))}
            </div>
        </section>
    
    </>
  )
}

export default MessageContainer