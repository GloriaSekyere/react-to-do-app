import { useState } from "react";

const Main = () => {

  const [activity, setActivity] = useState('');

  const [toDos, setToDos] = useState([
    {todo: "Complete react project", id: 1},
    {todo: "Book dental appointment", id: 2},
    {todo: "Retrieve funds from bank", id: 3},
    {todo: "Fix bugs in code", id: 4},
  ]);

  // Function to handle input changes
  const newToDo = (e) => {
    setActivity(e.target.value);
  }

  // Function to handle adding an activty
  const addToDo = () => {
    setToDos(prevToDos => {
      prevToDos.push({todo: activity, id: prevToDos[prevToDos.length - 1].id + 1})
    });
  }

  // Function to handle deleting an activty
  const deleteToDo = (id) => {
    setToDos(prevToDos => {
        return (prevToDos.filter(prevToDo => {
          return (prevToDo.id !== id);
        }));
    });
  }
  console.log(toDos.length);
  // Variable containing to-do list
  const todoList = toDos.map(toDo => {
    return (
      <div key={Math.random()} className="single-todo">
        <li key={Math.random()}>{toDo.todo}</li>
        <button key={Math.random()} className="del-btn" onClick={() => deleteToDo(toDo.id)}>-</button>
      </div>
    );
  });

  return (
    <main className="main">
      <div className="input-section">
        <input id="input-field" type="text" placeholder="Enter activity..." onChange={(e) => newToDo(e)}/>
        <button className="add-btn" onClick={addToDo}>+</button>
      </div>

      <div className="todos">
        {todoList}
      </div>
    </main>
  );
}

export default Main;