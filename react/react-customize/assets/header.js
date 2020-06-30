import React from 'react';
import {
  Brand,
  PageHeader,
} from '@patternfly/react-core';
import AppPageHeaderTools from './pageHeaderTools';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageHeader
        logo={<Brand src="https://pf4.patternfly.org/assets/images/pf-logo-small.svg" alt="Patternfly Logo" />}
        headerTools={<AppPageHeaderTools />}
        showNavToggle
      />
    );
  }
}

export default AppHeader;
