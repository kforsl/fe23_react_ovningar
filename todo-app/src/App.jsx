import { useState } from 'react'
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'
import todos from './assets/todos.json'

function App() {

    const [todoList, setTodoList] = useState([...todos])
    const [input, setInput] = useState('')

    const handleNewTodo = (e) => {
        e.preventDefault()
        if (input.length !== 0) {
            const newTodo = {
                task: input,
                done: false
            }
            document.querySelector('input').value = ''
            setInput('')
            setTodoList(t => [...t, newTodo])
        }
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleTodoClick = (index) => {
        const newTodoLists = [...todoList]
        newTodoLists[index].done = !newTodoLists[index].done
        setTodoList(newTodoLists)
    }
    return (
        <section className='app'>
            <h1> My Todo List </h1>
            <AddForm handleNewTodo={handleNewTodo} handleInput={handleInput} />
            <TodoList todoList={todoList} handleTodoClick={handleTodoClick} />
        </section>
    )
}

export default App
