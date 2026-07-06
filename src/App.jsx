import React, { useState } from 'react'
import Home from './pages/home'
import SplashScreen from './components/SplashScreen'

function App() {

  const [showSplash, setShowSplash] = useState(false)

  return (
    <>
    {/* {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />} */}
      {!showSplash && <Home />}
    </>
  )
}

export default App