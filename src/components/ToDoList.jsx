const ToDoList = ({ todo, toggleTask, removeTask }) => {
   return (
      <div key={todo.id} className="flex justify-center items-center">
         <div className={todo.complete ? "item-text strike" : "item-text"}
            onClick={() => toggleTask(todo.id)}
         >
            {todo.task}
         </div>
         <div className="item-delete pl-96" onClick={() => removeTask(todo.id)}>
            X
         </div>
      </div>
   )
}

export default ToDoList;