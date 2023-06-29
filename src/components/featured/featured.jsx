import "./featured.css"

export default function Featured() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col featured-box w-[1270px] h-[408px] py-[80px] pl-[81px] pr-[430px]">
        <span className="featured-heading">Super Excited (aka The Saturday Edition)</span>
        <span className="featured-details mt-[16px] mb-[32px]">Indie Stories · Jan 24 · Episode 234</span>
        <div className="flex items-center justify-around play-controls py-[20px] px-[16px]">
          <img src="./assets/Play.svg" alt="" />
          <img src="./assets/1.svg" alt="" />
          <img src="./assets/2.svg" alt="" />
          <div className="flex items-center py-[4px] px-[6px] bg-[rgb(255,255,255,0.32)] rounded-[4px]">
            <span className="speed">1x</span>
          </div>
          <div className="w-[487px] h-[8px] bg-[rgb(255,255,255,0.49)] ">
            <div className="w-[148px] h-[8px] bg-[#ffffff]"></div>
          </div>
          <div className="progress-time">
            <span>04:34</span>
            <span className="opacity-[0.32]"> | </span>
            <span>44:05</span>
          </div>
        </div>
      </div>
    </div>
  )
}