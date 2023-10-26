import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };
  
  return (
    <div className="App">
      {count}
      
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to zero</button>
    </div>
  );
}

export default App;
