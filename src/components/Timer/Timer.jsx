import React, {useState,useEffect} from 'react';
import './Timer.css'


const Timer = () => {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(25);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
        if (second > 0) {
            setSecond(second => second - 1);
        }
        else if (second === 0) {
            if (minute === 0) {
            clearInterval(interval);
            } else {
                setSecond(59)
                setMinute(minute => minute - 1)
            }
        }
    }, 1000);
        } else if (!isActive && second !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
        
      }, [isActive,second,minute]);
      
    function reset() {
        setIsActive(false);
        setSecond(0);
        setMinute(25)
    }



        return (
            <div>
        <div className='Timer'>
            <h1>{minute}</h1>
            <h1>:</h1>
            <h1>{second}</h1>
        </div>
        <div className='Button' >
        <button onClick={() => setIsActive(true)}>Start</button>
        <button onClick={() => setIsActive(false)}>Stop</button>
        <button onClick={reset} data-testid="reset-button">Reset</button>
    </div>
    </div>
    )
} 

export default Timer;