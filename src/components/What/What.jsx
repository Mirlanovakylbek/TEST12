import React from "react";
import './What.scss'
import bounty from '../What/img_What/foxy1.png'
// import knock_ from '../What/img_What/knock_1.jpg'
// import knock__ from '../What/img_What/knock_2.jpg'
// import knock___ from '../What/img_What/knock_3.jpg'  

export default function What() {
    
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
                        
                    </div>
                </div>
            </div>
        </>

    )
}
