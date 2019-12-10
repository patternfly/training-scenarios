<pre class="file">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
import { Pagination } from &#39;@patternfly/react-core&#39;;
import { columns, defaultRows } from &#39;./data&#39;;
const App = () =&gt; {
  const defaultPerPage = 2;
  const [numPerPage, setNumPerPage] = React.useState(defaultPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePerPageSelect = (_evt, newPerPage, newPage = 1, startIdx, endIdx) =&gt; {
    setNumPerPage(newPerPage);
  };
  return (
    &lt;React.Fragment&gt;
      &lt;Pagination
        onPerPageSelect={handlePerPageSelect}
        perPageOptions={[{ title: &quot;2&quot;, value: 2 }, { title: &quot;3&quot;, value: 3 }]}
        page={currentPage}
        perPage={numPerPage}
        itemCount={defaultRows.length} /&gt;
      &lt;Table variant=&quot;compact&quot; caption=&quot;PatternFly React Table&quot; cells={columns} rows={defaultRows}&gt;
        &lt;TableHeader /&gt;
        &lt;TableBody /&gt;
      &lt;/Table&gt;
    &lt;/React.Fragment&gt;
  );
};
export default App;
</pre>
