
1) <strong>Convert each <em>row</em> definition from a string array to an array of objects.</strong>

For each of the three row definitions, replace the string array with an object, and set the object's `cells` property to the string array.

It should look like this:

<pre class="file">
["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]
</pre>

becomes:

<pre class="file">
{
  cells: ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]
}
</pre>

Apply this transformation to all of the row definitions.

The rows definition for the table should eventually look like the code snippet below:
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

2) <strong>Convert each <em>row cell</em> definition from a string to an object representation.</strong>

For each array item in each row's `cells` array, replace the string value with an object whose `title` property is the row cell value.

It should look like this:

<pre class="file">
{
  cells: ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]
}
</pre>

becomes

<pre class="file">
{
  cells: [
    { title: "Row 1 column 1" },
    { title: "Row 1 column 2" },
    { title: "Row 1 column 3" }
  ]
}
</pre>

Apply this transformation to all of the row cell definitions.

<strong>Note: </strong> String and object definitions can be mixed for the table data.

The table should appear exactly as it did before:

<img src="table-intro/assets/step-4-complete.png" alt="Image of what table looks like at the end of step 4." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
