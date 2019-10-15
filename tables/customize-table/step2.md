Create the basic table structure.

## Task

1) Navigate to the `src` folder and open `src/App.js`{{open}}

Next, we'll set up the general structure of an empty table and add the necessary imports.

2) Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
const columns = [
  { title: &quot;First column&quot; },
  { title: &quot;Second column&quot; },
  { title: &quot;Third column&quot; }
];
const defaultRows = [
  {
    cells: [
      { title: &quot;Row 1 column 1&quot; },
      { title: &quot;Row 1 column 2&quot; },
      { title: &quot;Row 1 column 3&quot; }
    ]
  },
  {
    cells: [
      { title: &quot;Row 2 column 1&quot; },
      { title: &quot;Row 2 column 2&quot; },
      { title: &quot;Row 2 column 3&quot; }
    ]
  },
  {
    cells: [
      { title: &quot;Row 3 column 1&quot; },
      { title: &quot;Row 3 column 2&quot; },
      { title: &quot;Row 3 column 3&quot; }
    ]
  }
];
const App = () =&gt; {
  return (
    &lt;Table caption=&quot;Customized Table&quot; cells={columns} rows={defaultRows}&gt;
      &lt;TableHeader /&gt;
      &lt;TableBody /&gt;
    &lt;/Table&gt;
  );
};
export default App;
</pre>

At this point, your table should look like the following;

<img src="customize-table/assets/step-2-complete.png" alt="Image of what table looks like at the end of step 2." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
