import React, {useState} from "react";
import './app.css'

import AppHeader from "../app-header/app-header";
import AppTitle from "../app-title";
import CategoryItem from "../category-item";
import Quotes from "../quotes/quotes";

const App = () => {
const [quote, setQuote] = useState([]);
const onCategory = (quote) => {
    setQuote(quote);
}
return (
    <div>
        <AppHeader/>
        <AppTitle/>
        <div className="btn-group"><CategoryItem onSetCategory={onCategory}/></div>
        <Quotes quote={quote}/>
    </div>
)
}

export default App;