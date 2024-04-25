import { useState } from "react";

/// Assignment-1 with using useState() hook

function Assignment1() {
  const [counter, setCounter] = useState(4);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
   if (counter > 0  ) {
    setCounter(counter - 1);
   }
  };


  return (
    <>
      <h1>Assignment-1</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default Assignment1;

//doing without using useState

  // let counter = 10;

  // const addValue = () => {
  //   counter = counter + 1;
  //   console.log(counter);
  // };

  // const removeValue = () => {
  //   counter = counter - 1;
  //   console.log(counter);
  // };