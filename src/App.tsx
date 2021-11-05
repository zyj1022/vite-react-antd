import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Router from './routes/router'

import './assets/styles/index.css'
import './assets/styles/App.less'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
