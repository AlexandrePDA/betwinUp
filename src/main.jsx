import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {UserContextProvider} from './Context/userContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
    <App />
  </UserContextProvider>
  </BrowserRouter>,
)

// équivalent à index.js sur spiridise
