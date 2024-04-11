import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Destination from './Destination'
import Ticket from './Ticket'

export default function Bokningsform() {

    const [nmbrOfTickets, setNmbrOfTickets] = useState('0')
    const [title, setTitle] = useState('..')
    const [fName, setFName] = useState('Jane')
    const [lName, setLName] = useState('Doe')
    const [ticketClass, setTicketClass] = useState('')

    const [ticketInformation, setTicketInformation] = useState({
        tickets: '0',
        title: '',
        fName: '',
        lName: '',
        ticketClass: '',
    })

    const handleInput = (e) => {
        if (e.target.name === 'ticketClass') setTicketClass(e.target.value)
        else if (e.target.id === "tickets") setNmbrOfTickets(e.target.value)
        else if (e.target.id === "title") setTitle(e.target.value)
        else if (e.target.id === "firstName") setFName(e.target.value)
        else if (e.target.id === "lastName") setLName(e.target.value)
    }

    const handleTicketInformation = (e) => {
        e.preventDefault();

        if (document.querySelector('#terms').checked) {
            setTicketInformation({
                tickets: nmbrOfTickets,
                title: title,
                fName: fName,
                lName: lName,
                ticketClass: ticketClass,
            })
        } else {
            console.log('Du måste godkänna villkoren');
        }
    }

    return (
        <>
            <div className='booking'>
                <Header />
                <Destination />
                <Form
                    handleTicketInformation={handleTicketInformation}
                    handleInput={handleInput}
                />
            </div>

            {ticketInformation.tickets !== '0' ? <Ticket ticketInformation={ticketInformation} /> : <></>}

        </>
    )
}
