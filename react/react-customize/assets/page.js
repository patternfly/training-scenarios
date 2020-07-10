import React from "react";
import {
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text
} from "@patternfly/react-core";
import AppHeader from "./header";

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
  }

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { activeItem } = this.state;
    const { children } = this.props;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const Sidebar = <PageSidebar nav={PageNav} />;
    const pageId = "main-content-page-layout-simple-nav";
    const PageSkipToContent = (
      <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>
    );

    return (
      <Page
        header={<AppHeader />}
        sidebar={Sidebar}
        isManagedSidebar
        skipToContent={PageSkipToContent}
        mainContainerId={pageId}
        className="myPageClass"
      >
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main Title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px. It should have
              leading of 24px because <br />
              of it’s relative line height of 1.5.
            </Text>
          </TextContent>
        </PageSection>
        <PageSection>{children}</PageSection>
      </Page>
    );
  }
}

export default AppPage;
