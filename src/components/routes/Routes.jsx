import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Allclient from '../reuseblecomponent/ourclient/allclient'
import Upperheader from '../reuseblecomponent/header/upperheader/Upperheader'
import LoverHeader from '../reuseblecomponent/header/loverheader/LoverHeader'
import Footer from '../reuseblecomponent/footer/Footer'
import Homepage from '../pages/homepage/Homepage'

export default function Router() {
  return (
    <>
     <Upperheader/>
     <LoverHeader/>
      <Routes>
       <Route path='/our_client' element={<Allclient/>} />
       <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
