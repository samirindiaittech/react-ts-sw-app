import '.././App.css'
import { useNavigate } from "react-router-dom"

function Test() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
          Test
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Test