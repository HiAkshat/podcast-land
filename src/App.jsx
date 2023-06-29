import Navbar from './components/navbar/navbar'
import Featured from './components/featured/featured'
import EpInfo from './components/epInfo/epInfo'
import Episodes from './components/episodes/episodes'
import Ad from './components/ad/ad'
import Bottombar from './components/bottombar/bottombar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-[106px]'>
        <Featured />
      </div>
      <EpInfo />
      <div className='px-[85px]'>
        <Episodes />
        <Ad />
      </div>
      <div className='px-[170px] my-[64px]'>
        <Bottombar />
      </div>
    </>
  )
}

export default App
