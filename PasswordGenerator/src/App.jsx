import { useState, useCallback,useEffect,useRef} from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState("8");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null);
  const randomPasswordGeneration = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "`!@#$%^&*()_+=-:;<,>.{}[]";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length );
      pass+= str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPassToClip=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  ,[password])

  useEffect(()=>{
    randomPasswordGeneration()
  },
[length,charAllowed,numAllowed,randomPasswordGeneration]);

  return (
    <>
      <div className="text-center w-full my-8 bg-gray-800 max-w-md mx-auto shadow-md rounded-lg p-4">
        <h1 className="text-white text-2xl mb-4">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="w-full px-3 py-2 outline-none text-black bg-white"
          />
          <button 
          onClick={copyPassToClip}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy
          </button>
        </div>
        <div className="text-sm flex gap-x-2">
        <div className="flex items-center gap-x-1">
        <input 
        type="range"
        value={length}
        min={6}
        max={100}
        className="cursor-pointer"
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label className="text-white">length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numAllowed}
            id="numInput"
            onClick={()=>{
              setNumAllowed((prev)=>!prev)//true->false or false->true
            }}          
          />
          <label className="text-white" htmlFor="numInput">Numbers </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onClick={()=>{
              setCharAllowed((prev)=>!prev)
            }}          
          />
          <label className="text-white" htmlFor="charInput">Characters</label>

        </div>
        </div>
      </div>
    </>
  );
}

export default App;
