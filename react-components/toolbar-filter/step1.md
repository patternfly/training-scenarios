Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

Toolbars consist of content rows of components. Most toolbars will only be a single row, but each row is required to be housed in a `ToolbarContent` component.

Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

1) <strong>Navigate to the `src` folder and open</strong> `src/App.js`{{open}}.

2) <strong>Set up the general structure of an empty toolbar and add the necessary imports.</strong>

Copy the following code into the `App.js` file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import {
  EditIcon,
  CloneIcon,
  SyncIcon,
  FilterIcon
} from &quot;@patternfly/react-icons&quot;;
import {
  Button,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarGroup,
  ToolbarToggleGroup,
  ToolbarFilter
} from &quot;@patternfly/react-core&quot;;
import Input from &quot;./components/input&quot;;
import CheckboxSelect from &quot;./components/checkboxSelect&quot;;
import Kebab from &quot;./components/kebab&quot;;
import DemoTable from &quot;./components/table&quot;;

class ToolbarDemoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;React.Fragment&gt;
        
      &lt;/React.Fragment&gt;
    );
  }
};

export default ToolbarDemoApp;
</pre>

3) <strong>Add a `Toolbar` component inside the `React.Fragment` and add the property `id="tutorial-toolbar"` to the `Toolbar`.</strong>

4) <strong>Add a `ToolbarContent` component inside the `Toolbar` component.</strong>

Each toolbar must contain one or more `ToolbarContent` components as content rows.

5) <strong>Add `Toolbar Demo` as text inside the `ToolbarContent` as a placeholder for future content.</strong> 

Once completed, the code inside `<React.Fragment>` should appear as below.

<pre class="file">
&lt;Toolbar id=&quot;tutorial-toolbar&quot;&gt;
  &lt;ToolbarContent&gt;
    Toolbar Demo
  &lt;/ToolbarContent&gt;
&lt;/Toolbar&gt;
</pre>

Once the preview reloads, it should look like this:

<img src="toolbar-filter/assets/toolbar-content.png" alt="toolbar with toolbar content" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
