import '.././App.css'
import { useNavigate } from "react-router-dom"

function Test2() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <span>
          Test 2
        </span>
        <button type='button' onClick={() => navigate('/')}>
          Go to App
        </button>
      </div>
    </>
  )
}

export default Test2