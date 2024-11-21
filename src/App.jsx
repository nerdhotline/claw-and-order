import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const identity = () => {
    setCount(count);
  }
  
  return (
    <>
      <h1>Claw & Order</h1>
      <div className="card">
        <button onClick={identity}>
          Fetch
        </button>
      </div>
      <p className="read-the-docs">
        Made by Kenneth Blake.
      </p>
    </>
  )
}

export default App
