import React, { useReducer } from 'react';
import "./styles.css"

const ACTIONS = {
  INCREAMENT: "increament",
  DICREAMENT: "dicreament"
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREAMENT:
      return { count: state.count + 1 }
    case ACTIONS.DICREAMENT:
      return { count: state.count - 1 }
    default:
      return state;
  }
}

function App() {
  const [state, disptach] = useReducer(reducer, { count: 0 })


  function increaseHandler() {
    disptach({ type: ACTIONS.INCREAMENT })
  }

  function dicreaseHandler() {
    disptach({ type: ACTIONS.DICREAMENT })
    console.log('Decreasement');

  }

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <img onClick={increaseHandler} src="https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png" alt="increase" />
      <img onClick={dicreaseHandler} src="https://cdn2.iconfinder.com/data/icons/pinpoint-action/48/remove-256.png" alt="dicrease" />
    </div>
  );
}

export default App;
