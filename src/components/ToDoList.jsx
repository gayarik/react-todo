import { BiTrashAlt } from 'react-icons/bi'

const ToDoList = ({ todo, toggleTask, removeTask }) => {
   return (
      <div key={todo.id} className="cursor-pointer max-w-sm flex justify-between items-center m-auto border rounded-md p-3 px-4 mt-4">
         <div className={todo.complete ? "line-through" : ""}
            onClick={() => toggleTask(todo.id)}
         >
            {todo.task}
         </div>
         <div onClick={() => removeTask(todo.id)}>
            <BiTrashAlt className='hover:text-red-600' />
         </div>
      </div>
   )
}

export default ToDoList;