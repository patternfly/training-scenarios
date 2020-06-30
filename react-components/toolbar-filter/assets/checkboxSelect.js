import React from "react";
import { Select, SelectVariant, SelectOption } from "@patternfly/react-core";

class CheckboxSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onSelect = (event, selection) => {
    this.props.onSelect(this.props.type, event, selection);
  };

  onToggle = isOpen => {
    this.setState({ isOpen });
    console.log("what");
  };

  render() {
    const { type, selections, options } = this.props;

    const selectOptions = Array.from(options, option => (
      <SelectOption value={option} key={option}/>
    ));

    return (
      <Select
        variant={SelectVariant.checkbox}
        aria-label={type}
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        selections={selections}
        isOpen={this.state.isOpen}
        placeholderText={type}
      >
        {selectOptions}
      </Select>
    );
  }
}

export default CheckboxSelect;
