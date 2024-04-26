import { useState } from "react";
import './App.css'; // CSS file import


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      
      
      
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <h1 className="font-bold uppercase flex justify-center pt-3 text-2xl">bg-color changer</h1>
      <div className="second_div">


        <button className="btn_class" 
        onClick={()=>setColor('black')}>Black</button>
        
        <button className="btn_class  text-white rounded-sm" 
         onClick={()=>setColor('red')} 
         style={{backgroundColor: 'red'}}>Red</button>

        <button className="btn_class  text-white rounded-sm" 
         onClick={()=>setColor('green')}
        style={{backgroundColor: 'green'}}>Green</button>
        
        <button className="btn_class  text-white rounded-sm"
        onClick={()=>setColor('blue')} 
        style={{backgroundColor: 'blue'}}>Blue</button>

        <button className="btn_class  text-white rounded-sm"       
        onClick={()=>setColor('orange')}
        style={{backgroundColor: 'orange'}}>Orange</button>
  
      </div>
      </div>

    </>
  );
}

export default App;
