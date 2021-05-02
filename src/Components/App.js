import React from 'react';
import Navbar from './Navbar';
import { addMovies } from '../actions/index'
import MovieCard from "./MovieCard";
import userData from "../UserData";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated')
      this.forceUpdate();

    })
    store.dispatch(addMovies(userData))
    console.log("didmount called", this.props.store.getState());
    const { list } = this.props.store.getState();
  }
  render() {
    const { store } = this.props;
    return (
      <div className="App" >
        <div className="fluid-container">
          <Navbar />
          <MovieCard store={store} />
        </div>
      </div>
    );
  }

}

export default App;
