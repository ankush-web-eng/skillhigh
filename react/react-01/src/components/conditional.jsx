import React from "react";

export default function Conditional() {

    const [flag, setFlag] = React.useState(false);
    const [name, setName] = React.useState(false)

    return (
        <>  
            <button onClick={function() {
                setFlag(!flag);
            }}>Render Text</button>
            <button onClick={function() {
                setName(!name);
            }
            }>Render Name</button>
            <p>{flag ? <h1>true</h1> : <h1>false</h1>}</p>
            <p>{name ? <h1>true</h1> : <h1>false</h1>}</p>
            {/* {flag === true && <h1>Hello, Ankush</h1>} */}
            {/* {flag === true ? <h1>Hello, Ankush</h1> : null} */}

            {/* {flag === true && name === true ? <h1>Hello, Ankush</h1> : null} */}
            {/* {flag === true || name === true ? <h1>Hello, Ankush</h1> : null} */}
            {/* {!flag ? <h1>Hello, Ankush</h1> : null} */}
            {flag ? <h1>Hello, Ankush</h1> : null}
        </>
    )
}