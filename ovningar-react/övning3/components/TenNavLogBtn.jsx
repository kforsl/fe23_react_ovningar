import React from 'react'

function TenNavLogBtn() {
    {
        let userLoggedIn = true;

        return userLoggedIn ?
            <li className='ten-nav__list-item'> LogOut </li>
            :
            <li className='ten-nav__list-item'> LogIn </li>
    }
}

export default TenNavLogBtn
