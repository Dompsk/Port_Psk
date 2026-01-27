// ไฟล์: src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // import App เข้ามา
import { BrowserRouter } from 'react-router-dom'
import './index.css' // (ถ้ามี css หลัก)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)