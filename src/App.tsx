import logo from './logo.svg'
import './App.css'

import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"
import {
  useEffect,
  useState
} from 'react'

import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'

import { serviceWorkerRegistrationAutoUpdateAction } from './utils/commonManagerItems'

function App() {
  const [browserReInitiated, setBrowserReInitiated] = useState(false)

  const windowFocusHandler = () => {
    // Set the flag indicating that the browser has been reopened.
    setBrowserReInitiated(true)
  }

  const windowBlurHandler = () => {
    // Set the flag indicating that the browser has lost focus.
    setBrowserReInitiated(false)
  }

  useEffect(() => {
    // Add event listeners for the window focus and blur events.
    window.addEventListener('focus', windowFocusHandler)
    window.addEventListener('blur', windowBlurHandler)

    // Remove event listeners when the component unmounts.
    return () => {
      window.removeEventListener('focus', windowFocusHandler)
      window.removeEventListener('blur', windowBlurHandler)
    }
  }, [])

  if (browserReInitiated) {
    console.log("log out from desktop")
  }

  serviceWorkerRegistrationAutoUpdateAction()

  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/test' element={<Test />} />
        <Route path='/test2' element={<Test2 />} />
        <Route path='/test3' element={<Test3 />} />
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
            <button type='button' onClick={() => navigate('/test2')}>
              Test 2
            </button>
            <button type='button' onClick={() => navigate('/test3')}>
              Test 3
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