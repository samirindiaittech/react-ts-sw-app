import logo from './logo.svg'
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom"
import Test from './Test'
import Abhi from './Abhi'
import { useEffect } from 'react'
import Sam from './Sam'

function App() {
  const updateServiceWorker = async () => {
    navigator.serviceWorker.getRegistration().then((serviceWorkerRegistration) => {
      serviceWorkerRegistration?.update()
    })
  }

  useEffect(() => {
    updateServiceWorker()
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/test' element={<Test />} />
        <Route path='/abhi' element={<Abhi />} />
        <Route path='/sam' element={<Sam />} />
      </Routes>

      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <button type='button' onClick={() => navigate('/test')}>
              Go To Test
            </button>
            <button type='button' onClick={() => navigate('/abhi')}>
              Go To Abhi
            </button>
            <button type='button' onClick={() => navigate('/sam')}>
              Go To Sam
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