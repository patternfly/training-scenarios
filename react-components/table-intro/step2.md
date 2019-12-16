Set up the general structure of the table and add the necessary imports.

Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

1) <strong>Navigate to the `src` folder and open `src/App.js`.</strong>

2) <strong>Copy the following code into the `src/App.js` file.</strong>

Replace all of the content in `App.js` with the code snippet below.

<pre class="file" data-filename="App.js" data-target="replace">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
const App = () =&gt; {
  return (
    &lt;React.Fragment&gt;
      &lt;Table caption=&quot;PatternFly React Table&quot; cells={[]} rows={[]}&gt;
        &lt;TableHeader /&gt;
        &lt;TableBody /&gt;
      &lt;/Table&gt;
    &lt;/React.Fragment&gt;
  );
};
export default App;
</pre>

3) <strong>Declare constants for table columns and rows.</strong>

Just below the last import statement, and above the line starting with `const App = ()`, add the following code to populate the table with data:

<pre class="file" data-target="clipboard">
const columns = ["First column", "Second column", "Third column"];
const defaultRows = [
  ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"],
  ["Row 2 column 1", "Row 2 column 2", "Row 2 column 3"],
  ["Row 3 column 1", "Row 3 column 2", "Row 3 column 3"]
];
</pre>

4) <strong>Set the `cells` and `rows` prop for the `<Table />` component.</strong>

Locate the `<Table />` component and locate the references to empty arrays (`cells={[]} rows={[]}`). Replace these empty arrays with the row/column definitions that were added in step 3.

<pre class="file">
cells={columns} rows={defaultRows}
</pre>

The table should now look like the image below:

<img src="table-intro/assets/step-2-complete.png" alt="Image of what table looks like at the end of step 2." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
