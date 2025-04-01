import React from "react";

export default function State() {

    const [count, setCount] = React.useState(100);
    // const value = 0;
    const [name, setName] = React.useState('Ankush');
    console.log(name);

    return (
        <>
            <br />
            <h1>State</h1>
            <br />
            <ul>
                <li>State is a built-in React object that is used to manage the component's data.</li>
                <li>State is mutable, meaning it can be changed. It is also local to the component.</li>
                <li>State is used to store data that can change over time, such as user input or API responses.</li>
                <li>State is managed using the useState hook in functional components.</li>
                <li>State is used to trigger re-renders of the component when the state changes.</li>
            </ul>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h1>Explaination</h1>

            <button onClick={function() {
                setCount(count + 10);
            }}>{count}</button>
            <input value={name} onChange={function(event) {
                setName(event.target.value);
            }} type="text" />
        </>
    )
}