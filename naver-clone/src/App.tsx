import { useState } from 'react'
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
                  <span class="blind">네이버페이</span>
                </button>
                <button id="notice-header">
                  <div id="notice-inner"></div>
                  <span class="blind">공지</span>
                </button>
             </div>
             <div id="search">
              <form action="">
                <a id="search-svg" href="#">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path></svg>
                </a>
                <label for="search-input" class="blind">검색어 입력</label>
                <input id="search-input" type="text" placeholder='검색어를 입력하세요.' />
                <div id="search-right">
                  <button href="#" id="search-keyboard">
                    <span class="blind">입력도구</span>
                  </button>
                  <button href="#" id="search-recent">
                    <span class="blind">자동완성/최근검색어펼치기</span>
                  </button>
                  <button id="search-button">
                    <div><span class="blind">검색</span></div>
                  </button>
                </div>
              </form>
             </div>
             <div id="nav"></div>
             <div id="main"></div>
          </div>
        </div>  
      </body>
    </>
  )
}

export default App
