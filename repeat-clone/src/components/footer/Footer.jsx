import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <section className='footer__top-section'>
                <img src="" alt="Logo" className='footer__logo' />

                <div className='footer__socials'>
                    <img src="" alt="Linkedin logo" />
                    <img src="" alt="X logo" />
                    <img src="" alt="Instagram logo" />
                    <img src="" alt="TikTok logo" />
                </div>
            </section>

            <section>
                <nav>
                    <ul className='footer__list'>
                        <li className='footer__list-item'> Blog </li>
                        <li className='footer__list-item'> Podcast </li>
                        <li className='footer__list-item'> Newsletter </li>
                        <li className='footer__list-item'> Jobs </li>
                        <li className='footer__list-item'> Privacy Policy </li>
                        <li className='footer__list-item'> Terms of Service </li>
                    </ul>
                </nav>
            </section>

            <p className='footer__trade-mark'> © 2023 REPEAT INC. Moments is a trademark of Repeat, Inc. </p>
        </footer>
    )
}
