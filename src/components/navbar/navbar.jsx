import "./navbar.css"

export default function Navbar() {
  return (
    <div className="">
      <div className="flex navbar justify-between ">
        <img className="cursor-pointer" src="./assets/Logo.svg" alt="" />
        <button className="sub-button flex rounded-[18px] bg-[#3B82F6] px-[12px] py-[5px]">
          <span className="sub-button-text">Subscribe <span className="text-[#93C5FD]">-&gt;</span></span>
        </button>
      </div>
    </div>
  )
}