import React from "react";
import {
  InputGroup,
  Button,
  ButtonVariant,
  TextInput
} from "@patternfly/react-core";
import { SearchIcon } from "@patternfly/react-icons";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ""
    };
  }

  onInputChange = value => {
    this.setState({ value });
  };

  onNameInput = event => {
    const { value } = this.state;

    if (value === "" || (event.key && event.key !== 'Enter')) {
      return;
    }

    this.setState((prevState) => {
      if (this.props.search){
        this.props.search(value);
      }
      return { value: "" };
    });
  };

  render() {
    const { id, ariaLabel } = this.props;
    const { value } = this.state;

    return (
      <InputGroup>
        <TextInput
          name={id}
          id={id}
          type="search"
          aria-label={ariaLabel}
          onChange={this.onInputChange}
          onKeyDown={this.onNameInput}
          value={value} />
        <Button
          variant={ButtonVariant.control}
          aria-label="search button for search input"
          onClick={this.onNameInput}>
          <SearchIcon />
        </Button>
      </InputGroup>
    );
  }
}

export default Input;