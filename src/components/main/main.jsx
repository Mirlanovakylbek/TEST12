import { NavLink } from 'react-router-dom'
import './main.scss'
import React from 'react'

export default function Main() {
    return (
        <div className="durex">
            <div className="wrap">
            <div className="loading">
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/tours'>Гарантированные туры</NavLink>
                <NavLink to='/about'>О нас</NavLink>
                <NavLink to={'/contact'}>Контакты</NavLink>
                <NavLink to={'/reviews'}>Отзывы клиентов</NavLink>
                <NavLink to={'/cars'}>Аренда авто</NavLink>
                <NavLink to={'/creation'}>Создай свой тур</NavLink>
            </div>
            </div>
        </div>
    )
}
