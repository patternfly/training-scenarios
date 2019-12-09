Toolbars consist of content rows of components. Most toolbars will only be a single row, but each row needs to be housed in a `DataToolbarContent` component.

1) **Navigate to the `src` folder and open** `src/App.js`{{open}}

2) **Set up the general structure of an empty toolbar and add the necessary imports**

Copy the following code into the `App.js` file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from &quot;react&quot;;
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
import DemoTable from &quot;./components/table&quot;;

class ToolbarDemoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;React.Fragment&gt;
        Toolbar Demo
      &lt;/React.Fragment&gt;
    );
  }
};

export default ToolbarDemoApp;
</pre>

3) **Wrap the `Toolbar Demo` text inside `React.Fragment` in a `DataToolbar` component**

The `DataToolbar` should include the property `id="tutorial-toolbar"`.

4) **Wrap the `Toolbar Demo` text inside `DataToolbar` in a `DataToolbarContent` component**

Each toolbar must contain one or more `DataToolbarContent` components as content rows.

Once completed, the code inside `<React.Fragment>` should appear as below.

<pre class="file">
&lt;DataToolbar id=&quot;tutorial-toolbar&quot;&gt;
  &lt;DataToolbarContent&gt;
    Toolbar Demo
  &lt;/DataToolbarContent&gt;
&lt;/DataToolbar&gt;
</pre>

Once the preview reloads, it should look like this:

<img src="toolbar-filter/assets/toolbar-content.png" alt="toolbar with data toolbar content" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
