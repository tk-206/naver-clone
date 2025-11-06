import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <a href='https://naver.com' target='_blank'>
            <img src='/naver-logo.png' className='naver-logo' alt='Naver Logo' />
          </a>
        </nav>
      </div>
    </>
  )
}

export default App
