import React from 'react'
import ReactDOM from 'react-dom/client'
import { FrontEndApp } from './FrontEndApp'
import { BrowserRouter } from 'react-router-dom'


import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(  
    <BrowserRouter>
      <FrontEndApp />
    </BrowserRouter>  
)
