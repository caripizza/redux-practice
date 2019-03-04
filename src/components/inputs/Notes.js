import React from 'react';
import PropTypes from 'prop-types';
import InputsDisplay from './InputsDisplay';

const Notes = ({ notes }) => {
  const listOfNotes = notes.map((note, i) => {
    return (
      <li key={i}>
        <InputsDisplay 
          input1={note.input1}
          input2={note.input2}
        />
      </li>
    );
  });

  return (
    <ul>
      {listOfNotes}
    </ul>
  );
};

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
