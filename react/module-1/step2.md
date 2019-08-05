A card is a flexible element for containing any kind of content. Cards are used on dashboards, in data displays, or for positioning content on a page.

In this exercise, we'll be creating a card with an image, action, header, body, and footer.

In PatternFly 4, separate components are used to demarcate the different regions of a card so it can be fully customized. For example, images are placed in CardHead, actions in CardActions, and the header in CardHeader.  We'll add a PatternFly card  - the image below is what we'll end up with when we are done.

<img src="module-1/assets/final-card.png" alt="Completed card component with header, icon, body, and footer links" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

## Task
Katacoda is setting up a new React application for you. You'll be ready to code once the server starts and you can see "Welcome to PatternFly" on the lower pane.

1) Navigate to the `src` folder and open `App.js`

2) Next, we'll set up the general structure of the card and the necessary import statements.

Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from 'react';
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import {
  Brand,
  Button,
  Card,
  CardActions,
  CardHead,
  CardHeader,
  CardBody,
  CardFooter,
  Split,
  SplitItem,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';
import {
  TimesIcon
} from '@patternfly/react-icons';

function App() {
  return (
    &lt;Card&gt;
      &lt;CardHead&gt;
        &lt;CardActions&gt;
        &lt;/CardActions&gt;
      &lt;/CardHead&gt;
      &lt;CardHeader&gt;
      &lt;/CardHeader&gt;
      &lt;CardBody&gt;
      &lt;/CardBody&gt;
      &lt;CardFooter&gt;
      &lt;/CardFooter&gt;
    &lt;/Card&gt;
  );
}

export default App;
</pre>

When the server reloads, you should see something like this:
<img src="module-1/assets/empty-card.png" alt="Empty card" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
