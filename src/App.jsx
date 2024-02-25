import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0);
  const changeCounter=()=>{
    setCount(count+1);
    console.log(count)
};
return (
  <>
  <button onClick={changeCounter}>Malak {count}</button>
  </>
)
 
}

export default App
