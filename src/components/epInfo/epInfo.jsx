import "./epInfo.css"

export default function EpInfo() {
  const topics = [
    ["0:55", "Jason's first podcast ever"],
    ["1:12", "Helen's been on other podcasts: Startups for the Rest of Us, Indie Bites, Indie Worldwide"],
    ["3:06", '3:06 Should we invest in the "auto publish to YouTube" feature?'],
    ["13:32", 'The best features the ones that feel like "magic" when a customer uses them'],
    ["18:46", 'The "wait and see" product development philosophy'],
    ["20:27", "A new podcast website builder CMS and website designs"],
    ["32:24", "Making a few new podcast website themes"],
    ["34:30", "How we run our weekly team meetings"],
  ]

  const contributors = [
    ["Jon Buda", " lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002."],
    ["Mark Mitchel", " lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002."],
    ["Mary James", " lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002."]
  ]

  const hosts = [
    ["./assets/host1.png", "Samantha James", "@samyjames"],
    ["./assets/host2.png", "Quentin Villard", "@quentin789"],
    ["./assets/host3.png", "Oliver Martinez", "@OliverMarti"],
  ]

  return (
    <div className="flex  py-[80px] px-[168px] justify-between">
      <div className="flex flex-col w-[768px]">
        <div className="flex flex-col mb-[32px]">
          <span className="notes-heading pb-[16px]">Notes</span>
          <span className="detail-text">In this episode,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </div>

        <div>
          <span className="heading-other">Topics</span>
          <ul className="mt-[16px] mb-[8px]">
            {topics.map((topic) => (
              <li className="detail-text pb-[24px]">
                <span>›</span>
                <span className="text-black font-medium"> {topic[0]} </span>
                <span>{topic[1]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="heading-other">Contributors</span>
          <ul className="mt-[16px]">
            {contributors.map((contributor) => (
              <li className="detail-text pb-[24px]">
                <span>— </span>
                <span className="text-black underline">{contributor[0]}</span>
                <span>{contributor[1]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[14px]">
          <span className="detail-text italic">If you liked this episode, popularised in the with the release of letraset sheets containing passages, and more recently with desktop <span className="font-medium text-black">@PublishingSoftware</span>.</span>
        </div>
      </div>

      <div className="relative flex flex-col ml-[56px] bg-slate-50 w-[280px] h-full pl-[24px] py-[24px] rounded-[24px]">
        <img className="absolute right-[58px] top-[-12px] w-[21px]" src="./assets/star1.svg" alt="" />
        <img className="absolute right-[108px] top-[-33px] w-[21px]" src="./assets/star2.svg" alt="" />
        <span className="hosts-heading">Hosts & Guests</span>
        {hosts.map((host) => (
          <div className="flex mt-[16px]">
            <img src={host[0]} alt="" />
            <div className="flex flex-col ml-[12px]">
              <span className="host-name">{host[1]}</span>
              <span className="host-handle">{host[2]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}