import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Authcontextproviderfunction } from './Context/Authcontext.jsx'
import { Contextproviderfunction } from './Context/Theam.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Contextproviderfunction>
  <Authcontextproviderfunction>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Authcontextproviderfunction>
  </Contextproviderfunction>,
)
