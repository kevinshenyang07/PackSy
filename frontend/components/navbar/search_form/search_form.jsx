import React from 'react';
import { withRouter } from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };

    this.keywords = ['outdoors', 'luggage', 'backpack', 'jacket', 'cotton',
      'cushion', 'red', 'sunglasses', 'shoes', 'red', 'wallet', 'duffle',
      'stripe', 'eye', 'fish', 'long sleeve', 'christmas', 'shirt', 'boot',
      'kimono', 'shoes', 'pouch', 'poncho'];

    this.updateInput = this.updateInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateInput(searchText) {
    this.setState({ searchText });
  }

  handleSearch() {
    // if (this.state.searchText !== '') {
    const searchText = this.state.searchText;
    // this.props.fetchSearchedItems(this.state.searchText);
    // }
    this.setState({ searchText: ''});
    this.props.history.push(`/search/${encodeURI(searchText)}`);
  }

  render() {
    return (
      <AutoComplete
        floatingLabelText=""
        hintText="Search for items"
        searchText={this.state.searchText}
        filter={AutoComplete.fuzzyFilter}
        dataSource={this.keywords}
        maxSearchResults={5}
        onUpdateInput={this.updateInput}
        onNewRequest={this.handleSearch}
        openOnFocus={true}
        underlineFocusStyle={{borderColor: '#797979'}}
      />
    );
  }

}

export default withRouter(SearchForm);
