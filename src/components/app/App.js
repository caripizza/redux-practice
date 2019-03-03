import React from 'react';
import AllNotes from '../../containers/AllNotes';
import AddNoteForm from '../../containers/AddNoteForm';

const App = () => {
  return (
    < >
      <h1>Redux Practice</h1>
      <AddNoteForm />
      <AllNotes />
    </>
  );
};

export default App;
