import React from "react";
import { Select, SelectVariant, SelectOption } from "@patternfly/react-core";

class CheckboxSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    onSelect = (event, selection) => {
        this.props.onSelect(this.props.type, event, selection);
    };

    onToggle = isExpanded => {
        this.setState({ isExpanded });
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
                isExpanded={this.state.isExpanded}
                placeholderText={type}
            >
            {selectOptions}
            </Select>
        );
    }
}

export default CheckboxSelect;
