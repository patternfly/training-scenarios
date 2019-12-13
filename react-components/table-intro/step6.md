In this step, move the row/column definitions to an external file and adds a few more rows of sample data to make the next part of the lesson more realistic.

1) <strong>Navigate to the `src` folder and open `src/data.js`.</strong>

2) <strong>Copy the below row/column definitions to `src/data.js`.</strong>

<pre class="file" data-target="clipboard">
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
  },
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
];
</pre>

3) <strong>Navigate back to the `src` folder and reopen `src/App.js`.</strong>

4) <strong>Replace the inline row/column definitions with a reference to the ones from `data.js`.</strong>

1) <strong> Import the new row/column definitions.</strong>

Place the import statement just below the last import at the top of the file.

<pre class="file">
import { columns, defaultRows } from './data';
</pre>

2) <strong>Delete the rows and columns definitions in `App.js`.</strong>

The table will now use the definitions imported from `data.js` instead. The code to delete looks like the following:

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

The table should render the same as it did before, except with a few more rows:

<img src="table-intro/assets/step-6-complete.png" alt="Image of what table looks like at the end of step 6." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
