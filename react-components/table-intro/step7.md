As mentioned in step 5, we can handle the case for large datasets on the interaction side, also. We can do this by incorporating pagination controls that give users more granular control over their view of the data. The Pagination component is available via Patternfly React core package `@patternfly/react-core`

1) <strong>Import the Pagination component.</strong>

Place the import right after the imports from  `@patternfly/react-table`.

<pre class="file">
import { Pagination } from '@patternfly/react-core';
</pre>

2) <strong>Render the <Pagination /> component just above the `<Table />` component.</strong>

<pre class="file">
  &lt;Pagination /&gt;
</pre>

3) <strong>Set the `itemCount` prop of the `<Pagination />` component.</strong>

Set `itemCount` to the total number of rows in the dataset by referencing the `defaultRows.length`.

<pre class="file">
itemCount={defaultRows.length}
</pre>

Notice the Pagination component rendered above the table reflecting 1 - 6 of 6 items. The rendered output should look like the image below:

<img src="table-intro/assets/step-7-complete.png" alt="Image of what table looks like at the end of step 7." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
