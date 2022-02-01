import React, {useState} from "react";
import CategoryItem from "../category-item/category-item";
import './category.css';

const Category = () => {
    const [randomQuote, setQuote] = useState('')
    const onRandom = (quote) => {
        setQuote(quote);
        console.log(randomQuote);
    }
    return (
        <div className="btn-group">
            <CategoryItem onClick={onRandom}/>
        </div>
    )
}

export default Category;