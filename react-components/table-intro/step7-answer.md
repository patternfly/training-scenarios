<pre class="file">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
import { Pagination } from &#39;@patternfly/react-core&#39;;
import { columns, defaultRows } from &#39;./data&#39;;
const App = () =&gt; {
  return (
    &lt;React.Fragment&gt;
      &lt;Pagination itemCount={defaultRows.length} /&gt;
      &lt;Table variant=&quot;compact&quot; caption=&quot;PatternFly React Table&quot; cells={columns} rows={defaultRows}&gt;
        &lt;TableHeader /&gt;
        &lt;TableBody /&gt;
      &lt;/Table&gt;
    &lt;/React.Fragment&gt;
  );
};
export default App;
</pre>
