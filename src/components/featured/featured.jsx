import Player from "../player/player"

import "./featured.css"

export default function Featured() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col featured-box">
        <span className="featured-heading">Super Excited (aka The Saturday Edition)</span>
        <span className="featured-details mt-[16px] mb-[32px]">Indie Stories · Jan 24 · Episode 234</span>
        <Player />
      </div>
    </div>
  )
}