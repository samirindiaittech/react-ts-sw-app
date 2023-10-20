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
import Adi from './Adi'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    setInterval(async () => {
      // Get the registration for the service worker.
      const serviceWorkerRegistration = await navigator.serviceWorker.getRegistration();

      if (serviceWorkerRegistration) {
        // Check if there is a new version of the service worker available.
        console.log("Hello Aditya", serviceWorkerRegistration);
        await serviceWorkerRegistration.update();
      }
    }, 1 * 60 * 1000)
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
        <Route path='/adi' element={<Adi />} />
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
            <button type='button' onClick={() => navigate('/adi')}>
              Adi
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