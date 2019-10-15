In the next few steps, we'll dive into incorporating the Pagination component so users have more granular control over their view of the data.

## Task

1) Import Pagination component from react-core right after your imports from  `@patternfly/react-table`.

<pre class="file" data-target="clipboard">
import { Pagination } from '@patternfly/react-core';
</pre>

2) Render the Pagination component just above the `<Table>` component, as a sibling in the component tree.

<pre class="file" data-target="clipboard">
  &lt;Pagination /&gt;
</pre>

3) Set the `itemCount` prop of the Pagination component to the total number of rows in your dataset

<pre class="file" data-target="clipboard">
itemCount={defaultRows.length}
</pre>

At this point you should see the Pagination component rendered above the table reflecting 1 - 6 items.

<strong>Note: </strong> You may need to click the refresh button at the top right of the preview pane or wait for the environment to finish updating before you see the latest changes.

Your component implementation should look like the following;

<pre class="file">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
import { Pagination } from &#39;@patternfly/react-core&#39;;
import { columns, defaultRows } from &quot;./data&quot;;
const App = () =&gt; {
  return (
    &lt;React.Fragment&gt;
      &lt;Pagination itemCount={defaultRows.length} /&gt;
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

<img src="intro-table/assets/step-6-complete.png" alt="Image of what table looks like at the end of step 6." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
