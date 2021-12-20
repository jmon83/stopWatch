import React, {useState, useEffect} from "react";

function App() {

 const [time, setTime] = useState(0)
 const [start, setStart] = useState(false)

 useEffect(() => {
   let interval = null

   if(start) {
     interval = setInterval(() => {
       setTime(prevTime => prevTime + 3)
     }, 1)
   } else {
     clearInterval(interval);
   }
   return() => clearInterval(interval)
  }, [start])

  return (
      <div className="flex items-center w-96 px-4 py-10 mt-10 justify-center bg-cover card bg-base-200">
          <div  className="text-2xl">
           
           <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}m</span>
           <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}s</span>
           <span> {("0" + Math.floor((time / 10) % 1000)).slice(-2)}ms</span>
           
          </div>
          <div className="flex">
          <button className = "btn btn-primary m-2" onClick = {() => setStart(true)}>Start</button>
          <button className = "btn btn-warning m-2" onClick={() => setStart(false)}>Stop</button>
          <button className = "btn btn-secondary m-2" onClick={() => {setTime(0); setStart(false);}}>Clear</button>
          </div>
      </div>
  );
}

export default App;
