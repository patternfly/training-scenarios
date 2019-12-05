In this next step, we'll add the state properties we need to track how many rows per page the user can display, what current page the user is on within the dataset, and we'll add a function to handle updating the number of rows per page to display when the user changes this value with the dropdown.

1) <strong>Create a state property to track how many rows to display per page.</strong>

In the `src/App.js` file, just below the line that starts with `const App = () => {`, add the following code to the App component. This code creates a state variable called `numPerPage` and sets the default value to `2`, so that we will see 2 rows per page by default.

<pre class="file">
const defaultPerPage = 2;
const [numPerPage, setNumPerPage] = React.useState(defaultPerPage);
</pre>

<strong>Note:</strong> The second parameter in the destructured array returned by React.useState() is the setter for the state variable you're creating. These "setters" are functions that update the corresponding state value.

2) <strong>Set the `perPage` prop of the `<Pagination />` component to the `numPerPage` state property you just created.</strong>

<pre class="file">
perPage={numPerPage}
</pre>

3) <strong>Create a state property to track the current page of the table data.</strong>

Add the following code to the App component, just below the previous state property you created. Supply a `1` as the default value so that the table intuitively loads with the first page worth of data.

<pre class="file">
const [currentPage, setCurrentPage] = React.useState(1);
</pre>

4) <strong>Set the `page` prop of the `<Pagination />` component to the `currentPage` state property.</strong>

<pre class="file">
page={currentPage}
</pre>

5) <strong>Set the Pagination component dropdown options.</strong>

Set the `perPageOptions` prop of the `<Pagination />` component so that we have two options in the dropdown, 2 and 3. This controls how many rows per page are shown.

<pre class="file">
perPageOptions={[{ title: "2", value: 2 }, { title: "3", value: 3 }]}
</pre>

Notice the "per page options" dropdown now reflect options of 2 and 3 per page.

<img src="table-intro/assets/step-8-perPageOptions-complete.png" alt="Image of what table looks like after step 8, sub-step 5." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

6) <strong>Create a function to handle updating the number of rows per page.</strong>

Add the following code inside the App component definition (just below the state properties you added earlier). Inside this function update the `numPerPage` state property to the value selected in the dropdown by calling `setNumPerPage` and passing it the `newPerPage` parameter.

<pre class="file">
const handlePerPageSelect = (_evt, newPerPage, newPage = 1, startIdx, endIdx) => {
  setNumPerPage(newPerPage);
};
</pre>

7) <strong>Set the `onPerPageSelect` prop of the `<Pagination />` component to the `handlePerPageSelect` function you just created.</strong>

<pre class="file">
onPerPageSelect={handlePerPageSelect}
</pre>

Here's what the rendered output should look like:

<img src="table-intro/assets/step-8-complete.png" alt="Image of what table looks like at the end of step 8." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
