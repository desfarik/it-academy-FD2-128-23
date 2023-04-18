import React, { useEffect, useState } from "react";
import './main.css'

const formatTime = (timer) => {
  const getSeconds = `0${(timer % 60)}`.slice(-2)
  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  return `${getHours} : ${getMinutes} : ${getSeconds}`
}
const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, addTime, setTime } = useTimer(300)
  useEffect(() => {
    if (timer === 0) {
      handlePause();
    }
  }, [timer])
  return (
    <div className="App">
      <div className='stopwatch-card'>
        <div className="buttons">
          <button onClick={() => addTime(60)}>+1м</button>
          <button  onClick={() => addTime(300)}>+5м</button>
          <button  onClick={() => addTime(600)}>+10м</button>
          <button  onClick={() => addTime(900)}>+15м</button>
        </div>
        <div className="time">{formatTime(timer)}</div>
        <div className="buttons">
          <button onClick={() => setTime(60)}>1 минута</button>
          <button onClick={() => setTime(120)}>2 минута</button>
          <button onClick={() => setTime(300)}>5 минута</button>
          <button onClick={() => setTime(600)}>10 минута</button>
          <button onClick={() => setTime(900)}>15 минута</button>
        </div>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleStart}>Resume</button>
              )
          }
          <button onClick={() => setTime(300)} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  );
}
const useTimer = (initialState = 300) => {
  const [timer, setTimer] = React.useState(initialState)
  const [isActive, setIsActive] = React.useState(false)
  const [isPaused, setIsPaused] = React.useState(false)
  const countRef = React.useRef(null)
  const handleStart = () => {
    if (time !== 0) {
      setIsActive(true)
      setIsPaused(true)
      countRef.current = setInterval(() => {
        setTimer((timer) => timer - 1)
      }, 10)
    } else {
      alert('таймер дошёл до 0')
    }
  }
  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }
  const addTime = (time) => {
    setTimer((timer) => timer + time)
  }
  const setTime = (time) => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(time)
  }
  return { timer, isActive, isPaused, handleStart, handlePause, addTime, setTime }
}
function App() {
  return (
    <Timer />
  )
}

export default App;