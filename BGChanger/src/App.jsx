import { useState } from "react"


function App() {
 const[color,setColor]=useState("gray");
  return (
    <>
      <div className="w-screen h-screen duration-200"
      style={{backgroundColor : color}}
      ></div>
      <div className="fixed flex flex wrap inset-x-0 px-2 justify-center bottom-12">
        <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-2 py-2 rounded-xl">
        <button onClick={()=>setColor("red")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "red"}}
        >Red</button>
        <button onClick={()=>setColor("blue")} 
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "blue"}}
        >Blue</button>
        <button onClick={()=>setColor("green")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "green"}}
        >Green</button>
        <button onClick={()=>setColor("olive")} 
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "olive"}}
        >Olive</button>
        <button onClick={()=>setColor("orange")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "orange"}}
        >Orange</button>
        
        </div>
      </div>
    </>
  )
}

export default App
