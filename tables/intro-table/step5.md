In this step, we'll move our row/column definitions to an external file and add more stub data to make the next part of the lesson more interesting. This will also help keep our component file simple and readable.

## Task

1) Navigate to the `src` folder and open `src/data.js`{{open}}

2) Copy your row/column definitions into data.js and ensure they are exported by adding the `export` keyword.

<pre class="file" data-filename="src/data.js" data-target="replace">
export const columns = [
  { title: "First column" },
  { title: "Second column" },
  { title: "Third column" }
];
export const defaultRows = [
  {
    cells: [
      { title: "Row 1 column 1" },
      { title: "Row 1 column 2" },
      { title: "Row 1 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 2 column 1" },
      { title: "Row 2 column 2" },
      { title: "Row 2 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 3 column 1" },
      { title: "Row 3 column 2" },
      { title: "Row 3 column 3" }
    ]
  }
];
</pre>

2) Add three more same-type rows to your rows definition, and update the text within them to reflect which row they belong to.

<pre class="file" data-target="clipboard">
  {
    cells: [
      { title: "Row 4 column 1" },
      { title: "Row 4 column 2" },
      { title: "Row 4 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 5 column 1" },
      { title: "Row 5 column 2" },
      { title: "Row 5 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 6 column 1" },
      { title: "Row 6 column 2" },
      { title: "Row 6 column 3" }
    ]
  }
</pre>

<strong>Note: </strong> Don't forget to add a commas where necessary between row entries if you're copying and pasting from the example snippets!

3) Navigate back to the `src` folder and open `src/App.js`{{open}} and import your new row/column definitions. Place the import statement just below the last import at the top of the file.

<pre class="file" data-target="clipboard">
import { columns, defaultRows } from './data';
</pre>

4) Delete the rows and columns definitions you created earlier (roughly lines 6 - 32)

The code you are deleting should look like the following

<pre class="file">
const columns = [
  { title: "First column" },
  { title: "Second column" },
  { title: "Third column" }
];
const defaultRows = [
  {
    cells: [
      { title: "Row 1 column 1" },
      { title: "Row 1 column 2" },
      { title: "Row 1 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 2 column 1" },
      { title: "Row 2 column 2" },
      { title: "Row 2 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 3 column 1" },
      { title: "Row 3 column 2" },
      { title: "Row 3 column 3" }
    ]
  }
];
</pre>


<strong>Note: </strong> You may need to click the refresh button at the top right of the preview pane or wait for the environment to finish updating before you see the latest changes.

Your Table implementation should look somewhat like the following;

<pre class="file" data-target="clipboard">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
import { columns, defaultRows } from &#39;./data&#39;;
const App = () =&gt; {
  return (
    &lt;React.Fragment&gt;
      &lt;Table variant=&quot;compact&quot; caption=&quot;Patternfly React Table&quot; cells={columns} rows={defaultRows}&gt;
        &lt;TableHeader /&gt;
        &lt;TableBody /&gt;
      &lt;/Table&gt;
    &lt;/React.Fragment&gt;
  );
};
export default App;
</pre>

Your Table should render like the same as it did before, except with a few more rows;

<img src="intro-table/assets/step-5-complete.png" alt="Image of what table looks like at the end of step 5." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
