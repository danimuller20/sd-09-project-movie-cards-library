import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </section>
    );
  }
}

export default MovieList;
