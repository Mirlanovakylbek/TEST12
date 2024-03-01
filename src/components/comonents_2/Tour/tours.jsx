import React from "react";
import './Tour.scss'
import tour_1 from '../../img/tour_1.jpg'
import tour_2 from '../../img/tour_2.jpg'
import tour_3 from '../../img/tour_3.jpg'

import { GoStarFill } from "react-icons/go";
import { TbCalendar } from "react-icons/tb";

export default function Tourchik() {
    return (
        <div className="wrap">
            <div className="tour_container">
                <div className="tour_text">
                    <h1>Гарантированые туры</h1>
                    <p>Присоединяйтесь к нашим гарантированным пешеходным турам и отправляйтесь в удивительные приключения по <br />
                        самым красивым уголкам природы Кыргызстана. Наши туры специально разработаны для ценителей активного <br />
                        отдыха и обещают незабываемые впечатления и взаимодействие с уникальной культурой и природой этой страны.</p>
                </div>
                <div className="tour_blogs">
                    <div className="tour_img">
                        <img src={tour_1} alt="" />
                    </div>
                    <div className="tour_red">
                        <div className="tour_blocks">
                            <div className="tour_text_1">
                                <h1>Открытие Старинных Путей</h1>
                                <div className="icons_tour">
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <p>4.5 (1200 Reviews)</p>
                                </div>
                                <p>Присоединитесь к нам в захватывающем путешествии "Зимние Сокровища <br />
                                    Бураны", чтобы раскрыть тайны и богатства древних времен в сердце <br />
                                    Кыргызстана. Это уникальное приключение предоставит вам возможность <br />
                                    погрузиться в историю и культуру этой загадочной страны.</p>
                            </div>
                            <div className="tour_button">
                                <button>Подробнее</button>
                            </div>
                        </div>
                        <div className="tour_end">
                            <p>7 дней
                                <br />Май - сентябрь</p>
                            <h1><TbCalendar />18 августа</h1>
                            <button>700$</button>
                        </div>
                    </div>
                </div>

                <div className="tour_blogs">
                    <div className="tour_img">
                        <img src={tour_2} alt="" />
                    </div>
                    <div className="tour_red">
                        <div className="tour_blocks">
                            <div className="tour_text_1">
                                <h1>Открытие Старинных Путей</h1>
                                <div className="icons_tour">
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <p>4.5 (1200 Reviews)</p>
                                </div>
                                <p>Отправьтесь на путешествие вокруг великолепного Озера Иссык-Куль. <br />
                                Преодолейте увлекательные тропы, наслаждайтесь прозрачными водами <br />
                                озера и познакомьтесь с традициями местных обитателей.</p>
                            </div>
                            <div className="tour_button">
                                <button>Подробнее</button>
                            </div>
                        </div>
                        <div className="tour_end">
                            <p>7 дней
                                <br />Май - сентябрь</p>
                            <h1><TbCalendar />18 августа</h1>
                            <button>700$</button>
                        </div>
                    </div>
                </div>

                <div className="tour_blogs">
                    <div className="tour_img">
                        <img src={tour_3} alt="" />
                    </div>
                    <div className="tour_red">
                        <div className="tour_blocks">
                            <div className="tour_text_1">
                                <h1>Открытие Старинных Путей</h1>
                                <div className="icons_tour">
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <p>4.5 (1200 Reviews)</p>
                                </div>
                                <p>Отправьтесь на заснеженные вершины и прекрасные водопады в этом <br />
                                захватывающем путешествии. Пройдите по маршрутам среди природных <br />
                                чудес и насладитесь тишиной гор.</p>
                            </div>
                            <div className="tour_button">
                                <button>Подробнее</button>
                            </div>
                        </div>
                        <div className="tour_end">
                            <p>7 дней
                                <br />Май - сентябрь</p>
                            <h1><TbCalendar />18 августа</h1>
                            <button>700$</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}