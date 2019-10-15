It quickly becomes necessary to attach arbitrary data to whole rows/columns or even on an individual cell basis. With Patternfly Table, this couldn’t be easier. With our column/row definitions in object form, we can attach custom properties (with a standard `props` attribute) directly to the object literals that represent our data.

## Task

1) Locate your first column definition that looks like `{ title: "First column" }`

2) Add a new `props` property to the column definition and set its value to an empty object

<pre class="file">
props: {}
</pre>

3) Add a class to each cell in the first column by supplying the className property for this column's props definition, set className to whatever you want the CSS class to be.

<pre class="file" data-target="clipboard">
props: { className: "first-column-stuff" }
</pre>

Your first column definition should look something like;

<pre class="file">
{ title: "First column", props: { className: "first-column-stuff" } },
</pre>

4) Locate the cells array for the last row definition, it looks like the code snippet below.

<pre class="file">
{
  cells: [
    { title: "Row 3 column 1" },
    { title: "Row 3 column 2" },
    { title: "Row 3 column 3" }
  ]
}
</pre>

5) Add a `props` object like you did in step 2 for each of the cells in the last row.

<pre class="file">
{
  cells: [
    { title: "Row 3 column 1", props: { } },
    { title: "Row 3 column 2", props: { } },
    { title: "Row 3 column 3", props: { } }
  ]
}
</pre>

6) Set a `data-last-row-cell` attribute on each of those props objects to signify cells of the last row.

<pre class="file" data-target="clipboard">
props: { "data-last-row-cell": true }
</pre>

Your row and column definitions should look like the following;

<pre class="file">
const columns = [
  { title: "First column", props: { className: "first-column-stuff" } },
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
      { title: "Row 3 column 1", props: { "data-last-row-cell": true } },
      { title: "Row 3 column 2", props: { "data-last-row-cell": true } },
      { title: "Row 3 column 3", props: { "data-last-row-cell": true } }
    ]
  }
];
</pre>

Inspect your table using the browser developer tools and notice the className property you set in the first column definition is applied to all of the table cells in the first column (both `th` and `td` elements alike) and the data attributes are also applied in the DOM as you'd expect.

<img src="customize-table/assets/step-3-complete.png" alt="Image of what table looks like at the end of step 3." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

At this point, your table should still look exactly the same as it did at the end of the previous step.

<img src="customize-table/assets/step-2-complete.png" alt="Image of what table looks like at the end of step 2." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
