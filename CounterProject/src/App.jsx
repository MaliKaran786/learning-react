import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter,setCounter]=useState(5);
  const increase=()=>{
    if(counter < 20)
    setCounter(counter+1)
  }
  const decrease=()=>{
    if(counter > 0){
    setCounter(counter-1)}
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increase}>Add Value</button>
      <br/>
      <button onClick={decrease}>Sub Value</button>
    </>
  )
}

export default App
