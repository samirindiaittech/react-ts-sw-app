import logo from './logo.svg'
import './App.css'

import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"

import Test from './Test'

// import { serviceWorkerRegistrationAutoUpdateAction } from './utils/commonManagerItems'
// import { useEffect } from 'react'

function App() {
  // serviceWorkerRegistrationAutoUpdateAction()

  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/test' element={<Test />} />
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