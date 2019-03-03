import { connect } from 'react-redux';
import Notes from '../components/notes/Notes';
import { getNotes } from '../selectors/notes';

// grab stuff from redux and display in component
// if not func propType then it goes in here
const mapStateToProps = state => ({
  notes: getNotes(state)
});

// dispatch action functions into component
// if propType is func it goes in here
// const mapDispatchToProps = dispatch => ({
// (const factoryMethod goes here if using)
// onChange({ target }) {
//    if(target.name === 'title') {
//      updateSomething is action for onChange event
//      dispatch(updateSomething(target.value))
//    }
// })
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Notes);
