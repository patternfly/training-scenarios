
1) <strong>Convert each <em>row</em> definition from a string array to an array of `IRow` objects.</strong>

For each of the three row definitions, replace the string array with an object, and set the object's `cells` property to the string array.

The three row definitions look like this:

<pre class="file">
["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"]
</pre>

After replacing the string array with an object, the code should look like this:

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

For each array item in each row's `cells` array, replace the string value with an object that has a `title` property equal to the row cell value.

The array items currently look like this:

<pre class="file">
"Row 1 column 1", "Row 1 column 2", "Row 1 column 3"
</pre>

After replacing the string array items with objects that have a title property equal to the row cell value, the code should look like this:

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

The table should visually appear exactly as it did before:

<img src="table-intro/assets/step-4-complete.png" alt="Image of what table looks like at the end of step 4." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

Now you can see how row cell definitions can be written as basic strings, or written in object form for more advanced cases. Using object notation here is useful when you need to attach and work with arbitrary data to achieve some custom or dynamic rendering of your row cells.

Still have questions? View the latest [Table documentation](https://www.patternfly.org/v4/documentation/react/components/table/) for more information.
