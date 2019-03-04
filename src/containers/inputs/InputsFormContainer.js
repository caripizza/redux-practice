import { connect } from 'react-redux';
import InputUpdatesForm from '../../components/inputs/InputUpdatesForm';
import { getInput1, getInput2 } from '../../selectors/inputs';
import { updateInput1, updateInput2 } from '../../actions/inputs';

const factoryMethod = {
  input1: updateInput1,
  input2: updateInput2
};

const mapStateToProps = state => ({
  input1: getInput1(state),
  input2: getInput2(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(
      factoryMethod[target.name](target.value)
    );

    // target.name is input1 or input2
    // const updateFn = factoryMethod[target.name];
    // const action = updateFn(target.value);
    // dispatch(action);

    // if(target.name === 'input1') {
    //   dispatch(updateInput1(target.value));
    // }

    // if(target.name === 'input2') {
    //   dispatch(updateInput2(target.value));
    // }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputUpdatesForm);
