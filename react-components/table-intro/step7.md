In this next step, we'll add the state properties we need to track how many rows per page the user can display, what current page the user is on within the dataset, and we'll add a function to handle updating the number of rows per page to display when the user changes this value with the dropdown.

## Task

1) In your `src/App.js`{{open}} file create two state properties within your component, `numPerPage` and `currentPage`, setting their values to 2 and 1, respectivly. Place this code inside of the App component, just below the line that starts with `const App = () => {`.

<pre class="file">
const [numPerPage, setNumPerPage] = React.useState(2);
const [currentPage, setCurrentPage] = React.useState(1);
</pre>

<strong>Note: </strong> The second parameter in the destructured array coming from React.useState() is the setter for the state variable you're creating.

2) Set the `perPage` prop of the Pagination component to the `numPerPage` state property you just created.

<pre class="file">
perPage={numPerPage}
</pre>

3) Similarly, set the `page` prop of the Pagination component to the `currentPage` state property.

<pre class="file">
page={currentPage}
</pre>

Your Pagination component should look like the code snippet below:

<pre class="file">
&lt;Pagination perPage={numPerPage} page={currentPage} itemCount={defaultRows.length} /&gt;
</pre>

<strong>Note: </strong> At this point, the Pagination component is aware that we should only be showing 1 - 2 of 6 items, and that we should be on page 1 of 3. We haven’t updated our rows yet to reflect this. Don't worry, we’ll do this shortly.

4) Set the `perPageOptions` prop of the Pagination component so that we have two options in the dropdown. 2 and 3

<pre class="file">
perPageOptions={[{ title: "2", value: 2 }, { title: "3", value: 3 }]}
</pre>

Notice the "per page options" dropdown now reflect options of 2 and 3 per page.

<img src="table-intro/assets/step-7-perPageOptions-complete.png" alt="Image of what table looks like after step 7 sub-step 2." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

5) Create the handler function `handlePerPageSelect` inside your component definition (just below the `currentPage` state property you added in the first step). Inside this function set the `numPerPage` state property to the value selected in the dropdown by calling setNumPerPage and passing it the value that is received as the second parameter in handlePerPageSelect.

<pre class="file">
const handlePerPageSelect = (event, value) => {
  setNumPerPage(value);
};
</pre>

6) Set the `onPerPageSelect` prop of the Pagination component to the function "handlePerPageSelect" you just created.

<pre class="file">
onPerPageSelect={handlePerPageSelect}
</pre>

At this point, you should be able to select between 2 and 3 in the dropdown and see the Pagination component working in isolation. In the next step, we'll add some code to make the rows actually respect the values set by the pagination controls. Your component implementation should currently look something like the following:

<pre class="file">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
import { Pagination } from &quot;@patternfly/react-core&quot;;
import { columns, defaultRows } from &quot;./data&quot;;
const App = () =&gt; {
  const [numPerPage, setNumPerPage] = React.useState(2);
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePerPageSelect = (event, value) =&gt; {
    setNumPerPage(value);
  };
  return (
    &lt;React.Fragment&gt;
      &lt;Pagination
        onPerPageSelect={handlePerPageSelect}
        perPageOptions={[{ title: &quot;2&quot;, value: 2 }, { title: &quot;3&quot;, value: 3 }]}
        page={currentPage}
        perPage={numPerPage}
        itemCount={defaultRows.length}
      /&gt;
      &lt;Table
        caption=&quot;Patternfly React Table&quot;
        cells={columns}
        rows={defaultRows}
        variant=&quot;compact&quot;
      &gt;
        &lt;TableHeader /&gt;
        &lt;TableBody /&gt;
      &lt;/Table&gt;
    &lt;/React.Fragment&gt;
  );
};
export default App;
</pre>

Here's what the rendered output should look like:

<img src="table-intro/assets/step-7-complete.png" alt="Image of what table looks like at the end of step 7." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
