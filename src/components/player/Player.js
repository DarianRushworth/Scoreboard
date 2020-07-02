import React from 'react'


export default function Player(props){
  const onClickIncrement = () => {
    props.incrementScore(props.id)
    console.log(props.id)
  }  
  return (
    <ul>
      <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
        <p>  
        {props.name} 
        (Score:{props.score})
        <button onClick={onClickIncrement}>Increment</button>
        </p>
        </li>
    </ul>   
    )
}