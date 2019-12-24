import React, { Component } from 'react'
import MovieCard from './MovieCard'
import Hoc from './Hoc'


 class Movielist extends Component {
    render() {
        return (
            <div className="cards">
                {this.props.movies.map(el => <MovieCard infos={el}/>)}
            </div>
        )
    }
}

export default Hoc(Movielist)
