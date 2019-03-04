import React from 'react';
import PropTypes from 'prop-types';

const InputsDisplay = ({ input1, input2 }) => {
  return (
    <>
      <li>
        <h3>{input1}</h3>
      </li>
      <li>
        <h3>{input2}</h3>
      </li>
    </>
  );
};

InputsDisplay.propTypes = {
  input1: PropTypes.string,
  input2: PropTypes.string
};

export default InputsDisplay;
