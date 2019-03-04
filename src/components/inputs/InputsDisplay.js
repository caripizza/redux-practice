import React from 'react';
import PropTypes from 'prop-types';

const InputsDisplay = ({ input1, input2 }) => {
  return (
    <>
      <h2>{input1}</h2>
      <h2>{input2}</h2>
    </>
  );
};

InputsDisplay.propTypes = {
  input1: PropTypes.string,
  input2: PropTypes.string
};

export default InputsDisplay;
