import React from "react";
import './quotes.css';
import image from './clipart1131480.png';

const Quotes = ({quote}) => {
    return (
        <div className="quote">
            <img src={image} className="image" alt="Chuck Norris"></img>
            <span className="quote-text">{quote}</span>
        </div>
    )
}

export default Quotes;