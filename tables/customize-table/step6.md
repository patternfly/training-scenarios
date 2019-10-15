Transforms allow you to add programmatic functionality to table cells. You can add as many transforms as you like for a given column, and they can be unset on a row by row basis by nullifying individual transform properties where desired.

To add a transform, you need to specify the transform scope and set that property value to an array literal where the array items are the individual transform functions you’d like to apply.

These are the three transform scopes;
<ul>
  <li>Setting <strong>columnTransforms</strong> will apply functionality to both the column header and row data</li>
  <li>Setting <strong>transforms</strong> will apply to the column header only</li>
  <li>Setting <strong>cellTransforms</strong> will apply to a column’s rows only</li>

</ul>

<strong>Note: </strong> transforms are simple functions!

In the next steps, we'll see what it takes to visually align row data with the column headers and apply some basic formatting for handling large header labels.

1) Locate the code that imports modules from the react-table package, it should be one of the first few lines.

<pre class="file">
import { Table, TableHeader, TableBody } from "@patternfly/react-table";
</pre>


2) add the `textCenter` `cellWidth`, and `wrappable` transforms to the list of modules you're importing

<pre class="file">
import { Table, TableHeader, TableBody, textCenter, cellWidth, wrappable } from "@patternfly/react-table";
</pre>

3) Apply the `textCenter` transform to to the entire second column by specifying the `columnTransforms` property and setting its value to an array with the single textCenter transform you imported in the previous step.

<pre class="file" data-target="clipboard">
columnTransforms: [textCenter]
</pre>

Your second column definition should now look like the following

<pre class="file">
{ title: "Second column", columnTransforms: [textCenter] },
</pre>

Next we'll unset the textCenter transform for the last row of the second column by nullifying the textCenter property using the props object on the row’s definition

4) Locate the code for the last row of the second column, it start with ` title: "Row 3 column 2", props:`.

5) Add another property onto this row's props object, setting textCenter to null, like `textCenter: null`.

Your second columns last row definition should now look like this;

<pre class="file">
{
  title: "Row 3 column 2",
  props: {
    "data-last-row-cell": true,
    textCenter: null
  }
},
</pre>

At this point you should see the cell for "Row 3 column 2" reverted back to its original text-align position, left.

6) Add a large amount of text to the third column header label

<pre class="file" data-target="clipboard">
title: "Third column header with an unusally long label that could potentially span many lines"
</pre>

7) Apply the cellWidth and wrappable transforms to the third column definition's `transforms` property to restrict the width of the column header to 20% and force the text to wrap

<pre class="file" data-target="clipboard">
transforms: [cellWidth(20), wrappable]
</pre>

Your component implementation should look like the following;

<pre class="file">
import * as React from &quot;react&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Table, TableHeader, TableBody, textCenter, cellWidth, wrappable } from &quot;@patternfly/react-table&quot;;
const columns: any[] = [
  { title: &quot;First column&quot;, props: { className: &quot;first-column-stuff&quot; } },
  { title: &quot;Second column&quot;, columnTransforms: [textCenter] },
  { title: &quot;Third column header with an unusally long label that could potentially span many lines&quot;, transforms: [cellWidth(20), wrappable] }
];
const defaultRows = [
  {
    customStaticProperty: &quot;myfirst&quot;,
    cells: [
      { title: &quot;Row 1 column 1&quot;, props: { key: &#39;row-one-column-one-key&#39; } },
      { title: &quot;Row 1 column 2&quot; },
      { title: &quot;Row 1 column 3&quot; }
    ]
  },
  {
    customStaticProperty: &quot;mysecond&quot;,
    cells: [
      { title: &quot;Row 2 column 1&quot; },
      { title: &quot;Row 2 column 2&quot; },
      { title: &quot;Row 2 column 3&quot; }
    ]
  },
  {
    customStaticProperty: &quot;mythird&quot;,
    cells: [
      { title: &quot;Row 3 column 1&quot;, props: { &quot;data-last-row-cell&quot;: true } },
      {
        title: &quot;Row 3 column 2&quot;,
        props: {
          &quot;data-last-row-cell&quot;: true,
          textCenter: null
        }
      },
      { title: &quot;Row 3 column 3&quot;, props: { &quot;data-last-row-cell&quot;: true } }
    ]
  }
];
const App = () =&gt; {
  return (
    &lt;Table caption=&quot;Customized Table&quot; cells={columns} rows={defaultRows}&gt;
      &lt;TableHeader /&gt;
      &lt;TableBody rowKey=&quot;customStaticProperty&quot; /&gt;
    &lt;/Table&gt;
  );
};
export default App;
</pre>

The rendered output should look like the following;

<img src="customize-table/assets/step-6-complete.png" alt="Image of what table looks like at the end of step 6." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
