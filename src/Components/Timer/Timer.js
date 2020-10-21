import React, {useState} from 'react';
import './index.css'

// creating a 60 second timer using React hooks
function Timer () {
    const [seconds, setSeconds] = useState(60)
    // const decrementSeconds = () => setSeconds(seconds-1)
    const startCountdown = () => setInterval(() => setSeconds(seconds-1), 1000)
      
    return (    
        <div>
            <h2>Timer</h2>
            <p>{seconds}</p>
            <button onClick={startCountdown}>start countdown</button>
        </div>
    )
}

export default Timer