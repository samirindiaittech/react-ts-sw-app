import logo from './logo.svg'
import './App.css'
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"
import Test from './Test'
import Abhi from './Abhi'
import Sam from './Sam'
import Rit from './Rit'
import Vip from './Vip'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    setInterval(() => {
      console.log("test")
      // Get the registration for the service worker.
      navigator.serviceWorker.getRegistration().then((serviceWorkerRegistration) => {
        // Check if there is a new version of the service worker available.
        console.log(serviceWorkerRegistration)
        serviceWorkerRegistration?.update()
      })
    }, 10 * 60 * 1000)
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/test' element={<Test />} />
        <Route path='/abhi' element={<Abhi />} />
        <Route path='/sam' element={<Sam />} />
        <Route path='/rit' element={<Rit />} />
        <Route path='/vip' element={<Vip />} />
      </Routes>

      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <button type='button' onClick={() => navigate('/test')}>
              Test
            </button>
            <button type='button' onClick={() => navigate('/abhi')}>
              Abhi
            </button>
            <button type='button' onClick={() => navigate('/sam')}>
              Sam
            </button>
            <button type='button' onClick={() => navigate('/rit')}>
              Rit
            </button>
            <button type='button' onClick={() => navigate('/vip')}>
              Vip
            </button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}

export default App