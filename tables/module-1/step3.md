Now that you have the basic table structure and imports in place, let's express column and row data as objects. This will allow us to attach and adjust data about individual rows/cells/columns later on.

## Task

1) Locate the following code `const columns = [...]`

2) For each of the column headers in the array, replace the string with an object and set the object’s title property to the string value you had previously.

For example: `"First column"` becomes `{ title: "First column" }`

2) Now apply this same type of transformation to each of your row definitions.

You're ultimately replacing the string array with an array of objects, where the cell property of the object is the row array you had previously.

For example: `["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]` becomes

<pre class="file" data-target="clipboard">
{
  cells: ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]
}
</pre>

3) For each item in the cells array, replace the string value with an object whose title property is the cell data (a simple string in this case), just like you did in the previous two steps.

So `"Row 1 column 1"` becomes `{ title: "Row 1 column 1" }`

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

The table should appear exactly as it did before;

<img src="module-1/assets/step-3-complete.png" alt="Image of what table looks like at the end of step 3." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
