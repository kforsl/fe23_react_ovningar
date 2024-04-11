import React from 'react'
import TenNav from './TenNav'
import TenContact from './TenContact'

function TenFooter() {
    return (
        <footer className='ten-footer'>
            <TenNav />
            <TenContact />
            <TenContact />
            <TenContact />
        </footer>
    )
}

export default TenFooter
