import React from 'react'
import Rating from './Rating'

const MovieCard = props => {
    return (
        <div className="film-card shadow-lg p-3 mb-5 bg-white rounded card">    
            <Rating rate={props.infos.count} rateIt={() => {}}/>    
            <img className="custom-image" src={props.infos.img} alt=''/>
            <hr/> 
            <div className="custom-card">
                <h2>{props.infos.title}</h2>
            </div>
        </div>
    )
}

export default MovieCard
