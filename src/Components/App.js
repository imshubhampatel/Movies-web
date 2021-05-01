import React from 'react';
import userData from "../UserData";
import Navbar from './Navbar';
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    //part 2 store is subscribing here 
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();

    })

    // part-1 store is dispatching
    store.dispatch({
      type: "ADD_MOVIES",
      movies: userData
    })
    console.log("state", this.props.store.getState());

  }


  render() {
    const movie = this.props.store.getState();
    return (
      <div className="App">
        <div className="fluid-container">
          <Navbar />
          <MovieCard movie={movie} />
        </div>
      </div>
    );
  }
}
export default App;
