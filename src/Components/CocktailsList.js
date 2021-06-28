import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Cocktails from './Cocktails';

const CocktailsList = () => {
    const [cocktail,setCocktail]=useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((res)=>setCocktail(res.data.drinks))
        .catch((err)=>console.log(err))
    }, [])
    return (
        <div>
            {
                cocktail.map((el)=>
                    <Cocktails key={el.idDrink} el={el}  />
                )
            }
        </div>
        
    )
}

export default CocktailsList
