import React, {useState} from "react";
import './app.css'

import AppHeader from "../app-header/app-header";
import AppTitle from "../app-title";
import CategoryItem from "../category-item";
import Quotes from "../quotes/quotes";

const App = () => {
const [quote, setQuote] = useState([])
const onRandom = (quote) => {
    setQuote(quote);
}
return (
    <div>
        <AppHeader/>
        <AppTitle/>
        <div className="btn-group"><CategoryItem onClick={onRandom}/></div>
        <Quotes quote={quote}/>
    </div>
)
}

export default App;