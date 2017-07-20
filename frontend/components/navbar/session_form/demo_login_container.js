import { connect } from 'react-redux';
import { signin, clearErrors } from '../../../actions/session_actions';
import DemoLogin from './demo_login';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoLogin);
