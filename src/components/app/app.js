import React, {useState} from "react";
import './app.css'

import AppHeader from "../app-header/app-header";
import AppTitle from "../app-title";
import Category from "../category/category";
import Quotes from "../quotes/quotes";

const App = () => {
    return (
        <div>
            <AppHeader/>
            <AppTitle/>
            <Category/>
            <Quotes/>
        </div>
    )
}

export default App;