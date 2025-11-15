import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>NAVER</title>
      </head>
      <body>
       <div id="wrap">
          <div id="wrap-center">
             <div id="header">
                <button id="hamburger-header">
                  <div id="hamburger-inner"></div>
                  <span class="blind">확장영역</span>
                </button>
                <button id="naverpay-header">
                  <div id="naverpay-inner"></div>
                  <span class="blind">확장영역</span>
                </button>
                <button id="notice-header">
                  <div id="notice-inner"></div>
                  <span class="blind">확장영역</span>
                </button>
             </div>
             <div id="search"></div>
             <div id="nav"></div>
             <div id="main"></div>
          </div>
        </div>  
      </body>
    </>
  )
}

export default App
