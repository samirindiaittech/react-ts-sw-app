import logo from './logo.svg'
import './App.css'

import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"

import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'

import { serviceWorkerRegistrationAutoUpdateAction } from './utils/commonManagerItems'

function App() {
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