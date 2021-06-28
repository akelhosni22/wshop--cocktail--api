import React from 'react'

const Details = ({match,history}) => {
    return (
        <div>
            <h1>Challenge!!!!</h1>
            <button onClick={history.goBack} >Go Back</button>
        </div>
    )
}

export default Details
