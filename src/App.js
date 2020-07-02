import React from 'react';
import './App.scss'
import Title from './components/player/Title'
import Scoreboard from './components/ScoreBoard/Scoreboard';



function App() {
  return (
    <div className="App">
     <Title />
     <main>
       <Scoreboard />
     </main>
    </div>
  );
}

export default App;
