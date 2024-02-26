import React from 'react'
import Header from '../../header/header'
import Main from '../../main/main'
import App from '../../header_slick/slaider'
import Tour_1 from './Tour'


function Tour() {
  return (
    <div>
        <Header />
        <App />
        <Main />
        <Tour_1/>

    </div>
  )
}

export default Tour