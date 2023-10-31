import '.././App.css'
import { useNavigate } from "react-router-dom"

function Test4() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
          Test 4
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Test4