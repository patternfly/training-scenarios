Add functionality for paginating the table's dataset. The functionality includes adding a new state property to track the dynamic rows and adding a few more handler functions to facilitate keeping the table and pagination in sync.

1) <strong>Create a new state property to keep track of dynamic rows.</strong>

Add the following code just below the other state properties added in step 8. Set the initial value to the `defaultRows` constant imported from `data.js`.

<pre class="file">
const [rows, setRows] = React.useState(defaultRows.slice(0, defaultPerPage));
</pre>

2) <strong>Update the `<Table />`'s `rows` prop to use the new `rows` state property.</strong>

Locate the code that sets the rows for the table `rows={defaultRows}`, and update it to reference the new rows state property you created in step 1.

<pre class="file">
rows={rows}
</pre>

<strong>Note: </strong> the `itemCount` prop for the pagination component will still reference the defaultRows constant as it needs to be aware of the total number of rows in the entire dataset, not the number of rows that are being shown for a given page within the dataset.

3) <strong>Create a function to handle updating the current page.</strong>

Copy the following handler function just below the `handlePerPageSelect` function.

<pre class="file">
const handleSetPage = (_evt, newPage, perPage, startIdx, endIdx) => {
  setCurrentPage(newPage);
}
</pre>

4) <strong>Set the `onSetPage` prop of the `<Pagination />` component to the `handleSetPage` handler function.</strong>

<pre class="file">
onSetPage={handleSetPage}
</pre>

5) <strong>Update the visible `rows` when `page` and `numPerPage` state variables are updated.</strong>

Copy the following statement into the `handlePerPageSelect` and `handleSetPage` function bodies.

<pre class="file">
setRows(defaultRows.slice(startIdx, endIdx));
</pre>

The table should look like the following:

<img src="table-intro/assets/step-9-complete.png" alt="Image of what table looks like at the end of step 9." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

At this point, basic pagination of the table data should be in place. Nice!
