import { connect } from 'react-redux';
import { signup, signin,
         signout, clearErrors } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  signout: () => dispatch(signout()),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
