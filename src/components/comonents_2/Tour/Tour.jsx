import React from 'react'
import Header from '../../header/header'
import Main from '../../main/main'
import App from '../../header_slick/slaider'
import Tourchik from './tours'
import Footer from '../../Footer/footer';


function Tour() {
  return (
    <div>
        <Header />
        <App />
        <Main />
        <Tourchik/>
        <Footer/>
    </div>
  )
}

export default Tour