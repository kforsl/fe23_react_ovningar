import React from 'react'
import TenNav from './TenNav'
import TenMain from './TenMain'
import TenAside from './TenAside'

function TenPage() {
    return (
        <section className='ten-page'>
            <TenNav />
            <TenMain />
            <TenAside />
        </section>
    )
}

export default TenPage
