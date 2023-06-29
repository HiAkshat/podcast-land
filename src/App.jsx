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
      <Featured />
      <EpInfo />
      <Episodes />
      <Ad />
      <Bottombar />
    </>
  )
}

export default App
