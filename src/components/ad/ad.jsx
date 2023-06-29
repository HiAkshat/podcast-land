import "./ad1.css"

export default function Ad() {
  return (
    <div className="flex bg-[#161f32] p-[80px] justify-between rounded-[24px]">
      <div className="flex flex-col w-[54%]">
        <span className="ad-heading">Learn how to start a business the <span className="right-way">right way</span>.</span>
        <span className="ad-terms mt-[22px]">Many desktop publishing packages and web page editors now use lorem as their default model</span>
      </div>
      <div className="flex flex-col justify-center sub-button-text">
        <button className="rounded-[18px] bg-[#3B82F6] px-[12px] py-[5px]">Subscribe - Free <span className="text-[#93C5FD]">-&gt;</span></button>
      </div>
    </div>
  )
}