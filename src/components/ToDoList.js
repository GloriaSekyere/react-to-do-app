const ToDoList = ({ toDos, setToDos }) => {

  // Function to handle deleting an todo
  const deleteToDo = (id) => {
    setToDos(prevToDos => {
        return (prevToDos.filter(prevToDo => {
          return (prevToDo.id !== id);
        }));
    });
  }

  // Variable containing to-do list
  const todoList = toDos.map(toDo => {
    return (
      <div key={Math.random()} className="single-todo">
        <li>{toDo.todo}</li>
        <button className="del-btn" onClick={() => deleteToDo(toDo.id)}>-</button>
      </div>
    )}
  );
  
  return (
    <ul className="todos">
      {todoList}
    </ul>
  )
}

export default ToDoList