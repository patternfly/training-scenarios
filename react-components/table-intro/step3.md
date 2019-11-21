Now that you have the basic table structure and imports in place, let's express column and row data as objects. This will allow us to attach and adjust data about individual rows/cells/columns later on.

## Task

1) Locate the following code just below the last import statement `const columns = ["First column", "Second column", "Third column"];`.

2) For each of the column headers in the array, replace the string with an object and set the object’s title property to the string value you had previously.

For example: `"First column"` becomes `{ title: "First column" }`

The columns definition in your table, should look like the image below:

<pre class="file">
const columns = [
  { title: "First column" },
  { title: "Second column" },
  { title: "Third column" }
];
</pre>

Next we'll apply a similar type of transformation to convert each of your row definitions into object representations.

3) Locate the following code just below your columns definition `const defaultRows = [`. Notice that each row in your table is defined by a simple string array, for example `["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]`.

4) For each of these three row definitions, replace the entire string array with an object and set the object's `cells` property to the string array you had previously.

For example: `["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]` becomes

<pre class="file">
{
  cells: ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]
}
</pre>

The rows definition in your table should now look like the code snippet below:
<pre class="file">
const defaultRows = [
  {
    cells: ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]
  },
  {
    cells: ["Row 2 column 1", "Row 2 column 2", "Row 2 column 3"]
  },
  {
    cells: ["Row 3 column 1", "Row 3 column 2", "Row 3 column 3"]
  }
];
</pre>

5) For each item in each of your rows `cells` array, replace the string value with an object whose title property is the string you had previously.

So `"Row 1 column 1"` becomes `{ title: "Row 1 column 1" }`, and so on.

Your new column and row definitions should now look something like this.

<pre class="file" data-target="clipboard">
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

<strong>Note: </strong> You can mix string and object definitions for your table data.

The table should appear exactly as it did before:

<img src="table-intro/assets/step-3-complete.png" alt="Image of what table looks like at the end of step 3." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
