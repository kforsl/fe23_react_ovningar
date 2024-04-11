export default function TodoItem({ todo, index, handleTodoClick }) {
    {
        return (

            < li
                onClick={() => handleTodoClick(index)}
                style={
                    todo.done ?
                        { backgroundColor: "#64a338" }
                        :
                        { backgroundColor: "#e03b24" }
                } >
                {todo.task}
            </li >

        )
    }
}
