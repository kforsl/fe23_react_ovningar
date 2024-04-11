import React from 'react'
import './header.css'

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__logo'> Repeat </h1>

            <nav>
                <ul className='header__list'>
                    <li className='header__list-item'> Product </li>
                    <li className='header__list-item'> Blog </li>
                    <li className='header__list-item'> Stop Focusing on LTV </li>
                </ul>
            </nav>

            <button className='header__btn'> Book a Demo </button>
        </header>
    )
}
