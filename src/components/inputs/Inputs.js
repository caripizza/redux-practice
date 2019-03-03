import React from 'react';
import PropTypes from 'prop-types';

const Inputs = ({ input1, input2 }) => {
  return (
    <>
      <h2>Input1 result: {input1}</h2>
      {input2 && <h2>Input2 result: {input2}</h2>}
    </>
  );
};

Inputs.propTypes = {
  input1: PropTypes.string.isRequired,
  input2: PropTypes.string
};

export default Inputs;
