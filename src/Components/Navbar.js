import React from 'react';
import "../styles.css"

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="logo"><span>S</span>hu<span>b</span>ha<span>m</span></div>
        <div className="input-search">
          <input type="text" name="submit" placeholder="Search here"/>
          <input type="submit" name="submit"value="search"/>
        </div>
        <ul className="items">
          <li><button className="btn btn-movies">Movies</button></li>
          <li><button className="btn btn-favourites">Favourites</button></li>
        </ul>
      </nav>
    </>
  );
}
