import './App.css'
import { useNavigate } from "react-router-dom"

function Rit() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
        Rit
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Rit