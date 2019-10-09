In this next step, we'll add the state properties we need to track how many rows per page the user can display, what current page the user is on within the dataset, and we'll add a function to handle updating the number of rows per page to display when the user changes this value with the dropdown.

## Task

1) Create two state properties within your component, numPerPage and currentPage, setting their values to 2 and 1, respectivly.

<pre class="file" data-target="clipboard">
const [numPerPage, setNumPerPage] = React.useState(2);
const [currentPage, setCurrentPage] = React.useState(1);
</pre>

<strong>Note: </strong> The second parameter in the destructured array coming from React.useState() is the setter for the state variable you're creating.

2) Set the `perPage` prop of Pagination to the numPerPage state property you just created, and similarly set the `page` prop to the currentPage state property.

<pre class="file" data-target="clipboard">
perPage={numPerPage} page={currentPage}
</pre>

<strong>Note: </strong> At this point, the Pagination component is aware that we should only be showing 1-2 of 6 items, and that we should be on page 1 of 3. We haven’t updated our rows yet to reflect this. Don't worry, we’ll do this shortly.

<strong>Note: </strong> You may need to click the refresh button at the top right of the preview pane or wait for the environment to finish updating before you see the latest changes.

3) Set the `perPageOptions` prop for Pagination so that we have two options in the dropdown. 2 and 3

<pre class="file" data-target="clipboard">
perPageOptions={[{ title: "2", value: 2 }, { title: "3", value: 3 }]}
</pre>

4) Create the handler function "handlePerPageSelect" inside your component definition and set the numPerPage property when it is invoked by passing setNumPerPage the value that's passed as the second parameter.

<pre class="file" data-target="clipboard">
const handlePerPageSelect = (event, value) => {
  setNumPerPage(value);
};
</pre>

5) Set the `onPerPageSelect` property of the Pagination component to the function "handlePerPageSelect" you just created.

<pre class="file" data-target="clipboard">
onPerPageSelect={handlePerPageSelect}
</pre>

At this point, you should be able to select between 2 and 3 in the dropdown and see the Pagination component working in isolation. In the next step, we'll add some code to make the rows actually respect the values set by the pagination controls. Your component implementation should currently look something like the following;

<pre class="file">
import * as React from &quot;react&quot;;
import * as ReactDOM from &quot;react-dom&quot;;
import { Pagination } from &quot;@patternfly/react-core&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
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

Here's what the rendered output should look like;

<img src="module-1/assets/step-7-complete.png" alt="Image of what table looks like at the end of step 7." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
