import { useState } from "react";
import InputSection from "./InputSection";

const Main = () => {
  //const [isEmpty, setIsEmpty] = useState(true)
  const [activity, setActivity] = useState('');

  const [toDos, setToDos] = useState([
    {todo: "Complete react project", id: 1},
    {todo: "Book dental appointment", id: 2},
    {todo: "Retrieve funds from bank", id: 3},
    {todo: "Fix bugs in code", id: 4},
  ]);

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
        activity={activity}
        setActivity={setActivity}
      />

      <div className="todos">
        {todoList}
      </div>
    </main>
  );
}

export default Main;