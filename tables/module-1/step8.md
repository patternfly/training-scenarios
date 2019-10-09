In this step, we'll add in the heart of pagination functionality. We'll add a new state property to track the dynamic rows, and a few more handler functions to facilitate updating the various state properties based off of user interactions.

## Task

1) Create a new state property to represent our dynamic rows, call it "rows". Set the initial value to the defaultRows constant that you defined earlier.

<pre class="file" data-target="clipboard">
const [rows, setRows] = React.useState(defaultRows);
</pre>

2) Locate the code that sets the rows for the table (`rows={defaultRows}`), and update it to reference the new rows state property you just created.

<pre class="file" data-target="clipboard">
rows={rows}
</pre>

<strong>Note: </strong> the itemCount prop will still reference the defaultRows constant as itemCount needs to be aware of the total number of rows in the entire dataset, not the number of rows that's being shown at a given time.

3) Add a function "updateList" just above handlePerPageSelect to handle setting the rows based on when the numPerPage state property changes.

<pre class="file" data-target="clipboard">
const updateList = value => {
  setCurrentPage(value);
  const beginMark = (value - 1) * numPerPage;
  const endMark = beginMark + numPerPage;
  let newRows = defaultRows.slice(beginMark, endMark);
  setRows(newRows);
};
</pre>

4) Inside the handlePerPageSelect handler, make a call to updateList and pass it the currentPage state property.

<pre class="file" data-target="clipboard">
updateList(currentPage);
</pre>

5) Add a useEffect hook inside your component that we'll teach to only run when certain properties change. This effects hook will ultimately ensure `numPerPage` and `rows` stay in sync. Inside this effect, make a call to handlePerPageSelect, pass null for the first param (event) and pass numPerPage as the second param.

<pre class="file" data-target="clipboard">
React.useEffect(() => {
  handlePerPageSelect(null, numPerPage);
}, []);
</pre>

6) Locate the empty dependency array for the useEffect hook you just created, it's the second parameter (`[]`) that was passed to useEffect. This represents an array of the function's dependencies.

7) Specify numPerPage and handlePerPageSelect as <a href="https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect" target="_blank">effect dependencies</a> by listing them in the dependency array from the previous step. Replace the empty array with the following;

<pre class="file" data-target="clipboard">
[numPerPage, handlePerPageSelect]
</pre>

8) Locate the `<Pagination>` component and set the `onSetPage` prop to an inline arrow function, and within this function make a call to updateList, pass updateList the value you receive as a second parameter.

<pre class="file" data-target="clipboard">
onSetPage={(_evt, value) => {
  updateList(value);
}}
</pre>

At this point, you should see basic pagination in place. Nice! There is some important cleanup left to do, which we'll get to in the next step.

Your rendered output should look something like the screenshot below;

<img src="module-1/assets/step-8-complete.png" alt="Image of what table looks like at the end of step 8." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

Your component implementation should look something like the following;

<pre class="file">
import * as React from &quot;react&quot;;
import * as ReactDOM from &quot;react-dom&quot;;
import { Pagination } from &quot;@patternfly/react-core&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
import { columns, defaultRows } from &quot;./data&quot;;
const App = () =&gt; {
  const [numPerPage, setNumPerPage] = React.useState(2);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rows, setRows] = React.useState(defaultRows);
  const updateList = value =&gt; {
    setCurrentPage(value);
    const beginMark = (value - 1) * numPerPage;
    const endMark = beginMark + numPerPage;
    let newRows = defaultRows.slice(beginMark, endMark);
    setRows(newRows);
  };
  const handlePerPageSelect = (event, value) =&gt; {
    updateList(currentPage);
    setNumPerPage(value);
  };
  React.useEffect(() =&gt; {
    handlePerPageSelect(null, numPerPage);
  }, [numPerPage, handlePerPageSelect]);
  return (
    &lt;React.Fragment&gt;
      &lt;Pagination
        onSetPage={(_evt, value) =&gt; {
          updateList(value);
        }}
        onPerPageSelect={handlePerPageSelect}
        perPageOptions={[{ title: &quot;2&quot;, value: 2 }, { title: &quot;3&quot;, value: 3 }]}
        page={currentPage}
        perPage={numPerPage}
        itemCount={defaultRows.length}
      /&gt;
      &lt;Table
        caption=&quot;Patternfly React Table&quot;
        cells={columns}
        rows={rows}
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
