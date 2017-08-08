import { connect } from 'react-redux';

import { signin } from '../../actions/session_actions';
import { showModal } from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = ({ session }) => ({
  hasCurrentUser: Boolean(session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  showModal: () => dispatch(showModal("DEMO"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
