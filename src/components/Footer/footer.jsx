import React from "react";
import './footer.scss'
import foot from '../img/лого.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_2">
                <div className="wrap_1">
                    <div className="game_1">
                        <img src={foot} alt="" />
                    </div>
                    <div className="game_2">
                        <div className="bomber">
                            <div className="footer_header">
                                <ul>
                                    <li>Главная</li>
                                    <li>Гарантированные туры</li>
                                    <li>О нас</li>
                                    <li>Контакты</li>
                                </ul>
                            </div>
                            <div className="footer_main">
                                <ul>
                                    <li>Отзывы клиентов</li>
                                    <li>Аренда авто</li>
                                    <li>Создай свой тур</li>
                                </ul>
                            </div>
                            <div className="tel_nome">
                                <ul>
                                    <li>6391 Elgin St. Celina, <br />Delaware 10299</li>
                                    <li>+84r893489023</li>
                                    <li>+85y84390ytyre</li>
                                </ul>
                            </div>
                            <div className="graf">
                                <ul>График работы</ul>
                                <ul>пн-сб 8:00 - 18:00</ul>
                                <ul>пн-сб 8:00 - 18:00</ul>
                            </div>
                        </div>
                        <div className="game_3">
                            <div className="QR">
                                <p>© 1997-2021 Netflix, Inc.  i-062d573a0ee099242 </p>
                            </div>
                            <div className="footer_img">
                                <ul>
                                    <li className="lis"><FaSquareFacebook /></li>
                                    <li className="lis"><FaInstagramSquare /></li>
                                    <li className="lis"><BsTwitter /></li>
                                    <li className="lis"><FaYoutube /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}