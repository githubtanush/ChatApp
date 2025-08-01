import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/homepage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Routes>
        <Route path='/' element={<HomePage /> }/>
        <Route path='/login' element={<LoginPage /> }/>
        <Route path='/profile' element={<ProfilePage/> }/>
      </Routes>
    </div>
  )
}

export default App
