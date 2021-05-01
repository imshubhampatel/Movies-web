import React from 'react';
import "../styles.css"

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="logo"><span>S</span>hu<span>b</span>ha<span>m</span></div>
        <ul className="items">
          <li><button className="btn btn-movies">Movies</button></li>
          <li><button className="btn btn-favourites">Favourites</button></li>
        </ul>
      </nav>
    </>
  );
}
