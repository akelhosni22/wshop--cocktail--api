import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'

const Details = () => {
    const [drink,setDrink]=useState([]);
    const {id}=useParams();
    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=> setDrink(res.data.drinks[0]))
        .catch((err)=>console.log(err))
    }, [])

    return (
        <div>
            <div>
                <img src={drink.strDrinkThumb} alt="..."/>
                <h3>Name: {drink.strDrink}</h3>
                    <div>
                        <h4>Ingredient 1:</h4>
                        <h4>Ingredient 2:</h4>
                        <h4>Ingredient 3:</h4>
                    </div>
                <div>
                    <h5> {drink.strIngredient1}</h5>
                    <h5> {drink.strIngredient2}</h5>
                    <h5> {drink.strIngredient3}</h5>
                </div>
            </div>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    )
}

export default Details
