import React, {useState, useEffect} from "react";
import axios from "axios";
import './category-item.css';

function CategoryItem() {
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then(res => {
                setCategory(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })
    
    return (
        <div className="btn-group">
            <ul>
                {
                    category.map(item => (<button key={item}>{item}</button>))
                }
            </ul>
        </div>
    )
    // const res = await fetch(url),
    //       data = await res.json();
    // console.log({data});
    // return data;
}

// function CategoryItem() {
//     // const category = useState(getData('https://api.chucknorris.io/jokes/categories'));
//     // console.log(category);
        
// }

export default CategoryItem;