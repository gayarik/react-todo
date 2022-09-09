import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
   const [todos, setTodos] = useState([])

   const addTask = (userInput) => {
      if (userInput) {
         const newItem = {
            id: Math.random().toString(36).substring(2, 9),
            task: userInput,
            complete: false
         }
         setTodos([...todos, newItem])
      }
   }

   const removeTask = () => {

   }

   const handleToggle = () => {

   }

   return (
      <div className="App">
         <ToDoForm addTask={addTask} />
         {todos.map((todo) => {
            return (
               <ToDoList
                  todo={todo}
                  key={todo.id}
                  removeTask={removeTask}
                  toggleTask={handleToggle}
               />
            )
         })}
         <h1 className="text-xl text-center">Список завдань: {todos.length}</h1>
      </div>
   );
}

export default App;
