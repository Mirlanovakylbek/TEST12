import React from "react";
import './Tour.scss'
import tour_1 from '../../img/tour_1.jpg'

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
                    
                </div>
            </div>
        </div>
    )
}