import { connect } from 'react-redux';
import { signup, signin,
         signout, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  signedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? signin : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
