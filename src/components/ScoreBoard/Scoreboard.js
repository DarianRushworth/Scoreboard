import React, { useState } from 'react'
// .. 
import Player from '../player/Player'
import AddPlayerForm from '../player/AddPlayerForm'

function compare_score(player_a, player_b) {
    return player_b.score - player_a.score
}
function compare_name(player_a, player_b) {
    return player_a.name.localeCompare(player_b.name)
}


export default function Scoreboard() {
    const [players, set_players] = useState([
        { id: 1, name: "Violeta", score: 11 },
        { id: 2, name: "Eszter", score: 14 },
        { id: 3, name: "Jeroen v2", score: 4 },
        { id: 4, name: "Lisa", score: 42 },
      ]);

    const [sort_by, set_sort_by] = useState("score")
    
    const change_sorting = event => {
        console.log("new sort order:", event.target.value);
        set_sort_by(event.target.value);
    };
    
    const sortFunction = sort_by==="score"
        ? compare_score
        : compare_name
    const playersSorted = [...players].sort(sortFunction)

    const incrementScore = (id) => {
        const new_players_array = players.map(player => {
    
            // decide whether this player's score needs to be incremented
          if (player.id === id) {
            // and if so, create a new player object,
            return {
              // but first copying over the player object's data
              ...player,
              // and then overriding the score property to be incremented
              score: player.score + 1
            };
          } else {
            // else, just keep them
            return player;
          }
        });
        set_players(new_players_array)
    }
    
    const addPlayer = (name) => {
        const newPlayer = {
            name: name,
            score: 0,
            id: players.length + 1
        }
        const newPlayers = [...players, newPlayer]
        //const newPLayers = [...players].join(newPlayer)
        set_players(newPlayers)
    }


    return (
        <div className="Scoreboard">
            <h1>Scoreboard</h1>
            <p>
                Sort order:{" "}
                <select onChange={change_sorting}>
                    <option value="score">Sort by score</option>
                    <option value="name">Sort by name</option>
                </select>
            </p>
            {playersSorted.map(player => (
                <Player  key={player.id}
                name={player.name} 
                score={player.score} 
                id={player.id}
                incrementScore={incrementScore}
                />
            ))}
            <AddPlayerForm addPlayer={addPlayer}/>
        </div>
    )
}