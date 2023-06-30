import { useState, useEffect, useRef } from "react";

import "./player.css"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(274);
  const [duration, setDuration] = useState(2645);

  const progressBar = useRef();

  useEffect(() => {
    let intervalId;
    
    if (isPlaying && currentTime < duration) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1); // Increment currentTime by 1 second
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, currentTime, duration]);


  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }
  
  function handleBackward() {
    if (currentTime - 10 <= 0){
      setCurrentTime(0)
    }
    else{
      setCurrentTime(currentTime - 10);
    }
  }
  
  function handleForward() {
    if (currentTime + 10 >= duration){
      setCurrentTime(duration)
    }
    else{
      setCurrentTime(currentTime + 10);
    }
  }

  useEffect(() => {
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  }, [currentTime, duration]);


  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function handleProgressBarClick(e) {
    const progressBarWidth = progressBar.current.clientWidth;
    const clickPositionX = e.nativeEvent.offsetX;
    const progressPercentage = (clickPositionX / progressBarWidth) * 100;
    const newTime = (duration / 100) * progressPercentage;
  
    console.log(clickPositionX)
    console.log(progressBarWidth)

    if (newTime <= duration) {
      setCurrentTime(newTime);
    }
  }


  return (
    <div className="play-controls flex items-center justify-around">

      <div className="play-controls-icons flex justify-around items-center">
        <button onClick={handlePlayPause}><img className="w-[40px]" src={isPlaying?"./assets/player-controls/pause.svg":"./assets/player-controls/play.png"} alt="" /></button>
        <button onClick={handleBackward}><img src="./assets/player-controls/1.svg" alt="" /></button>
        <button onClick={handleForward}><img src="./assets/player-controls/2.svg" alt="" /></button>
        <button>
          <div className="flex items-center py-[4px] px-[6px] bg-[rgb(255,255,255,0.32)] rounded-[4px]">
            <span className="speed">1x</span>
          </div>
        </button>
      </div>

      <div ref={progressBar} onClick={handleProgressBarClick} className="progress-bar w-[65%] h-[8px] bg-[rgb(255,255,255,0.49)] cursor-pointer">
        <div className="h-[8px] bg-[#ffffff]" style={{width: `${progress}%`}}></div>
      </div>

      <div className="progress-time">
        <span>{formatTime(currentTime)}</span>
        <span className="opacity-[0.32]"> | </span>
        <span>{formatTime(duration)}</span>
      </div>

    </div>
  )
}