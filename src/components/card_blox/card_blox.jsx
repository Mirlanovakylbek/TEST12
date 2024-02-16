import React from "react";
import './card_blox.scss'
import logo from '../card_blox/card_img/card_img1.png'
import logo1 from '../card_blox/card_img/card_img2.jpg'
import logo2 from '../card_blox/card_img/card_img3.jpg'
import logo3 from '../card_blox/card_img/card_img4.jpg'
import logo4 from '../card_blox/card_img/card_img2.jpg'



export default function Card_blox() {
    return (
            <div className="wrap">
        <div class="wrapper">
            <div className="flower">

                <div class="shadow-text">
                    <p class="shadow-text">Топ-5 вариантов для вашего стиля путешествия</p>
                </div>

                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src={logo} alt="" />
                            <h3>Design</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis
                                provident at.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src={logo1} alt="" />
                            <h3>Code</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis
                                provident at.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src={logo2} alt="" />
                            <h3>Launch</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis
                                provident at.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src={logo3} alt="" />
                            <h3>Launch</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis
                                provident at.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src={logo4} alt="" />
                            <h3>Launch</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis
                                provident at.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}