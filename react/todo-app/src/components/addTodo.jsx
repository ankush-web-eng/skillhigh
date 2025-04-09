import React from "react";

export default function AddTodo({ addTodo }) {

    const [task, setTask] = React.useState("");
    const [priority, setPriority] = React.useState("low");

    function handleSubmit(e) {
        e.preventDefault();
        if (task === "") return;
        addTodo(task, priority);
        setTask("");
        setPriority("low");
    }

    return (
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
            className="border-2 rounded-xl px-3 py-1 mx-3"
                type="text"
                placeholder="Enter you todo..."
                value={task}
                onChange={function(e) {
                    setTask(e.target.value);
                }}
             />
             <select className="rounded-xl border-2 px-3 py-1" value={priority} onChange={function(e) {
                setPriority(e.target.value);
             }}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
             </select>
             <button className="borded rounded-xl bg-blue-500 text-white px-3 py-1 w-fit cursor-pointer" type="submit">Add Todo</button>
        </form>
    )
}