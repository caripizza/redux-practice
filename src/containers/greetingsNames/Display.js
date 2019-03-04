import { connect } from 'react-redux';
import { getName } from '../../selectors/name';
import { getGreeting } from '../../selectors/greeting';
import Display from '../../components/greetingsNames/Display';

const mapStateToProps = state => ({
  name: getName(state),
  greeting: getGreeting(state),
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Display);
