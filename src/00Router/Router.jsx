import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Errorpage from '../0.Errorpage/Errorpage'
import Main from '../0.MainPages/Main'
import Login from '../2.Login/Login'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/login' Component={Login}/>
        <Route path='*' Component={Errorpage}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}
