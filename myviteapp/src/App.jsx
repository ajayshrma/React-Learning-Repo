import { useState } from "react";

function App() {

   let [counter, setCounter] = useState(15)

  //  let counter = 15;

    const addvalue = ()=>{
    console.log("added",counter);
    counter = counter+1;  
    setCounter(counter)
   }

  const removeValue = ()=> {
    counter = counter-1;
     setCounter(counter)
     console.log("removed", counter);
   }

  return (
  <>
  
  <h2>HELO VITE REACT</h2>
  <h2>Counter Value: {counter}</h2>
  <button onClick={addvalue}>Add value</button>
   <br />
  <button onClick={removeValue}>remove value</button>
  <p>Footer:{counter}</p>
  </>
  
  )
}
export default App
