import React from "react";
import "./Experience.scss"
import { BsFillBackpack2Fill  }  from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import { PiConfettiBold } from "react-icons/pi";

export default function Experience() {
    const espor = [
        {
           id: 1,
           imr: <BsFillBackpack2Fill />,
           exa: "опыт",
           pxp: "Мы организуем туры на Камчатку с 2016 года. Мы организовали отдых более чем для 120 человек и не остановимся на этом",
        },

        {
            id: 2,
            imr: <GiRibbonMedal />,
            exa: "Профессионализм",
            pxp: "Все гиды коренные жители Камчатки со специальной подготовкой. Проверенная и проходимая техника.",
         },

         {
            id: 3,
            imr: <PiConfettiBold />,
            exa: "Невероятные эмоции",
            pxp: "Мы строим свои туры так, чтобы показать вам Максимум дикой природы Камчатки. Дикие звери, морские обитатели и вулканы",
         },
    ]
    return(
        <div className="Experience">
            <div className="wrap">
                <div className="gss"> 
                    <h1> Почему наши туры лучше </h1> 
                </div>
                <div className="exper">
                    {espor.map((er) => (
                        <>
                        <div className="ween">
                            <h2> {er.imr} </h2>
                            <h1> {er.exa} </h1>
                            <p> {er.pxp} </p>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}