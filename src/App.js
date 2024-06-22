
//App.js and delete all code from App.js and App.css
import React, { useState } from 'react';

import './App.css';

const App=()=> 
    {
    
const [diceNumber1, setDiceNumber1] = useState(6);
const [diceNumber2, setDiceNumber2] = useState(6);
const [diceNumber3, setDiceNumber3] = useState(6);
const [diceNumber4, setDiceNumber4] = useState(6);
const [diceNumber5, setDiceNumber5] = useState(6);
const [diceNumber6, setDiceNumber6] = useState(6);

//Generate  Random Number from 0 to 6.
//  return Math.floor(Math.random() * (max - min) + min);
const refreshDice =()=>
  {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber1(randomNumber1);
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber2(randomNumber2);
    const randomNumber3 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber3(randomNumber3);
    const randomNumber4 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber4(randomNumber4);
    const randomNumber5 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber5(randomNumber5);
    const randomNumber6 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber6(randomNumber6);
  }
    return(
      <div>
      <center>
        
        <img width={200} height={200} src={require(`./imgs/${diceNumber1}.jpg`)}></img>
        <img width={200} height={200} src={require(`./imgs/${diceNumber2}.jpg`)}></img>
        <img width={200} height={200} src={require(`./imgs/${diceNumber3}.jpg`)}></img>
        <br/> <br/> <br/> <br/>
        <img width={200} height={200} src={require(`./imgs/${diceNumber4}.jpg`)}></img>
        <img width={200} height={200} src={require(`./imgs/${diceNumber5}.jpg`)}></img>
        <img width={200} height={200} src={require(`./imgs/${diceNumber6}.jpg`)}></img>

        <br></br> <br/>
        <button onClick= {()=>refreshDice() } className='button'>ROLL</button>
      
      </center>
      </div>

    );
    
    }

export default App;
