import React, { useState } from 'react';
import './App.css';
import {evaluate} from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = evaluate(input)
        setInput(result.toString());
      } catch (error) {
        setInput('Chadhuvukondi firstu');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
    <h1>Simple Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="keys">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>x</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('00')}>00</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button className='specBtn' onClick={() => handleClick('C')}>Clear</button>
          <button  className='specBtn' onClick={() => handleClick('=')}>Solve</button>
         
        </div>
      </div>
    </div>
  );
}

export default App;