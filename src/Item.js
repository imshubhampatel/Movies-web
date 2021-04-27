import React from 'react';

export default function Item({ item, dispatch }) {
  const { title, price, image } = item;
  return (
    <div className="item-cart">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h2>{price}</h2>
      <button onClick={() => dispatch({ type: "increament", payload: { id: item.id } })}> +</button>
      <button onClick={() => dispatch({ type: "dicreament", payload: { id: item.id } })}>-</button>
      <button onClick={() => dispatch({ type: "delete", payload: { id: item.id } })}>X</button>
    </div>
  );
}
