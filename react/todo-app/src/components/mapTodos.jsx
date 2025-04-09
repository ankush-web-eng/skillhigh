import React from "react";

export default function MapTodos({ todos }) {
    return (
        <div className="border px-3 py-2 rounded-xl">
            {todos.map(function (todo, index) {
                return (
                    <div className="flex" key={index}>
                        <p className="pr-1">{index}.</p>
                        <strong className="pl-2 pr-0">{todo.task}</strong>
                        {todo.priority === "low" && <h2 className="text-green-500 px-3 rounded-xl border mx-3">{todo.priority}</h2>}
                        {todo.priority === "medium" && <h2 className="text-yellow-500 px-3 rounded-xl border mx-3">{todo.priority}</h2>}
                        {todo.priority === "high" && <h2 className="text-red-500 px-3 rounded-xl border mx-3">{todo.priority}</h2>}
                    </div>
                )
            })}
        </div>
    )
}