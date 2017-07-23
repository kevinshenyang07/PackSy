import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import styles from '../item_index_styles';

class FilterLeft extends React.Component {
  constructor(props) {
    super(props);

    this.priceRange = ["Any Price", "Under $50", "$50 to $100",
      "$100 to $200", "Over $200"];

  }

  render() {

    // const categories = this.props.categories;
    const categories = ["Bags & Purses", "Shoes", "Accessories"];
    const checkBoxes = categories.map((c, i) => (
      <Checkbox key={`checkbox-${i}`} label={c}
        style={styles.checkbox}
        iconStyle={styles.checkboxIcon} />
    ));

    const radioBtns = this.priceRange.map((range, i) => (
      <RadioButton key={`radiobtn-${i}`} value={`${i}`} label={range}
        style={styles.radioBtn}
        iconStyle={styles.radioBtnIcon} />
    ));


    return (
      <Paper style={styles.filterLeft} zDepth={3}>

        <Toggle label="Featured Only" style={styles.toggle}  >
        </Toggle>

        <Divider/>

        <div>
          <Subheader>Select By Categories</Subheader>
          {checkBoxes}
        </div>

        <Divider style={{marginTop: 14}}/>

        <Subheader>Price Range</Subheader>
        <RadioButtonGroup name="priceRange" defaultSelected="0">
          {radioBtns}
        </RadioButtonGroup>

        <Divider style={{marginTop: 14}} />
      </Paper>
    );
  }

}

export default FilterLeft;
