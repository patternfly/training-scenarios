In PatternFly 4, demos are used to show how Patternfly’s components and layouts can be put together to build more complex structures.

They're made entirely from components and layouts.

In this exercise, we'll be using a page demo to create a new page for a web application.

The image below is what we'll end up with when we are done.

## Task
Katacoda is setting up a new React application for you. You'll be ready to code once the server starts and you can see "Welcome to PatternFly" on the lower pane.

1) Navigate to the `src` folder and open `App.js`

2) Next, we'll set up the general structure of the card and the necessary import statements.

Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from 'react';
import "@patternfly/react-core/dist/styles/base.css"
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardHead,
  CardHeader,
  CardActions,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  Split,
  SplitItem,
  TextContent,
  Text,
  TextVariants,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon, TimesIcon } from '@patternfly/react-icons';

class PageLayoutSimpleNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
  }

  onDropdownToggle = isDropdownOpen =&gt; {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event =&gt; {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen =&gt; {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event =&gt; {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result =&gt; {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      &lt;Nav onSelect={this.onNavSelect} aria-label="Nav"&gt;
        &lt;NavList variant={NavVariants.simple}&gt;
          &lt;NavItem itemId={0} isActive={activeItem === 0}&gt;
            System Panel
          &lt;/NavItem&gt;
          &lt;NavItem itemId={1} isActive={activeItem === 1}&gt;
            Policy
          &lt;/NavItem&gt;
          &lt;NavItem itemId={2} isActive={activeItem === 2}&gt;
            Authentication
          &lt;/NavItem&gt;
          &lt;NavItem itemId={3} isActive={activeItem === 3}&gt;
            Network Services
          &lt;/NavItem&gt;
          &lt;NavItem itemId={4} isActive={activeItem === 4}&gt;
            Server
          &lt;/NavItem&gt;
        &lt;/NavList&gt;
      &lt;/Nav&gt;
    );
    const kebabDropdownItems = [
      &lt;DropdownItem&gt;
        &lt;BellIcon /&gt; Notifications
      &lt;/DropdownItem&gt;,
      &lt;DropdownItem&gt;
        &lt;CogIcon /&gt; Settings
      &lt;/DropdownItem&gt;
    ];
    const userDropdownItems = [
      &lt;DropdownItem&gt;Link&lt;/DropdownItem&gt;,
      &lt;DropdownItem component="button"&gt;Action&lt;/DropdownItem&gt;,
      &lt;DropdownItem isDisabled&gt;Disabled Link&lt;/DropdownItem&gt;,
      &lt;DropdownItem isDisabled component="button"&gt;
        Disabled Action
      &lt;/DropdownItem&gt;,
      &lt;DropdownSeparator /&gt;,
      &lt;DropdownItem&gt;Separated Link&lt;/DropdownItem&gt;,
      &lt;DropdownItem component="button"&gt;Separated Action&lt;/DropdownItem&gt;
    ];
    const PageToolbar = (
      &lt;Toolbar&gt;
        &lt;ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}&gt;
          &lt;ToolbarItem&gt;
            &lt;Button id="simple-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}&gt;
              &lt;BellIcon /&gt;
            &lt;/Button&gt;
          &lt;/ToolbarItem&gt;
          &lt;ToolbarItem&gt;
            &lt;Button id="simple-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}&gt;
              &lt;CogIcon /&gt;
            &lt;/Button&gt;
          &lt;/ToolbarItem&gt;
        &lt;/ToolbarGroup&gt;
        &lt;ToolbarGroup&gt;
          &lt;ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}&gt;
            &lt;Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={&lt;KebabToggle onToggle={this.onKebabDropdownToggle} /&gt;}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            /&gt;
          &lt;/ToolbarItem&gt;
          &lt;ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}&gt;
            &lt;Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={&lt;DropdownToggle onToggle={this.onDropdownToggle}&gt;Kyle Baker&lt;/DropdownToggle&gt;}
              dropdownItems={userDropdownItems}
            /&gt;
          &lt;/ToolbarItem&gt;
        &lt;/ToolbarGroup&gt;
      &lt;/Toolbar&gt;
    );
    const Header = (
      &lt;PageHeader
        logo={&lt;Brand src="https://pf4.patternfly.org/assets/images/pf-logo-small.svg" alt="Patternfly Logo" /&gt;}
        toolbar={PageToolbar}
        showNavToggle
      /&gt;
    );
    const Sidebar = &lt;PageSidebar nav={PageNav} /&gt;;
    const pageId = 'main-content-page-layout-simple-nav';
    const PageSkipToContent = &lt;SkipToContent href={`#${pageId}`}&gt;Skip to Content&lt;/SkipToContent&gt;;

    return (
      &lt;React.Fragment&gt;
        &lt;Page
          header={Header}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
        &gt;
          &lt;PageSection variant={PageSectionVariants.light}&gt;
            &lt;TextContent&gt;
              &lt;Text component="h1"&gt;Main Title&lt;/Text&gt;
              &lt;Text component="p"&gt;
                Body text should be Overpass Regular at 16px. It should have leading of 24px because &lt;br /&gt;
                of it’s relative line height of 1.5.
              &lt;/Text&gt;
            &lt;/TextContent&gt;
          &lt;/PageSection&gt;
          &lt;PageSection&gt;
            &lt;Gallery gutter="md"&gt;
              {Array.apply(0, Array(9)).map((x, i) =&gt; (
                &lt;GalleryItem key={i}&gt;
                  &lt;Card&gt;
                    &lt;CardBody&gt;This is a card&lt;/CardBody&gt;
                  &lt;/Card&gt;
                &lt;/GalleryItem&gt;
              ))}
            &lt;/Gallery&gt;
          &lt;/PageSection&gt;
        &lt;/Page&gt;
      &lt;/React.Fragment&gt;
    );
  }
}

export default PageLayoutSimpleNav;
</pre>

When the server reloads, you should see something like this:

