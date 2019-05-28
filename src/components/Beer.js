import React from 'react';
import './css/Beer.css'

function Beers(props){
  return (
    <div className="beer">
      <img src={props.image} alt="beer"/>
      <h1>{props.name}</h1>
      <p>{props.tagline}</p>
      <p>ABV: {props.abv}</p>
      <button onClick={() => props.like(props.index)}>Like</button>
    </div>
  )
}

export default Beers;