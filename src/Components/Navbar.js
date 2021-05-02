import React from 'react';
import "../styles.css"
import { setShowFavourite } from "../actions/index"

export default function Navbar(props) {
  const onChangeTab = (val) => {
    console.log(val);
    const { store } = props;
    store.dispatch(setShowFavourite(val))

  }
  return (
    <>
      <nav className="nav">
        <div className="logo"><span>S</span>hu<span>b</span>ha<span>m</span></div>
        <div className="input-search">
          <input type="text" name="submit" placeholder="Search here" />
          <input type="submit" name="submit" value="search" />
        </div>
        <ul className="items">
          <li><button className="btn btn-movies" onClick={() => onChangeTab(false)}>Movies</button></li>
          <li><button className="btn btn-favourites" onClick={() => onChangeTab(true)}>Favourites</button></li>
        </ul>
      </nav>
    </>
  );
}
