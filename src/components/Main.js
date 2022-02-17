import { useState } from "react";
import InputSection from "./InputSection";
import ToDoList from "./ToDoList";

const Main = () => {
  
  const [toDos, setToDos] = useState([]);

  return (
    <main className="main">
      <InputSection 
        setToDos={setToDos}
      />

      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
      />
    </main>
  );
}

export default Main;