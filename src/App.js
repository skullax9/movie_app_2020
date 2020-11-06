import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);
    this.setState({isLoading: false});
    this.setState({movies, isLoading: false});
    console.log(this.state.movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading,movies } = this.state;
    return (
      <div>
        <h1>{isLoading ? 'Loading...' : movies.map()}</h1>
      </div>
    );
  }
}

export default App;

