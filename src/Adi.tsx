import './App.css'
import { useNavigate } from "react-router-dom"

function Adi() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
        Adi
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Adi