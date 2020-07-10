import React from 'react';
import {
  Button,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem
} from '@patternfly/react-core';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';

class AppPageHeaderTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen } = this.state;

    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon/> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon/> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator/>,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    return (
      <PageHeaderTools>
        <PageHeaderToolsGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <PageHeaderToolsItem>
            <Button id="simple-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon/>
            </Button>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button id="simple-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon/>
            </Button>
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <PageHeaderToolsGroup>
          <PageHeaderToolsItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle}/>}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </PageHeaderToolsItem>
          <PageHeaderToolsItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>User</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
      </PageHeaderTools>
    )
  }
}

export default AppPageHeaderTools;
