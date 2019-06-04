import React, { Component } from 'react';
import Beer from './components/Beer';
import './App.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  state= {
    beers: [],
    likedBeers: []
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(beers => this.setState({beers:beers}));
  }

  likeBeer = (index) => {
    const likedBeer = this.state.beers[index];
    console.log(likedBeer)
    const newBeers = [...this.state.likedBeers, likedBeer];
    console.log(newBeers)
    this.setState({likedBeers:newBeers})
  }

  render() {

    return (
      <div className="App">
        <h1>My Favorite Beers</h1>
        <div className="beerList">
        {this.state.likedBeers.map((beer, index) => (
          <Beer
            key={index}
            index={index}
            name={beer.name}
            tagline={beer.tagline}
            image={beer.image_url}
            abv={beer.abv}
            like={this.likeBeer}
          />
        ))}
        </div>
       <h1>All Beers</h1>
       <div className="beerList">
       {this.state.beers.map((beer, index) => (
          <Beer
            key={index}
            index={index}
            name={beer.name}
            tagline={beer.tagline}
            image={beer.image_url}
            abv={beer.abv}
            like={this.likeBeer}
          />
        ))}
       </div>
      </div>
    );
  }
}

export default App;

