import React from 'react';
import PropTypes from 'prop-types';

function AddNoteForm({ input1, input2, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Input one:<br/>
        <input name="input1" value={input1} onChange={onChange} />
      </label>
      <br/>
      <br/>
      <label>Input two:<br/>
        <input name="input2" value={input2} onChange={onChange} />
      </label>
      <button>Add</button>
    </form>
  );
}

AddNoteForm.propTypes = {
  input1: PropTypes.string.isRequired,
  input2: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default AddNoteForm;
