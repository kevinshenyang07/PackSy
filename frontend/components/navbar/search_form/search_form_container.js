import { connect } from 'react-redux';
import SearchForm from './search_form';

const mapStateToProps = ({items}) => ({
  keywords: items.keywords,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
