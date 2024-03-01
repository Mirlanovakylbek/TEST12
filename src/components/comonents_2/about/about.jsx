import React from 'react'
import Header from '../../header/header'
import Main from '../../main/main'
import App from '../../header_slick/slaider'
import Abich from './abouts'
import Footer from '../../Footer/footer'
import Robin from '../Robin/Robin'
import Experience from '../Experience/Experience'

function About() {
  return (
    <div>
        <Header />
        <App/>
        <Main />
        <Abich/>
        <Robin/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default About