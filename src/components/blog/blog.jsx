import React from "react";
import "./blog.scss";
import { TbCalendar } from "react-icons/tb";
import slaid3 from "../img/slid_3.jpg";
import blog2 from "../img/blog_2.jpg";
import blog3 from "../img/blog_3.jpg";
import blog4 from "../img/blog_4.jpg";
import blog5 from "../img/blog_5.jpg";
import blog6 from "../img/blog_6.jpg";

const applicants = [
  {
    id: "1",
    title: "Классический групповой тур по Узбекистану",
    text: "Ташкент, Хива, Бухара, Самарканд",
    calen: "18 августа",
    tb: <TbCalendar />,
    mony: "$ 700",
    img: blog3,
  },

  {
    id: "2",
    title: "Классический групповой тур по Узбекистану",
    text: "Ташкент, Хива, Бухара, Самарканд",
    calen: "18 августа",
    tb: <TbCalendar />,
    mony: "$ 700",
    img: blog2,
  },

  {
    id: "3",
    title: "Классический групповой тур по Узбекистану",
    text: "Ташкент, Хива, Бухара, Самарканд",
    calen: "18 августа",
    tb: <TbCalendar />,
    mony: "$ 700",
    img: blog3,
  },

  {
    id: "4",
    title: "Классический групповой тур по Узбекистану",
    text: "Ташкент, Хива, Бухара, Самарканд",
    calen: "18 августа",
    tb: <TbCalendar />,
    mony: "$ 700",
    img: blog4,
  },

  {
    id: "5",
    title: "Классический групповой тур по Узбекистану",
    text: "Ташкент, Хива, Бухара, Самарканд",
    calen: "18 августа",
    tb: <TbCalendar />,
    mony: "$ 700",
    img: blog5,
  },

  {
    id: "6",
    title: "Классический групповой тур по Узбекистану",
    text: "Ташкент, Хива, Бухара, Самарканд",
    calen: "18 августа",
    tb: <TbCalendar />,
    mony: "$ 700",
    img: blog6,
  },
];

export default function Blog() {
  return (
    <div className="contr">
      <div className="wrap">
        <div className="forum">
          <h1>ТУРЫ ПО ЦЕНТРАЛЬНОЙ АЗИИ</h1>
        </div>
        <div className="blogs">
          <div className="boxy">
            <div className="blog_1">
              {applicants.map((e) => {
                return (
                  <div className="hich">
                    <div className="im">
                      <img src={e.img} alt="" />
                    </div>
                    <div className="hop">
                      <div className="hop3">
                        <h2> {e.title} </h2>
                        <p> {e.text} </p>
                        <h1>
                          {e.tb} {e.calen}
                        </h1>
                      </div>
                      <div className="hop1">
                        <h1> {e.mony} </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
