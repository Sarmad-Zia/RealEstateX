import React, { useState } from 'react'
import Home from './pages/home'
import SplashScreen from './components/SplashScreen'
import AnnouncementBar from './components/Anouncement'

function App() {

  const [showSplash, setShowSplash] = useState(false)

  return (
    <>
      {/* <AnnouncementBar id="text-only">
        We now support on-premise deployment for CDA-regulated projects.
      </AnnouncementBar> */}
      <Home />
    </>
  )
}

export default App