import './App.css'
import { useNavigate } from "react-router-dom"

function Vip() {
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

export default Vip