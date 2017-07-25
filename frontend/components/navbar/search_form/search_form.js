import React from 'react';
import { withRouter } from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };

    this.keywords = ['Outdoors', 'Luggage', 'Cotton', 'Shirt', 'Wallet',
      'Backpack', 'Cushion', 'Red', 'Sunglasses', 'Shoes', 'Red',
      'Stripe', 'Eye', 'Fish', 'Long Sleeve', ''];

    this.updateInput = this.updateInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateInput(searchText) {
    this.setState({ searchText });
  }

  handleSearch(keyword) {
    if (this.state.searchText !== '') {
      this.props.fetchSearchedItems(this.state.searchText);
    }
    this.props.history.push('/items');
  }

  render() {
    return (
      <AutoComplete
        floatingLabelText=""
        hintText="Seach for items"
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
