In this step, we'll find and treat a bug that you may or may not have already noticed in the current implementation, and then properly mark our callbacks that use state properties as react "callback hooks" so that they work as expected within the react data change detection ecosystem that is <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">hooks</a>.

## Task

1) Set the per page dropdown to "2 per page" and navigate to the very last page using the pagination controls, now select "3 per page" from the dropdown and notice our rows are gone!

2) Locate the `handlePerPageSelect` handler function and replace the call to `updateList(currentPage);` with the following logic.

<pre class="file" data-target="clipboard">
    // when a user reaches end of pagination, and sets numPerPage to a value
    // that requires more data than we have available, reset pagination to page 1
    if (value > numPerPage && currentPage === defaultRows.length / numPerPage) {
      updateList(1);
    } else {
      updateList(currentPage);
    }
</pre>

<strong>Disclaimer: </strong> We've handled the case of pagination overflow here in a basic way to keep this tutorial short and simple. In a production application it might make sense to instead add logic that reverts a user to the last and closest page index that will allow for displaying the number of items per page being selected.

3) Now convert handlePerPageSelect to a callback hook by stuffing the function signature inside a call to React.useCallback(), and specify an array of dependencies for this callback hook like you did earlier for handlePerPageSelect. Omitting the specifics, it should generally look like `const handlePerPageSelect = React.useCallback(FN, [DEPS]);`, where FN is your callback function and DEPS represents an array of any state properties or other callback functions (that themselves use state properties) this callback requires.

When you're done, it should look like the following. Notice we specify numPerPage, currentPage, and updateList as dependencies of this function.

<pre class="file" data-target="clipboard">
const handlePerPageSelect = React.useCallback((event, value) => {
  // when user reaches end of pagination, and sets numPerPage to a value
  // that requires more data than we have available, ensure the rows are set according
  // to the previous page's index (currentPage - 1)
  if (value > numPerPage && currentPage === defaultRows.length / numPerPage) {
    updateList(currentPage - 1);
  } else {
    updateList(currentPage);
  }
  setNumPerPage(value);
}, [numPerPage, currentPage, updateList]);
</pre>

4) As a final step, we need to give the same treatment to updateList as we just did for handlePerPageSelect. Replace the value of updateList with another call to React.useCallback() and pass updateList's function signature as the first parameter and provide an array of dependencies as the second parameter. updateList only depends on the numPerPage state property.

<pre class="file" data-target="clipboard">
const updateList = React.useCallback(
  value => {
    setCurrentPage(value);
    const beginMark = (value - 1) * numPerPage;
    const endMark = beginMark + numPerPage;
    let newRows = defaultRows.slice(beginMark, endMark);
    setRows(newRows);
  },
  [numPerPage]
);
</pre>

The look of your table hasn't changed much, but it now functions much better and will pass the basic code quality test if you're using the react-hooks/exhaustive-deps lint plugin.

This is a good point in time to copy your code into a file in case you want to be able to reference it quickly later, the next step concludes this tutorial.
