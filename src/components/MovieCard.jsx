import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <div className="MovieCardContainer">
        <div className="MovieCardBody">
          <img src={ imagePath } alt={ title } />
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline}</p>
        </div>
        <div className="Rating">
          <span>Rating: </span>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
