import { connect } from 'react-redux';
import Inputs from '../../components/inputs/Inputs';
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
)(Inputs);
