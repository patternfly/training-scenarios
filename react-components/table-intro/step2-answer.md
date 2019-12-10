<pre class="file">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
const columns = [&quot;First column&quot;, &quot;Second column&quot;, &quot;Third column&quot;];
const defaultRows = [
  [&quot;Row 1 column 1&quot;, &quot;Row 1 column 2&quot;, &quot;Row 1 column 3&quot;],
  [&quot;Row 2 column 1&quot;, &quot;Row 2 column 2&quot;, &quot;Row 2 column 3&quot;],
  [&quot;Row 3 column 1&quot;, &quot;Row 3 column 2&quot;, &quot;Row 3 column 3&quot;]
];
const App = () =&gt; {
  return (
    &lt;React.Fragment&gt;
      &lt;Table caption=&quot;PatternFly React Table&quot; cells={columns} rows={defaultRows}&gt;
        &lt;TableHeader /&gt;
        &lt;TableBody /&gt;
      &lt;/Table&gt;
    &lt;/React.Fragment&gt;
  );
};
export default App;
</pre>
