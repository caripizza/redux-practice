import { connect } from 'react-redux';
import AddNotes from '../components/notes/AddNotes';
import { addNote } from '../actions/notes';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onSubmit(note) {
    console.log('submitted', note);
    dispatch(addNote(note));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNotes);
