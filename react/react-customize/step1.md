In PatternFly, demos are used to show how PatternFly’s components and layouts can be put together to build more complex structures. They are made entirely from components and layouts.

In this exercise, use a page demo to create a new page for a web application.

Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

1) <strong>Navigate to the `src` folder and open `src/App.js`{{open}}</strong>

2) <strong>Set up the general structure of the demo and the necessary import statements.</strong>

Copy the following code into the `App.js` file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import "./app.css";
import {
  Brand,
  Button,
  Card,
  CardActions,
  CardHead,
  CardHeader,
  CardBody,
  CardFooter,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';
import {
  TimesIcon
} from '@patternfly/react-icons';
import AppPage from './components/page';

class PageLayoutSimpleNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;React.Fragment&gt;
        &lt;AppPage&gt;
        &lt;/AppPage&gt;
      &lt;/React.Fragment&gt;
    );
  }
}

export default PageLayoutSimpleNav;
</pre>

3) <strong>Add a gallery of cards.</strong>

The gallery is a PatternFly layout that applies a `minmax` width and a `gutter` between items. Here set the gutter to `md`.

Add the gallery inside of `<AppPage>`, it should look like this:

```
<Gallery gutter="md">
</Gallery>
```

4) <strong>Add multiple cards inside of the gallery.</strong>

For the purpose of this example, make every card the same. Each `card` should be wrapped in a `<GalleryItem`.

```
<GalleryItem>
  <Card>
    <CardBody>This is a card</CardBody>
  </Card>
</GalleryItem>
```

To add cards efficiently use `Array.apply` and `Array.map` to add nine cards. The result should look like this:

<pre class="file" data-target="clipboard">
{Array.apply(0, Array(9)).map((x, i) =&gt; (
  &lt;GalleryItem key={i}&gt;
    &lt;Card&gt;
      &lt;CardBody&gt;This is a card&lt;/CardBody&gt;
    &lt;/Card&gt;
  &lt;/GalleryItem&gt;
))}
</pre>

Once the preview reloads, it should look like this:
<img src="react-customize/assets/step1.png" alt="Page demo" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
