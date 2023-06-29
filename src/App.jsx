import Navbar from './components/navbar/navbar'
import Featured from './components/featured/featured'
import EpInfo from './components/epInfo/epInfo'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-[106px]'>
        <Featured />
      </div>
        <EpInfo />
    </>
  )
}

export default App
