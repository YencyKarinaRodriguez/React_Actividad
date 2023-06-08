import React, { useState } from "react";
import "../main.css"

const Main = ({ text }) => {
    const [showMain, setShowMain] = useState (false);

    const handleClick = () => {
        setShowMain(!showMain);
    };

    return (
        <main>
            <h1>Main</h1>
            <button onClick={handleClick}>Main</button>
            {showMain && <p className='main'>{text}</p>}
        </main>
    );
}

export default Main
