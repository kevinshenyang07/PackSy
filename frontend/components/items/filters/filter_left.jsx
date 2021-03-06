import React from 'react';
import { Link } from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import styles from '../item_page_styles';

class FilterLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.filters;

    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.createHandleCheck = this.createHandleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    this.props.fetchItems().then(() => this.setState(this.props.filters));
  }

  handleToggle(e, toBeToggled) {
    this.setState({featuredOnly: toBeToggled},
      () => this.props.receiveFilters(this.state)
    );
  }

  createHandleCheck(category) {
    return (e, toBeChecked) =>  {
      let categories = [].concat(this.state.categories);
      if (toBeChecked) { categories.push(category); }
      else { categories = categories.filter(c => c !== category); }
      this.setState({ categories },
        () => this.props.receiveFilters(this.state)
      );
    };
  }

  handleChange(e, val) {
    this.setState({priceRange: val},
      () => this.props.receiveFilters(this.state)
    );
  }

  render() {
    const checkBoxes = this.props.categories.map((c, i) => (
      <Checkbox key={`checkbox-${i}`} label={c}
        defaultChecked={true}
        onCheck={this.createHandleCheck(c).bind(this)}
        style={styles.checkbox}
        iconStyle={styles.checkboxIcon} />
    ));

    const radioBtns = this.props.priceRanges.map((range, i) => (
      <RadioButton key={`radiobtn-${i}`} value={range} label={range}
        style={styles.radioBtn}
        iconStyle={styles.radioBtnIcon} />
    ));


    return (
      <Paper style={styles.filterLeft} zDepth={3}>

        <Link to="/items" onClick={this.handleClick}
          className="all-items">
          All Items
        </Link>

        <Divider/>

        <Toggle label="Featured Only" style={styles.toggle}
          defaultToggled={false}
          onToggle={this.handleToggle} />

        <Divider/>

        <div>
          <Subheader>Select By Categories</Subheader>
          {checkBoxes}
        </div>

        <Divider style={{marginTop: 14}}/>

        <Subheader>Price Range</Subheader>
        <RadioButtonGroup name="priceRanges"
          defaultSelected={this.state.priceRange}
          onChange={this.handleChange}>
          {radioBtns}
        </RadioButtonGroup>

        <Divider style={{marginTop: 14}} />

      </Paper>
    );
  }

}

export default FilterLeft;
