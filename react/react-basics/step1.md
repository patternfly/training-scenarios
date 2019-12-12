A card is a flexible element for containing any type of content. Cards are used on dashboards, in data displays, or for positioning content on a page.

In PatternFly, separate components are used to demarcate the different regions of a card so it can be fully customized. For example, images are placed in `CardHead`, actions in `CardActions`, and the header in `CardHeader`.

In this exercise, create a card with an image, action, header, body, and footer.

Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

1) <strong>Navigate to the `src` folder and open `App.js`.</strong>

2) <strong>Set up the general structure of the card and the necessary import statements.</strong>

This step adds the structure of the card component. The next steps fill in the structure with content.

Copy the following code into the `App.js` file, replacing all of the content there:

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

Once the preview reloads, it should look like this:
<img src="react-basics/assets/empty-card.png" alt="Empty card" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
