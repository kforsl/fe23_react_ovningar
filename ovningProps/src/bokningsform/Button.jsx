import React from 'react'

export default function Button({ handleTicketInformation }) {
    return (
        <button className='booking__form-btn' onClick={handleTicketInformation}> Boka biljetter </button>
    )
}
