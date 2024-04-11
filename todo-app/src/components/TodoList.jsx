import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({ todoList, handleTodoClick }) {



    return (
        <ul>
            {
                todoList.map((todo, index) =>
                    <TodoItem
                        todo={todo}
                        key={index}
                        index={index}
                        handleTodoClick={handleTodoClick} />
                )
            }
        </ul>
    )
}
