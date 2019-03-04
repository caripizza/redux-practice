import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, greeting }) => {
  return (
    <div style={{
      border: '2px solid purple',
      textAlign: 'center',
      fontFamily: 'Courier',
      display: 'grid',
      backgroundImage: 'repeating-linear-gradient(orange, yellow, pink, orange, pink)'
    }}>
      <p>{greeting}</p>
      <p>{name}</p>
    </div>
  );
};

Display.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string
};

export default Display;
