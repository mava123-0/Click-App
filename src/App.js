import React, {useState} from "react";


function App() {
  function increase(){
    setCount(count+1)
  }
  const [count,setCount]=useState(0);
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </center>
      <footer>Made using ReactJS useState</footer>
    </div>
  );
}

export default App;
