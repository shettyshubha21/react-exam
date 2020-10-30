import React, { useState } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

function useChat() {
    const [brief, setBrief] = useLocalStorageState([],'brief');
    const [detail, setDetail] = useLocalStorageState([],'detail');
    const [info, setInfo] = useState([{brief: null, detail:null}]);
    const [div, setDiv] = useLocalStorageState(true);
    const [step, setStep] = useLocalStorageState([{brief: null, detail:null}])

    function check() {
        const newInfo = info.concat([{brief, detail}]); 
        setInfo(newInfo);
        console.log(info);
    }
   
    return {
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
        
    };
}
export default useChat;