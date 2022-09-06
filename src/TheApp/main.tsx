import React from 'react'
import { GlobalStyled } from '../styles/global.css'
import { AppFrame } from './startup'
import { Home } from './views/home'

function AppWithContext () {
  return (
    <AppFrame>
      <GlobalStyled />
      <Home />
    </AppFrame> 
  )
}

function App () {
  return <AppWithContext />
}

export default App
