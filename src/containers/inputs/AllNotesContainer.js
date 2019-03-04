import { connect } from 'react-redux';
import Notes from '../../components/inputs/Notes';
import { getNotes } from '../../selectors/notes';

const mapStateToProps = state => ({
  notes: getNotes(state)
});

const AllNotesContainer = connect(
  mapStateToProps
)(Notes);

export default AllNotesContainer;
