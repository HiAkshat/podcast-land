import "./episodes.css"
import EpisodeCard from "../episodeCard/episodeCard"
import { useRef, useState, useEffect } from "react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const episodes = [
  {
    id: 1,
    title: "Sick Leave for Indie Founders?",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play1.svg",
    thumbnail: "./assets/episodes/ep1.png",
  },
  {
    id: 2,
    title: "When Should You Let People Pay You?",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play2.svg",
    thumbnail: "./assets/episodes/ep2.png",
  },
  {
    id: 3,
    title: "Super Pumped (aka The Saturday Edition)",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play3.svg",
    thumbnail: "./assets/episodes/ep3.png",
  },  
  {
    id: 4,
    title: "Super Pumped (aka The Saturday Edition)",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play3.svg",
    thumbnail: "./assets/episodes/ep4.png",
  },  
  {
    id: 5,
    title: "Super Pumped (aka The Saturday Edition)",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play3.svg",
    thumbnail: "./assets/episodes/ep5.png",
  },  
  {
    id: 6,
    title: "Super Pumped (aka The Saturday Edition)",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play3.svg",
    thumbnail: "./assets/episodes/ep6.png",
  },  
]



export default function Episodes() {
  const slider = useRef(null)
  
  const goForward = () => {
    slider.current.scrollTo({
      left: slider.current.scrollLeft + 500,
      behavior: 'smooth',
    });
  }
  
  const goBackward = () => {
    slider.current.scrollTo({
      left: slider.current.scrollLeft - 500,
      behavior: 'smooth',
    });
  }

  const [isRightScrollable, setIsRightScrollable] = useState(false);
  const [isLeftScrollable, setIsLeftScrollable] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = slider.current;
      const isDivRightScrollable = (divElement.scrollLeft !== 0);
      const isDivLeftScrollable = (divElement.scrollLeft +1 < divElement.scrollWidth - divElement.clientWidth);

      // console.log(divElement.scrollLeft)
      // console.log(divElement.scrollWidth - divElement.clientWidth)

      setIsRightScrollable(isDivRightScrollable);
      setIsLeftScrollable(isDivLeftScrollable);
      
    };

    slider.current.addEventListener('scroll', handleScroll);
    return () => {
      slider.current.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="eps-section relative flex flex-col bg-[#F1F5F9] rounded-[24px]">
      <img className="absolute left-[64px] top-[-34px] w-[66px]" src="./assets/Shapes.svg" alt="" />

      <div ref={slider} className="eps-list flex overflow-scroll no-scrollbar py-2">
        {episodes.map((episode) => (
          <div key={episode.id} className="even:rotate-1 odd:rotate-[-1deg] mr-[28px]">
            <EpisodeCard key={episode.id} ep={episode}/>
          </div>
        ))}
      </div>

      <div className="slider-buttons flex justify-end">
        <button disabled={!isRightScrollable} className="slider-button mr-4 flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white text-[#3b82f6]" onClick={goBackward}><ArrowBackIcon fontSize="small"/></button>
        <button disabled={!isLeftScrollable} className="slider-button flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white text-[#3b82f6]" onClick={goForward}><ArrowForwardIcon fontSize="small"/></button>
        {/* <img className="w-[100px]" src="./assets/Arrows.svg" alt="" /> */}
      </div>

    </div>
  )
}