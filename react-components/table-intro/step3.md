With the basic table structure and imports in place, this step will convert the columns definition into an array of objects.

1) <strong>Locate the table columns definition.</strong>

It looks like: `const columns = ["First column", "Second column", "Third column"];`

2) <strong>Replace each string in the `columns` array with an object representation.</strong>

For each of the columns, set the object's `title` property to the string value used previously. For example: `"First column"` becomes `{ title: "First column" }`, etc.

Apply this transformation to all of the column definitions.

<strong>Note: </strong> The table should appear exactly as it did before:

<img src="table-intro/assets/step-3-complete.png" alt="Image of what table looks like at the end of step 3." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
