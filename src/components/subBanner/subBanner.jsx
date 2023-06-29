import "./subBanner.css"

export default function SubBanner() {
  return (
    <div className="sub-box flex justify-between rounded-[24px]">
      <div className="sub-text-box flex flex-col">
        <div>
          <span className="sub-heading">Learn how to start a business the <span className="right-way relative"><img className="absolute right-[-35px] bottom-[-12px]" src="./assets/Path.svg" alt="" />right way</span>.</span>
        </div>
        <span className="sub-terms mt-[22px]">Many desktop publishing packages and web page editors now use lorem as their default model</span>
      </div>
      <div className="flex flex-col justify-center sub-button-text">
        <button className="sub-button banner-sub-button rounded-[18px] bg-[#3B82F6] px-[12px] py-[5px]">Subscribe - Free <span className="text-[#93C5FD]">-&gt;</span></button>
      </div>
    </div>
  )
}