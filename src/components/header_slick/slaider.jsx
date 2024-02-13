import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TbCalendar } from "react-icons/tb";

import './slaider.scss';
import photo from '../img/лого.png'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className="from">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='drack_1'>
            <div className="kopchik">
              <div className="top">
                <h1>"Чудеса Живописных <br />Долин Кыргызстана"</h1>
                <p>"Откройте волшебство Кыргызстана <br />в уникальном путешествии.</p>
                <button><TbCalendar />Расписание тура</button>
              </div>
              <div className="bot">
                <img src={photo} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='drack_2'><img src={photo} /></SwiperSlide>
          <SwiperSlide className='drack_3'><img src={photo} /></SwiperSlide>
          <SwiperSlide className='drack_4'><img src={photo} /></SwiperSlide>
          <SwiperSlide className='drack_5'><img src={photo} /></SwiperSlide>
          <SwiperSlide className='drack_6'><img src={photo} /></SwiperSlide>
          <SwiperSlide className='drack_7'><img src={photo} /></SwiperSlide>
          <SwiperSlide className='drack_8'><img src={photo} /></SwiperSlide>
          <SwiperSlide className='drack_9'><img src={photo} /></SwiperSlide>
        </Swiper>

      </div>
    </>
  );
}
