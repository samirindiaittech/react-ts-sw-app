import './App.css'
import { useNavigate } from "react-router-dom"

function Rahul() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
        Rahul
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Rahul