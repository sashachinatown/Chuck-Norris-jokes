import React, {useState, useEffect} from "react";
import axios from "axios";
import './category-item.css';

const CategoryItem = ({onClick}) => {
    const [category, setCategory] = useState([]);
    const [random, setRandom] = useState([]);
    
    const onRandom = () => {
        onClick(random.value);
    };

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then(res => {
                setCategory(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                setRandom(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })

    return (
        <ul>
            {
                category.map(item => (<button key={item}>{item}</button>))
            }
            <button onClick={onRandom}>random</button>
        </ul>
    )
}

export default CategoryItem;