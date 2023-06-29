import "./bottombar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Bottombar() {
  return (
    <div className="bottom-bar flex justify-between items-center">
      <div className="flex items-center">
        <img src="./assets/Logo.svg" alt="" />
        <span className="copyright-text ml-[16px]">Copyright © vieweb.co.in All rights reserved.</span>
      </div>
      <div className="social-icons flex items-center w-[100px] justify-between text-[#3B82F6]">
        <TwitterIcon />
        <YouTubeIcon />
        <TelegramIcon />
      </div>
    </div>
  )
}