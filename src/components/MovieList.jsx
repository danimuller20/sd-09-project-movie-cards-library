// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(movie => (<MovieCard key={ movie.title } 
          movie={ movie } />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movie: [],
};

export default MovieList;
