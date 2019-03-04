import { connect } from 'react-redux';
import { getName } from '../../selectors/name';
import { getGreeting } from '../../selectors/greeting';
import { changeName } from '../../actions/name';
import { changeGreeting } from '../../actions/greeting';
import Controls from '../../components/greetingsNames/Controls';

const mapStateToProps = state => ({
  name: getName(state),
  greeting: getGreeting(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    if(target.name === 'name') {
      dispatch(changeName(target.value));
    }
    if(target.name === 'greeting') {
      dispatch(changeGreeting(target.value));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
