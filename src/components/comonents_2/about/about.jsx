import React from 'react'
import Header from '../../header/header'
import Main from '../../main/main'
import App from '../../header_slick/slaider'
import Abich from './abouts'

function About() {
  return (
    <div>
        <Header />
        <App/>
        <Main />
        <Abich/>
    </div>
  )
}

export default About