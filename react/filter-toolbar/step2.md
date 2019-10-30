At its most basic, Toolbars consist of content rows of components. Most toolbars will only be a single row, but each row needs to be housed in a `DataToolbarContent` component.

## Task
1) Navigate to the `src` folder and open `src/App.js`{{open}}

Next, we'll set up the general structure of an empty toolbar and add the necessary imports.

2) Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from &quot;react&quot;;
import ReactDOM from &quot;react-dom&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Button } from &quot;@patternfly/react-core&quot;;
import {
  EditIcon,
  CloneIcon,
  SyncIcon,
  FilterIcon
} from &quot;@patternfly/react-icons&quot;;
import {
  DataToolbar,
  DataToolbarContent,
  DataToolbarItem,
  DataToolbarGroup,
  DataToolbarToggleGroup,
  DataToolbarFilter
} from &quot;@patternfly/react-core/dist/esm/experimental&quot;;
import Input from &quot;./components/input&quot;;
import CheckboxSelect from &quot;./components/checkboxSelect&quot;;
import Kebab from &quot;./components/kebab&quot;;
import AppTable from &quot;./components/table&quot;;

class ToolbarDemoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;React.Fragment&gt;
        &lt;DataToolbar id=&quot;tutorial-toolbar&quot;&gt;
          Toolbar Demo
        &lt;/DataToolbar&gt;
      &lt;/React.Fragment&gt;
    );
  }
};

export default ToolbarDemoApp;
</pre>

3) Each toolbar contains one or more content rows. Copy the following snippet into the `DataToolbar`.

<pre class="file" data-target="clipboard">
  &lt;DataToolbarContent&gt;Toolbar&lt;/DataToolbarContent&gt;
</pre>
