import React, { Component } from 'react'
import './App.css'
import Movielist from './component/Movielist';
import Header from './component/Header';
import AddModal from './component/AddModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [
        {
          title: 'Frozen 2',
          img: 'https://images-na.ssl-images-amazon.com/images/I/81sxpgZO6BL.jpg',
          count:2
        },
        {
          title: 'Jumanji',
          img: 'https://www.cinehorizons.net/sites/default/files/affiches/1357318196-jumanji-next-level.jpg',
          count:4
        },
        {
          title: 'Black christmas',
          img: 'http://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/60/02/49/18698178.jpg',
          count:3
        }
      ],
      newRating: 1,
      newtext:''
    }
  }
  giveText = t =>{
    this.setState({newtext: t})
  }
  addNewmovie=(movie)=>{
   this.setState({movies:this.state.movies.concat(movie)})
  }


  giveRate = x => {
    this.setState({newRating: x})
  }
  render() {
    return (
      <div className="navrate">
        <Header rate={this.state.newRating} giveNewRate={rate => this.giveRate(rate)}  title={this.state.newtext} giveNewtext={ title=>this.giveText(title)}/>
        <AddModal addMovie={movie=>this.addNewmovie(movie)}/>
        <Movielist movies={this.state.movies.filter(el => el.count >= this.state.newRating && el.title.toUpperCase().includes(this.state.newtext.toUpperCase().trim()))}/>      </div>
    )
  }
}

export default App
