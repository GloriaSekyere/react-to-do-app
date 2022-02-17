import { useState } from "react";
import InputSection from "./InputSection";

const Main = () => {
  
  const [toDos, setToDos] = useState([]);

  // Variable containing to-do list
  const todoList = toDos.map(toDo => {
    return (
      <div key={Math.random()} className="single-todo">
        <li>{toDo.todo}</li>
        <button className="del-btn" onClick={() => deleteToDo(toDo.id)}>-</button>
      </div>
    )}
  );
  
  // Function to handle deleting an activty
  const deleteToDo = (id) => {
    setToDos(prevToDos => {
        return (prevToDos.filter(prevToDo => {
          return (prevToDo.id !== id);
        }));
    });
  }
  
  return (
    <main className="main">
      <InputSection 
        toDos={toDos}
        setToDos={setToDos}
      />

      <div className="todos">
        {todoList}
      </div>
    </main>
  );
}

export default Main;