Another way to improve the experience of tables with large datasets is to allow for interactive pagination. The pagination controls give users granular control over their view of the data. The pagination component is available via PatternFly React core package `@patternfly/react-core`.

1) <strong>Import the pagination component.</strong>

Place the import right after the imports from  `@patternfly/react-table`.

<pre class="file">
import { Pagination } from '@patternfly/react-core';
</pre>

2) <strong>Add the `<Pagination />` component just above the `<Table />` component.</strong>

<pre class="file">
  &lt;Pagination /&gt;
</pre>

3) <strong>Set the `itemCount` property of the `<Pagination />` component.</strong>

Set `itemCount` to the total number of rows in the dataset by referencing the `defaultRows.length`.

<pre class="file">
itemCount={defaultRows.length}
</pre>

<strong>Note: </strong> Notice the pagination component rendered above the table reflecting 1–6 of 6 items. The rendered output should look like this:

<img src="table-intro/assets/step-7-complete.png" alt="Image of what table looks like at the end of step 7." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

Still have questions? View the latest [Table documentation](https://www.patternfly.org/v4/components/table) for more information.
