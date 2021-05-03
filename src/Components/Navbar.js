import React from 'react';
import "../styles.css"
import { setShowFavourite } from "../actions/index"

export default function Navbar(props) {
  const showResult = true
  const onChangeTab = (val) => {
    console.log(val);
    const { store } = props;
    store.dispatch(setShowFavourite(val))

  }
  const handleChange = (event) => {
    console.log(event.target.value);

  }
  const handleSearch = () => { }

  return (
    <>
      <nav className="nav">
        <div className="logo"><span>S</span>hu<span>b</span>ha<span>m</span></div>
        <div className="input-search">
          <input type="text" placeholder="Search here" onChange={(event) => handleChange(event)} />
          <input type="submit" value="search" onClick={handleSearch} />
        </div>
        {
          showResult &&
          <div className="search-container">
            <div className="movie-card">
              <div className="action-left">
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v" alt="Movie" />
              </div>
              <div className="action-right">
                <div className="item-top">
                  <h1>Tara</h1>
                  <p>lore ispusi this word famid silki a and nothing but a great oppertunity for eceryone</p>
                </div>
                <div className="item-bottom">
                  <h1>Rating :<span>9.4</span></h1>
                  < button className="btn-addmovies">Add to Movies</button>
                </div>
              </div>
            </div>
          </div>
        }

        <ul className="items">
          <li><button className="btn btn-movies" onClick={() => onChangeTab(false)}>Movies</button></li>
          <li><button className="btn btn-favourites" onClick={() => onChangeTab(true)}>Favourites</button></li>
        </ul>
      </nav>
    </>
  );
}
