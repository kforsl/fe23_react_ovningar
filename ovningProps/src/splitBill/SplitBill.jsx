import React, { useState } from 'react'
import SplitForm from './SplitForm'

export default function SplitBill() {
    const [splitSum, setSplitSum] = useState(0)
    const [sum, setSum] = useState(0)
    const [friends, setFriends] = useState(0)
    const [tip, setTip] = useState(0)

    const handleCaculation = (e) => {
        e.preventDefault()
        setSplitSum(((sum * tip) + sum) / friends);
    }

    const handleInput = (e) => {
        if (e.target.id === 'sum') setSum(Number(e.target.value))
        else if (e.target.id === 'friends') setFriends(Number(e.target.value))
        else if (e.target.id === 'tip') setTip(Number(e.target.value))

    }

    return (
        <div className='split'>
            {splitSum === 0 ? <h1> Split the nota </h1> : <h1> {splitSum}kr per person </h1>}
            <SplitForm handleCaculation={handleCaculation} handleInput={handleInput} />
        </div>

    )
}
