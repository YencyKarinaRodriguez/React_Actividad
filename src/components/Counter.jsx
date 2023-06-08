import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIcrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1)
    };

    return (
        <div>
            <h1>Contador</h1>
            <p>El valor actual es: {count}</p>
            <button onClick={handleIcrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
        </div>
    );
};

export default Counter