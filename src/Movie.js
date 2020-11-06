import React from 'react';
import PropTypes from 'prop-types';

function Movie({id,year,title,summary,poster}) {
    return <h1>title</h1>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summmary: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired,
};

export default Movie;