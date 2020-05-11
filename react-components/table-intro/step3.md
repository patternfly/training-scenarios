With the basic table structure and imports in place, convert the columns definition into an array of `ICell` objects.

1) <strong>Locate the table columns definition.</strong>

It looks like: `const columns = ["First column", "Second column", "Third column"];`

2) <strong>Replace each string in the `columns` array with an object representation.</strong>

For each of the columns, set the object's `title` property to the string value used previously. For example: `"First column"` becomes `{ title: "First column" }`, etc.

Apply this transformation to all of the column definitions.

The table should visually appear exactly as it did before:

<img src="table-intro/assets/step-3-complete.png" alt="Image of what table looks like at the end of step 3." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

Now you can see that column cell definitions can be written as basic strings, or written in object form for more advanced cases. Using object notation here is useful when you need to attach and work with arbitrary data to achieve some custom or dynamic rendering of your column cells.

Still have questions? View the latest [Table documentation](https://www.patternfly.org/v4/documentation/react/components/table/) for more information.
