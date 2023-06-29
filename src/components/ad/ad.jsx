import "./ad1.css"

export default function Ad() {
  return (
    <div className="ad-box flex justify-between rounded-[24px]">
      <div className="ad-text-box flex flex-col">
        <div>
          <span className="ad-heading">Learn how to start a business the <span className="right-way relative"><img className="absolute right-[-35px] bottom-[-12px]" src="./assets/Path.svg" alt="" />right way</span>.</span>
        </div>
        <span className="ad-terms mt-[22px]">Many desktop publishing packages and web page editors now use lorem as their default model</span>
      </div>
      <div className="flex flex-col justify-center sub-button-text">
        <button className="sub-button ad-sub-button rounded-[18px] bg-[#3B82F6] px-[12px] py-[5px]">Subscribe - Free <span className="text-[#93C5FD]">-&gt;</span></button>
      </div>
    </div>
  )
}