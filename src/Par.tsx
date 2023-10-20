import './App.css'
import { useNavigate } from "react-router-dom"

function Par() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
        Abhi
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Par