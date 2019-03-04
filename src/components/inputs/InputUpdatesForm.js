import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ input1, input2, onChange }) => {
  return (
    <>
      <label>
        Input one:<br/>
        <input name="input1" value={input1} onChange={onChange} />
      </label>
      <br/>
      <br/>
      <label>Input two:<br/>
        <input name="input2" value={input2} onChange={onChange} />
      </label>
    </>
  );
};

InputForm.propTypes = {
  input1: PropTypes.string,
  input2: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputForm;
