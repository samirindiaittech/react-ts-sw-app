import './App.css'
import { useNavigate } from "react-router-dom"

function Sam() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
        Sam
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Sam