import './chat.css';
import React, { useState, useRef, useEffect } from 'react';
import Message from './message';
import useChat from './useChat';
import cn from 'classnames';
import Button from './Button';
const Chat = () => {
    /* const [brief, setBrief] = useState([]);
    const [detail, setDetail] = useState([]);
    const [info, setInfo] = useState([{brief: null, detail:null}]); */

    const {
        brief,
        setBrief,
        detail,
        setDetail,
        info,
        setInfo,
        check,
        div,
        setDiv,
        step,
        setStep,
        
    } = useChat();

  /*  function messages() {
        return info.map((b, index) =>(
            <li key={index}>
            <div>
            {index === 0 ? "No messages Yet" :<div>{b.brief} <br/> {b.detail}  </div>}
            </div>
          </li>
      ));
    } 
 */
    let jumpTo = (step) => {
        setStep(step);
        
    };  

    function renderMessage() {
        /* return history.map((b, index) => (<li key = {index} ><button className={cn({historyButtonSelected: index == step})}  onClick = {() => {jumpTo(index)}}>{index === 0 ? "Go to start of the game" : `Goto step${index}`}
        </button></li>) */
        return info.map((b, index) => (<li key = {index} ><Button selected={index === step}  onClick = {() => {jumpTo(index)}}>{index === 0 ? "No messages Yet" :<div>{b.brief} <br/> {b.detail}  </div>}
        </Button></li>)
        )
      }
  
    return (
        <div className="chat">
        <div className="SendMessage">
        
                <h4>Brief</h4>
                <input type="text" onChange={(e) => {setBrief(e.target.value); }}/>
                <h4>Detail</h4>
                <input type="text" onChange={(e) => { setDetail(e.target.value) }}/><br/><br/>
                {/* <button onClick = {() => {const newInfo = info.concat([{brief, detail}]); setInfo(newInfo)}}>Add</button> */}
                <button onClick={() => {check()}}>Add</button>
           
            </div>
            
            <div className="view message">
            
            
            <div>
                <li>{renderMessage()}</li>
                <div></div>
                
            </div>

            </div>
     </div>
    );
    
};

export default Chat;