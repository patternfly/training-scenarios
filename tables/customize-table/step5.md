In this step we'll continue looking at how we can customize row keys, but this time we'll use a function instead of a static property value. This allows us to build the row keys dynamically based on more than one property value, which may be necessary for building more complex table functionality.

## Task

1) Define a function constant that will be used to customize the row key for each row, call it `rowKeyResolver`. Place this function outside of your app, just below your last row definition and above the line starting with `const App = () => {`.

<pre class="file" data-target="clipboard">
const rowKeyResolver = ({ rowData, rowIndex }) => {
  return `${rowIndex}-${rowData.customStaticProperty}`;
};
</pre>

2) Locate the code `<TableBody rowKey="customStaticProperty" />` and change the value of the rowKey prop to the function you just defined.

<pre class="file" data-target="clipboard">
&lt;TableBody rowKey={rowKeyResolver} /&gt;
</pre>

The row keys will now follow the format returned by your rowKeyResolver function, so in our case we'd have the following row keys;

<ul>
  <li>0-myfirst-row</li>
  <li>1-mysecond-row</li>
  <li>2-mythird-row</li>
</ul>

<strong>Note: </strong> notice the string `-row` is still appended to the dynamic value we set as our row key.

Take care to ensure your table rows and cells each have their own unique keys, and where possible use more than just the row/cell index to differentiate between them. This important for traceability! For example, the format

`${propertyName}-${rowIndex}-row`

is generally more semantic, readable, and debuggable than;

`${rowIndex}-row`

Your component implementation should look like the following;

<pre class="file">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody } from &quot;@patternfly/react-table&quot;;
const columns = [
  { title: &quot;First column&quot;, props: { className: &quot;first-column-stuff&quot; } },
  { title: &quot;Second column&quot; },
  { title: &quot;Third column&quot; }
];
const defaultRows = [
  {
    customStaticProperty: &#39;myfirst&#39;,
    cells: [
      { title: &quot;Row 1 column 1&quot;, props: { key: &#39;row-one-column-one-key&#39; } },
      { title: &quot;Row 1 column 2&quot; },
      { title: &quot;Row 1 column 3&quot; }
    ]
  },
  {
    customStaticProperty: &#39;mysecond&#39;,
    cells: [
      { title: &quot;Row 2 column 1&quot; },
      { title: &quot;Row 2 column 2&quot; },
      { title: &quot;Row 2 column 3&quot; }
    ]
  },
  {
    customStaticProperty: &#39;mythird&#39;,
    cells: [
      { title: &quot;Row 3 column 1&quot;, props: { &quot;data-last-row-cell&quot;: true } },
      { title: &quot;Row 3 column 2&quot;, props: { &quot;data-last-row-cell&quot;: true } },
      { title: &quot;Row 3 column 3&quot;, props: { &quot;data-last-row-cell&quot;: true } }
    ]
  }
];
const rowKeyResolver = ({ rowData, rowIndex }) =&gt; {
  return `${rowIndex}-${rowData.customStaticProperty}`;
};
const App = () =&gt; {
  return (
    &lt;Table caption=&quot;Customized Table&quot; cells={columns} rows={defaultRows}&gt;
      &lt;TableHeader /&gt;
      &lt;TableBody rowKey={rowKeyResolver} /&gt;
    &lt;/Table&gt;
  );
};
export default App;
</pre>

At this point, your table should still look exactly the same as it did at the end of step 2.

<img src="customize-table/assets/step-2-complete.png" alt="Image of what table looks like at the end of step 2." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
