import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(keyword) {

  }

  render() {
    const colors = ['Red','Orange', 'Yellow', 'Green',
      'Blue', 'Purple', 'Black', 'White'];

    return (
      <AutoComplete
        floatingLabelText=""
        hintText="Search for items"
        filter={AutoComplete.fuzzyFilter}
        dataSource={colors}
        maxSearchResults={5}
        onNewRequest={this.handleSearch}
        underlineFocusStyle={{borderColor: '#797979'}}
      />
    );
  }

}

export default SearchForm;
