import React from "react";
import './blog.scss'
import { TbCalendar } from "react-icons/tb";


export default function Blog() {
    ///test
    return(
        <div className="contr">
           <div className="forum">
            <h1>ТУРЫ ПО ЦЕНТРАЛЬНОЙ АЗИИ</h1>
           </div>
           <div className="blogs">
            <div className="boxy">
                <div className="blog_1">
                    <div className="hop">
                    <h2>Классический групповой тур по Узбекистану</h2>
                    <p>Ташкент, Хива, Бухара, Самарканд</p>
                    <h1><TbCalendar />18 августа</h1>
                    </div>
                </div>
                <div className="blog_2">
                    <h2>Классический групповой тур по Узбекистану</h2>
                    <p>Ташкент, Хива, Бухара, Самарканд</p>
                    <h1><TbCalendar />18 августа</h1>
                </div>
                <div className="blog_3">
                    <h2>Классический групповой тур по Узбекистану</h2>
                    <p>Ташкент, Хива, Бухара, Самарканд</p>
                    <h1><TbCalendar />18 августа</h1>
                </div>
                <div className="blog_4">
                    <h2>Классический групповой тур по Узбекистану</h2>
                    <p>Ташкент, Хива, Бухара, Самарканд</p>
                    <h1><TbCalendar />18 августа</h1>
                </div>
                <div className="blog_5">
                    <h2>Классический групповой тур по Узбекистану</h2>
                    <p>Ташкент, Хива, Бухара, Самарканд</p>
                    <h1><TbCalendar />18 августа</h1>
                </div>
                <div className="blog_6">
                    <h2>Классический групповой тур по Узбекистану</h2>
                    <p>Ташкент, Хива, Бухара, Самарканд</p>
                    <h1><TbCalendar />18 августа</h1>
                </div>
            </div>
           </div>
        </div>
    )
}