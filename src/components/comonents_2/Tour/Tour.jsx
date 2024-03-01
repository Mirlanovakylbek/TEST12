import React from 'react'
import Header from '../../header/header'
import Main from '../../main/main'
import App from '../../header_slick/slaider'
import Tourchik from './tours'


function Tour() {
  return (
    <div>
        <Header />
        <App />
        <Main />
        <Tourchik/>
    </div>
  )
}

export default Tour