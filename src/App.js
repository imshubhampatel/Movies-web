import React, { useReducer, useEffect, useState } from 'react';
import userData from "./userData"
import Item from "./Item";
import "./styles.css";


// these are my actions 
export const ACTIONS = {
  INCREAMENT: "increament",
  DICREAMENT: "dicreament",
  DELETE: "delete",
  LOCAL_STORAGE: "localStorage"

}


// this is reducer function 
function reducer(item, action) {
  switch (action.type) {
    // increament 
    case ACTIONS.INCREAMENT:
      console.log('inc', action.payload.id);
      return item;
    // dicreament 
    case ACTIONS.DICREAMENT:
      console.log('dicreament', action.payload.id);
      return item;
    // delete
    case ACTIONS.DELETE:
      console.log("delete", action.payload.id)
      return item.filter(item => item.id !== action.payload.id);
    // return last thing
    default:
      return item;
  }
}

function App() {

  const [item, dispatch] = useReducer(reducer, userData);
  const [items, setItems] = useState(item)

  // when the item updates it will called and passsed all the data from reducer
  useEffect(() => {

    setItems(item)
    // seeting up item on webpage look
  }, [item])



  useEffect(async () => {
    const itemsJSON = await localStorage.getItem("key");
    // taking data form localStorage
    if (itemsJSON != null) setItems(JSON.parse(itemsJSON))

  }, [])

  useEffect(() => {
    // storing data in localstorage 
    localStorage.setItem("key", JSON.stringify(items));
  }, [items])


  return (
    // this is out app is rendering 
    <div className="App">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            dispatch={dispatch}
          />
        )
      })}
    </div>
  );
}

export default App;