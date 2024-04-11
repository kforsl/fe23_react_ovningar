import React from 'react'
import TenNavItem from './TenNavItem'
import TenNavLogBtn from './TenNavLogBtn'

function TenNav() {

    return (
        <nav className='ten-nav'>
            <ul className='ten-nav__list'>
                <TenNavItem />
                <TenNavLogBtn />
            </ul>

        </nav>
    )


}

export default TenNav
