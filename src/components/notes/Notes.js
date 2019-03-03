import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => {
  const notesList = notes.map(({ body, title, id }) => {
    return (
      <li key={id}>
        <h4>{title}</h4>
        <p>{body}</p>
      </li>
    );
  });
  return (
    < >
      <h2>Notes</h2>
      <ul>{notesList}</ul>
    </>
  );
};

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
