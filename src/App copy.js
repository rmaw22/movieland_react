import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) => {
  return (
    <> 
          <h1>
            Name : {props.name}
          </h1>
          <p>
            Umurnya : {props.age}
          </p>
    </>
  )
}
function App() {
 const [counter, setCounter] = useState(0);

 useEffect( () => {
  setCounter(100)
 }, [counter])
  return (
    <div className="App">
      <>
      <h1>Hello, Milan !</h1>
      <Person name='milan a w' age={23}/>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)} >-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      </>
    </div>
  );
}

export default App;
