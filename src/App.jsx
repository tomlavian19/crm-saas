import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import { Authentication } from './views/Authentication'

function App() {

  return (
<Routes>
    <Route path='/' element={<Authentication />} />

    

</Routes>
  
  )
}

export default App
