// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props.rating;
    return (
      <p>{ rating }</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
