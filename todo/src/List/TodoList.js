//여진

import TodoItem from "./TodoItem";

function TodoList({data}) {
  


  return(
    <div>
      {data.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  )
}

export default TodoList;