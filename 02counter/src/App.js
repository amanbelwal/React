import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  let [ counter , setCounter] = useState(5)
  const addValue = () =>{  
    counter = counter +1
    if(counter == 21)
      counter = counter - 1
    setCounter(counter) 
  }
  const removeValue = () =>{
    counter = counter - 1
    if(counter == -1)
      counter = counter + 1
    setCounter(counter) 
   console.log({counter})
  }
  //let counter = 5
  return (
    <>
    <h1>counter updation</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}>Sub Value</button>
    </>
  );
}

export default App;
