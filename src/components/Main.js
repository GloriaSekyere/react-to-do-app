import { useFetch } from "../hooks/useFetch";
import InputSection from "./InputSection";
import ToDoList from "./ToDoList";

const Main = () => {
  const url = "http://localhost:3000/todos"
  const {data: toDos, setData: setToDos, isPending, error} = useFetch(url)

  return (
    <main className="main">
      <InputSection 
        setToDos={setToDos}
      />

      <ToDoList
        toDos={toDos}
        setData={setToDos}
      />
    </main>
  );
}

export default Main;