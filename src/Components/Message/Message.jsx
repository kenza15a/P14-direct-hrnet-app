import React from 'react'
import './Message.scss'
function Message({messageText}) {
  return (
   <>
   <h3 className='message'>{messageText}</h3>
   </>
  )
}

export default Message
