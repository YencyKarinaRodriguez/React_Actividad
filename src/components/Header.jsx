import React, { useState } from "react";
import "../header.css"

const Header = ({ text }) => {
    const [showHeader, setShowHeader] = useState (false);

    const handleClick = () => {
        setShowHeader(!showHeader);
    };

    return (
        <header>
            <h1>Header</h1>
            <button onClick={handleClick}>Header</button>
            {showHeader && <p className='header'>{text}</p>}
        </header>
    );
}

export default Header
