import { useEffect, useState } from "react"
import AddTodo from "./components/addTodo";
import MapTodos from "./components/mapTodos";

export default function App() {

  const [todo, setTodo] = useState([]);

  useEffect(function () {
    const data = JSON.parse(localStorage.getItem("todo")) || [];
    setTodo(data);
  }, []);

  useEffect(function () {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addTodo(task, priority) {
    const newTodo = {
      id: Date.now(),
      task: task,
      priority: priority,
    }
    setTodo([...todo, newTodo ]);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 flex-col space-y-4">
      <AddTodo addTodo={addTodo} />
      <MapTodos todos={todo} />
    </div>
  )
}