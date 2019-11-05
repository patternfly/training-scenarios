import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle
} from "@patternfly/react-core";

class Kebab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  onToggle = isExpanded => {
    this.setState({ isExpanded });
  };

  render() {

    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];

    return (
      <Dropdown
        toggle={<KebabToggle onToggle={this.onToggle} />}
        isOpen={this.state.isExpanded}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
}

export default Kebab;