import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
// import InputsDisplayContainer from '../containers/inputs/InputsDisplayContainer';
// import InputsFormContainer from '../containers/inputs/InputsFormContainer';
import NotesContainer from '../containers/inputs/NotesContainer';
// import AllNotesContainer from '../containers/inputs/AllNotesContainer';

function App() {
  return (
    <>
      <div>
        <Link to={ROUTES.ALL_NOTES.linkTo()}>All Notes</Link>
        <br/>
        <br/>
      </div>
      {/* live input updates via headings below: */}
      {/* <InputsFormContainer /> */}
      {/* <InputsDisplayContainer /> */}
      {/* OR */}
      <hr/>
      {/* form submit input values to list below: */}
      <NotesContainer />
      <hr/>
      {/* notes list (Notes), old redux way without connect: */}
      {/* <AllNotesContainer/> */}
    </>
  );
}

export default App;
