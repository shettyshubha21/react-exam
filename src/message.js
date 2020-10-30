import './message.css';
import './chat.css';
import React, { useState, useRef, useEffect } from 'react';
import useChat from './useChat';
import Chat from './useChat';


const Message = () => {
    const {
        brief,
        setBrief,
        detail,
        setDetail,
        info,
        setInfo,
        check,
        
    } = useChat();

    
    function messages() {
        console.log(info);
        return info.map((b, index) =>(
            <li key={index}>
            <div>
            {index === 0 ? "Uh no. No messages are there to show yet. Go to send messages and add a message" :<div>{b.brief} <br/> {b.detail}  </div>}
            </div>
          </li>
      ));
    } 
    return (
        <div className="input">
        <button onClick = {() => check()}>view</button> 
        <div><ol>{messages()}</ol></div>
        </div>
    )
}

export default Message