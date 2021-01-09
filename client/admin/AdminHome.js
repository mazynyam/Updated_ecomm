import React from 'react'
import Header from './pages/Header'
import Menu from './pages/Menu'
import Footer from './pages/Footer'

export default function AdminHome(){
 
    return (
      <div class="hold-transition sidebar-mini layout-fixed">
      <div className='wrapper'>
        <Header />
        <Menu />
        <Footer />
      </div>
      </div>
    )
}


