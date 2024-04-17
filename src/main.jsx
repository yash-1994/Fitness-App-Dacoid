import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import lottie from 'lottie-web';
import Lottie, { useLottie } from 'lottie-react'
import { useLoaderData } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
              <App />
  </React.StrictMode>,
)

function Sample(params) {
  return (
    <WaveButton/>
  )
}
