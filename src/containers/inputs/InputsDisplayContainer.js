import { connect } from 'react-redux';
import InputsDisplay from '../../components/inputs/InputsDisplay';
import { getInput1, getInput2 } from '../../selectors/inputs';

// map redux state to component props
const mapStateToProps = state => ({
  input1: getInput1(state),
  input2: getInput2(state)
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(InputsDisplay);
