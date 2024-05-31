import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className='bg-red-400'>Welcome to PMS_Calculator</p>
    </div>
  )
}

export default App
