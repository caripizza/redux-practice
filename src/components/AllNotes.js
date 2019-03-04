import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import AllNotesContainer from '../containers/inputs/AllNotesContainer';

function AllNotes() {
  return (
    < >
      {/* notes list (Notes), old redux way without connect: */}
      <div>
        <Link to={ROUTES.HOME.linkTo()}>Home</Link>
        <h2>All Notes</h2>
        <AllNotesContainer/>
      </div>
    </>
  );
}

export default AllNotes;
