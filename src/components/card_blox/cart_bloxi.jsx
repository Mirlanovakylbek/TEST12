import React, { useState } from 'react';
import './card_blox.scss'; 
import cart1 from "../card_blox/card_img/card11.png"
import cart3 from "../card_blox/card_img/card22.jpg"
import cart4 from "../card_blox/card_img/card44.jpg"
import { GoArrowRight } from "react-icons/go";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="wrap">
      <div className="padin">
<div className='kolp'>
<h1> Топ-5 вариантов для вашего стиля путешествия </h1>
</div>
    <div className="accordion">
      {images.map((image, index) => (
        <div key={index} className="accordion-item">
          <div className='nxn'>
            <h3> {image.nxn} </h3>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            onClick={() => toggleAccordion(index)}
            className="accordion-image"
          />
          {openIndex === index && (
            <div className="accordion-content">
              <p1> {image.icon} {image.text}</p1>
              <p>{image.text1}</p>
              <p>{image.text2}</p>
              <p>{image.text3}</p>
              <p>{image.text4}</p>
            </div>
          )}
        </div>
      ))}
    </div>
</div>
</div>
  );
};

const images = [
  {
    id: 1,
    alt: 'image1.jpg',
    src: cart1,
    nxn: "Природа и горы",
    icon: <GoArrowRight />,
    text: 'Культурная Одиссея',
    text1: 'TКыргызские Культурные',
    text2: 'Классика Кыргызстана',
    text3: 'Искусство и Традиции',
    text4: 'Культурная Эпопея',
  },
  {
    id: 2,
    alt: 'image2.jpg',
    src: cart3,
    nxn: "Природа и горы",
    icon: <GoArrowRight />,
    text: 'Культурная Одиссея',
    text1: 'TКыргызские Культурные',
    text2: 'Классика Кыргызстана',
    text3: 'Искусство и Традиции',
    text4: 'Культурная Эпопея',
  },
  {
    id: 3,
    alt: 'image3.jpg',
    src: cart4,
    nxn: "Природа и горы",
    icon: <GoArrowRight />,
    text: 'Культурная Одиссея',
    text1: 'TКыргызские Культурные',
    text2: 'Классика Кыргызстана',
    text3: 'Искусство и Традиции',
    text4: 'Культурная Эпопея',
  },
  {
    id:4,
    alt: 'image4.jpg',
    src: cart1,
    nxn: "Природа и горы",
    icon: <GoArrowRight />,
    text: 'Культурная Одиссея',
    text1: 'TКыргызские Культурные',
    text2: 'Классика Кыргызстана',
    text3: 'Искусство и Традиции',
    text4: 'Культурная Эпопея',
  },
  {
    id: 6,
    alt: 'image5.jpg',
    src: cart3,
    nxn: "Природа и горы",
    icon: <GoArrowRight />,
    text: 'Культурная Одиссея',
    text1: 'TКыргызские Культурные',
    text2: 'Классика Кыргызстана',
    text3: 'Искусство и Традиции',
    text4: 'Культурная Эпопея',
  },
  {
    id: 6,
    alt: 'image6.jpg',
    src: cart4,
    nxn: "Природа и горы",
    icon: <GoArrowRight />,
    text: 'Культурная Одиссея',
    text1: 'TКыргызские Культурные',
    text2: 'Классика Кыргызстана',
    text3: 'Искусство и Традиции',
    text4: 'Культурная Эпопея',
  },
];

export default Accordion;
