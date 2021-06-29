import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Cocktails from './Cocktails';

const CocktailsList = () => {
    const [cocktail,setCocktail]=useState([]);
    const [search,setSearch]=useState("");
const handleChange=(e)=>{
    e.preventDefault();
    setSearch(e.target.value)
}

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res)=>setCocktail(res.data.drinks))
        .catch((err)=>console.log(err))
    }, [search])
    return (
        <div>
            <div>
                <form>
                    <input type='text' placeholder='Search...' onChange={handleChange} value={search} />
                    <button>Search</button>
                </form>
            </div>
            {
                cocktail.map((el)=>
                    <Cocktails key={el.idDrink} el={el}  />
                )
            }
        </div>
        
    )
}

export default CocktailsList
