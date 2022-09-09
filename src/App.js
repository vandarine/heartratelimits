import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [result, setResult] = useState('');

  function calculate (){
    const upper = (220 - age) * 0.85;
    const lower = (220 - age) * 0.65;
    setResult(lower + "-" + upper)
  }

  return (
    <div>
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age </label> <br />
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits </label> <br />
          <input type="string" value={result} />
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;