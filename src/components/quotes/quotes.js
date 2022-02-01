import React from "react";
import './quotes.css';
import image from './clipart1131480.png';

const Quotes = () => {
    return (
        <div className="quote">
            <img src={image} className="image" alt="Chuck Norris"></img>
            <span className="quote-text">The only thing Chuck Norris says on a job interview: “Hi, I’m Chuck Norris and I start tomorrow. Any questions?”</span>
        </div>
    )
}

export default Quotes;