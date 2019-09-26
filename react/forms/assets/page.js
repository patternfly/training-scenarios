import React from "react";
import {
  Page,
  PageSection,
  PageSectionVariants
} from "@patternfly/react-core";

class AppPage extends React.Component {
  render() {
    const { children } = this.props;

    const pageId = "main-content-page-layout-simple-nav";

    return (
      <Page
        mainContainerId={pageId}
        className="myPageClass"
      >
        <PageSection variant={PageSectionVariants.light}>{children}</PageSection>
      </Page>
    );
  }
}

export default AppPage;
