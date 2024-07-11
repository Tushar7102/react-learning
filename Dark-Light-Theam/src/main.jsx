import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Themcontextproviderfuncntion } from './context/Theamcontext.jsx'
import { Authcontextproviderfunction } from './context/authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authcontextproviderfunction>
  <Themcontextproviderfuncntion>
    <App />
  </Themcontextproviderfuncntion>
  </Authcontextproviderfunction>,
)
