import './App.css'
import { useNavigate } from "react-router-dom"

function Abhi() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
        Abhi
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App Typescript File
        </button>
      </div>
    </>
  )
}

export default Abhi