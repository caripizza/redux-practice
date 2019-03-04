import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateInput1, updateInput2 } from '../../actions/inputs';
import { addNote } from '../../actions/notes';
// import { getInput1, getInput2 } from '../../selectors/inputs';
import { getNotes } from '../../selectors/notes';
import { getNoteCreateInput1, getNoteCreateInput2 } from '../../selectors/noteCreate';
import Notes from '../../components/inputs/Notes';
import AddNoteForm from '../../components/inputs/AddNoteForm';

const NotesContainer = ({ input1, input2, notes, onChange, onSubmit }) => {
  return (
    <>
      <AddNoteForm
        input1={input1}
        input2={input2}
        onChange={onChange}
        onSubmit={onSubmit.bind(null, input1, input2)} />
      <Notes notes={notes} />
    </>
  );
};

NotesContainer.propTypes = {
  input1: PropTypes.string,
  input2: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  notes: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  input1: getNoteCreateInput1(state),
  input2: getNoteCreateInput2(state),
  notes: getNotes(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      input1: updateInput1,
      input2: updateInput2
    };

    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(input1, input2, event) {
    event.preventDefault();
    dispatch(addNote({ input1, input2 }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesContainer);
