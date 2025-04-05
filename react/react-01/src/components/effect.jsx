import React, { useState } from "react";
import { useEffect } from "react";

export default function Effect() {

    const [name, setName] = useState('Ankush')

    //* NO-dependency array
    // useEffect(function () {
    //     console.log("hELLO");
    // });
    //* EMPTY-dependency array
    // useEffect(function() {
    //     console.log(`Hello`);
    // }, []);
    //* dependency array
    useEffect(function() {
        console.log(`Hello ${name}`);
    }, [name]);

    return (
        <>
            <h1>UseEffect:</h1>
            <br />
            <br />
            <p>
                useEffect is a hook that lets you perform side effects in your functional components.
                "Side effects" are anything that affects something outside the scope of the function you're working on,
                like fetching data, updating the DOM, setting up subscriptions, or even timers.
            </p>

            <input type="text" value={name} onChange={function (event) {
                setName(event.target.value);
            }} />
        </>
    )
}