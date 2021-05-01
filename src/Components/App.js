import React from 'react';
import Navbar from './Navbar.jsx';
import MovieCard from "./MovieCard";
function App() {
  return (
    <div className="App">
      <div className="fluid-container">
        <Navbar />
        <MovieCard />
      </div>
    </div>
  );
}
export default App;
