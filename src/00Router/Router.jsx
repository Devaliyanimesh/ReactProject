import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Errorpage from '../0.Errorpage/Errorpage'
import Main from '../0.MainPages/Main'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='*' Component={Errorpage}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}
