import React from 'react'
import {Link} from 'react-router-dom'

const Cocktails = ({el}) => {
    return (
        <div>
           <div className="card" style={{width: "10rem"}}>
            <Link to={`/cocktail/${el.idDrink}`}><img src={el.strDrinkThumb} className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                <h5 className="card-title">{el.strDrink}</h5>
                <p className="card-text">{el.dateModified}</p>
                </div>
    </div>
        </div>
    )
}

export default Cocktails
