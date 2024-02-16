import './header.scss';
import React from 'react';
import { IoMenu } from "react-icons/io5";

export default function Header() {
    return (
        <div className="container">
            <div className="wrap">
            <div className="cop">
                <h2>Nokmads life Kyrgyzstan </h2>
                <div className="gif">
                    <h2 className='ford'>6391 Elgin St. Celina, Delaware 10299 <span></span></h2>
                </div>
                <div className="icons">
                <IoMenu />
                </div>
            </div>
            </div>
        </div>
    )
}
