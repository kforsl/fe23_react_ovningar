import React, { useState } from 'react'

export default function AddForm({ handleNewTodo, handleInput }) {

    return (
        <form onSubmit={handleNewTodo}>
            <input type='text' placeholder='Add new todos' onChange={handleInput} />
            <input type="submit" value='Add' />
        </form>
    )
}
