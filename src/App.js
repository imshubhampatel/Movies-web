import React, { useState } from 'react';
import "./styles.css"

function App() {

  const [count, setCount] = useState(0);

  function increaseHandler() {
    setCount(count + 1)
  }
  function dicreaseHandler() {
    if (count === 0) {
      return;
    }
    setCount(count - 1)
  }



  return (
    <div className="App">
      <h1>{count}</h1>
      <img onClick={increaseHandler} src="https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png" alt="increase" />
      <img onClick={dicreaseHandler} src="https://cdn2.iconfinder.com/data/icons/pinpoint-action/48/remove-256.png" alt="dicrease" />
    </div>
  );
}

export default App;
