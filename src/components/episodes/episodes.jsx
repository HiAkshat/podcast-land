import "./episodes.css"
import EpisodeCard from "../episodeCard/episodeCard"

const episodes = [
  {
    id: 1,
    title: "Sick Leave for Indie Founders?",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play1.svg",
    thumbnail: "./assets/ep1.png",
  },
  {
    id: 2,
    title: "When Should You Let People Pay You?",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play2.svg",
    thumbnail: "./assets/ep2.png",
  },
  {
    id: 3,
    title: "Super Pumped (aka The Saturday Edition)",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play3.svg",
    thumbnail: "./assets/ep3.png",
  },  
  {
    id: 4,
    title: "Super Pumped (aka The Saturday Edition)",
    info: "Indie Stories · Jan 24 · Episode 234",
    button: "./assets/play3.svg",
    thumbnail: "./assets/ep3.png",
  },  
]

export default function Episodes() {
  return (
    <div className="relative flex flex-col bg-[#F1F5F9] rounded-[24px] py-[80px] pl-[80px] mb-[80px]">
      <img className="absolute left-[64px] top-[-34px] w-[66px]" src="./assets/Shapes.svg" alt="" />
      <div className="flex overflow-hidden">
        {episodes.map((episode) => (
          <div className="even:rotate-1 odd:rotate-[-1deg] mr-[28px]">
            <EpisodeCard key={episode.id} ep={episode}/>
          </div>
        ))}
      </div>
      <div className="flex justify-end pr-[82px]">
        <img className="w-[100px] mt-[65px]" src="./assets/Arrows.svg" alt="" />
      </div>
    </div>
  )
}