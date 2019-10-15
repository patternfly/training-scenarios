Let's create the basic table structure.

## Task

1) Navigate to the `src` folder and open `src/App.js`{{open}}

Next, we'll set up the general structure of an empty table and add the necessary imports.

2) Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
const App = () =&gt; {
  return (
    &lt;React.Fragment&gt;
      &lt;Table caption=&quot;Patternfly React Table&quot; cells={[]} rows={[]}&gt;
        &lt;TableHeader /&gt;
        &lt;TableBody /&gt;
      &lt;/Table&gt;
    &lt;/React.Fragment&gt;
  );
};
export default App;
</pre>

3) Now, declare two constants, outside of the React "App" component (below the last import statement at the top, above the line starting with `const App = () => {`), to represent a set of columns and rows.

<pre class="file" data-target="clipboard">
const columns = ["First column", "Second column", "Third column"];
const defaultRows = [
  ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"],
  ["Row 2 column 1", "Row 2 column 2", "Row 2 column 3"],
  ["Row 3 column 1", "Row 3 column 2", "Row 3 column 3"]
];
</pre>

4) Now, locate the line `<Table caption="Patternfly React Table" cells={[]} rows={[]}>` and replace the references to empty arrays (`cells={[]} rows={[]}`) with the row/column definitions you just created.

<pre class="file" data-target="clipboard">
cells={columns} rows={defaultRows}
</pre>

Your table should now look like;

<img src="intro-table/assets/step-2-complete.png" alt="Image of what table looks like at the end of step 2." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
