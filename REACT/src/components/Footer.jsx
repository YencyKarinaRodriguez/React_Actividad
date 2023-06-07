import React, { useState } from "react";
import "../footer.css"

const Footer = ({ text }) => {
    const [showFooter, setShowFooter] = useState (false);

    const handleClick = () => {
        setShowFooter(!showFooter);
    };

    return (
        <div>
            <h1>Footer</h1>
            <button onClick={handleClick}>Footer</button>
            {showFooter && <p className='footer'>{text}</p>}
        </div>
    );
}

export default Footer
