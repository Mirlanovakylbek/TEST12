import React from "react";
import "./Robin.scss"
import blusa from "../../img/blusa.jpg"

export default function Robin () {
    return(
        <div className="Robin">
            <div className="wrap">
                <div className="erica">

                    <div className="blus_flex">

                        <div className="blusa">
                            <img src={blusa} alt="" />
                            <h1> Erica Gleason </h1>
                            <p> Li Europan lingues es membres del <br /> sam  familie. Lor separat existentie es. </p>
                        </div>
                        
                        <div className="dicen">
                        <img src={blusa} alt="" />
                            <h1> Robin Dickens </h1>
                            <p> Li Europan lingues es membres del <br />  sam familie. Lor separat existentie es. </p>
                        </div>

                    </div>
                        {/* //////////// */}
                    <div className="you">
                        <h1> Наша команда </h1>
                        <p1> В нашей команде – люди, преданные своему делу и понимающие, что путешествия имеют огромное значение в жизни каждого из нас. Мы не только путешествуем, но и учимся у местных культур, поддерживаем экологически чистые инициативы и вносим свой вклад в развитие местных сообществ. </p1>
                       <p> Мы гордимся тем, что наша команда объединяет энтузиастов, готовых создать для вас незабываемые моменты и сделать ваше путешествие неповторимым опытом. Присоединяйтесь к нам, и вместе мы покорим новые вершины и откроем для вас волшебный мир путешествий! </p>
                    </div>

                </div>
            </div>
        </div>
    )
}