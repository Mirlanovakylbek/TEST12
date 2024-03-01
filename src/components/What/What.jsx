import './What.scss'
import bounty from '../What/img_What/foxy1.png'
import knock_ from '../What/img_What/knock_1.jpg'
import knock__ from '../What/img_What/knock_2.jpg'
import knock___ from '../What/img_What/knock_3.jpg'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function What() {
    
    const [swiper, setSwiper] = useState();
    let [loding, setLoding] = useState(false);

    return (
        <>
            <div className="wrap">
                <div className="What">
                    <div className="nomer_1">
                        <div className="txt">
                            <h1>Кто мы такие?</h1>
                            <p>В «NOMAD LIFE» мы знаем, что путешествия — <br />это не просто перемещение из одного места в другое.
                                <br />Это уникальная возможность расширить горизонты, <br />погрузиться в культуры, которые меняют нас, <br />и почувствовать магию каждого момента.
                                <br />Наши опытные гиды — настоящие энтузиасты, которые <br />с радостью расскажут вам увлекательные истории <br />и покажут уголки мира, о которых вы и не могли мечтать.
                            </p>
                        </div>
                        <div className="text_slick">
                            <img src={bounty} alt="" />
                        </div>
                    </div>
                    <div className="nomer_2">
                        <div className="nomer_3">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            height={300}
                            pagination={{
                                clickable: true,
                                height: 300,

                            }}
                            autoplay={{
                                disableOnInteraction: false,
                                delay: 2500,
                                height: 300,
                            }}
                            breakpoints={{
                                766: {
                                    slidesPerView: 2.5,
                                    height: 300,
                                },
                            }}
                            navigation={true}
                            className="mySwiper"
                            onSwiper={(s) => {
                                setSwiper(s);
                            }}
                        >
                            <SwiperSlide style={{height:'330px'}}> <img src={knock_} alt="" /> </SwiperSlide>
                            <SwiperSlide style={{height:'330px'}}> <img src={knock__} alt="" /> </SwiperSlide>
                            <SwiperSlide style={{height:'330px'}}> <img src={knock___} alt="" /> </SwiperSlide>
                        </Swiper>
                        </div>
                        <div className="text_forum">
                            <p>Давайте сделаем ваше путешествие <br />
                            незабываемым! Присоединяйтесь к "NOMAD <br />
                            LIFE" и откройте новые грани жизни, <br />
                            наполненные приключениями, дружбой и <br />
                            удивительными открытиями. Не ждите – мир <br />
                            жаждет вас, и мы с радостью проведем вас за <br />
                            руку через этот волшебный портал! Ваше <br />
                            лучшее приключение ждет вас здесь и сейчас – <br />
                            только с "NOMAD LIFE"!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
