import React, {useState, useEffect} from "react";
import axios from "axios";
import './category-item.css';

const CategoryItem = ({onSetCategory}) => {
    const [categoryBtn, setCategoryBtn] = useState([]);
  
    
    const onCategory = (e) => {
        if(e.target.value === 'random') {
            axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                onSetCategory(res.data.value);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
                .then(res => {
                    onSetCategory(res.data.value);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then(res => {
                setCategoryBtn(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <ul>
            {
                categoryBtn.map(item => (<button onClick={onCategory} key={item} value={item}>{item}</button>))
            }
            <button onClick={onCategory} value="random">random</button>
        </ul>
    )
}

export default CategoryItem;