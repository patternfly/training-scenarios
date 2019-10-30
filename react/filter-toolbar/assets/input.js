import React from "react";
import {
    InputGroup,
    Button,
    ButtonVariant,
    TextInput,
} from "@patternfly/react-core";
import { SearchIcon } from '@patternfly/react-icons';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    onInputChange = (value) => {
        this.setState({value});
    };

    render() {
        const { id, ariaLabel, search } = this.props;
        const { value } = this.state;

        const searchClicked = () => {
            search(value);
        };

        return (
            <InputGroup>
                <TextInput name={id} id={id} type="search" aria-label={ariaLabel} onChange={this.onInputChange}/>
                <Button variant={ButtonVariant.control} aria-label="search button for search input" onClick={searchClicked}>
                    <SearchIcon />
                </Button>
            </InputGroup>
        );
    }
}

export default Input;