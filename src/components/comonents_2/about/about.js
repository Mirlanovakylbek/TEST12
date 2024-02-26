import React from 'react'
import Header from '../../header/header'
import Main from '../../main/main'
import App from '../../header_slick/slaider'
import About_1 from './about'

function About() {
  return (
    <div>
        <Header />
        <App/>
        <Main />
        <About_1/>
    </div>
  )
}

export default About