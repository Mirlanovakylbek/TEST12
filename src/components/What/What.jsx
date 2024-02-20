import React from "react";
import './What.scss'
import bounty from '../What/img_What/foxy1.png'

export default function What() {
    return (
        <>
        <div className="wrap">
            <div className="What">
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
        </div>
        </>

    )
}
