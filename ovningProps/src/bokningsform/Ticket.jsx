import React from 'react'

export default function Ticket({ ticketInformation }) {
    return (
        <article className='ticket'>

            <h2> {ticketInformation.title} {ticketInformation.fName} {ticketInformation.lName}</h2>
            <h3> {ticketInformation.ticketClass} </h3>
            <h3> Number of tickets: {ticketInformation.tickets} </h3>

        </article>
    )
}
