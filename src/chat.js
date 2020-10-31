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
        return info.map((b, index) => (<div className="msg-button" key = {index} ><Button selected={index === step}  onClick = {() => {jumpTo(index)}}>{index === 0 ? "No messages Yet" :<div>{b.brief} <br/> {b.detail}  </div>}
        </Button></div>)
        )
      }
  
    return (
        <div className="chat">
        <div className="SendMessage">
            <div className="form-control">
                <label className="label">Brief: </label>
                <input className = "brief" type="text" onChange={(e) => {setBrief(e.target.value); }}/>
            </div>

            <div className="form-control">
                <label className="label">Detail:</label>
                <textarea className = "detail" rows="6" onChange={(e) => { setDetail(e.target.value) }}></textarea>
            </div>
                {/* <button onClick = {() => {const newInfo = info.concat([{brief, detail}]); setInfo(newInfo)}}>Add</button> */}
                <div className="button-control">

                <button onClick={() => {check()}}>Add</button>

                </div>


                
           
            </div>
            
            <div className="view message">
            
            
            <div>
            
            {renderMessage()}
            
                
                
            </div>

            </div>
     </div>
    );
    
};

export default Chat;