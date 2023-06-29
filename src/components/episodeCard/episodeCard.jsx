import "./episodeCard.css"

export default function EpisodeCard(ep) {  
  return (
    <div className="flex flex-col ep-card w-[446px] h-[200px] rounded-[24px] pt-[20px] pl-[23px]" style={{backgroundImage: `url(${ep.ep.thumbnail})`}}>
      <span className="ep-title">{ep.ep.title}</span>
      <span className="ep-details opacity-[0.8]">{ep.ep.info}</span>
      <img className="w-[48px]" src={ep.ep.button} alt="" />
    </div>
  )
}