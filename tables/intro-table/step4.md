A common case for Table is the need to handle large datasets elegantly. This can be addressed on both the styling and interactivity side. In this step, we'll look at how we can address the case of large datasets from a styling perspective.

## Task

1) Locate the code for the Table component (`<Table caption="Patternfly React Table" cells={columns} rows={defaultRows}>`)

2) Add a `variant` <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">prop</a> to the Table component, and set its value to `"compact"`.

<pre class="file">
variant="compact"
</pre>

Your Table definition should now look like the following:

<pre class="file" data-target="clipboard">
&lt;Table variant=&quot;compact&quot; caption=&quot;Patternfly React Table&quot; cells={columns} rows={defaultRows}&gt;
  &lt;TableHeader /&gt;
  &lt;TableBody /&gt;
&lt;/Table&gt;
</pre>

Notice the table head, rows, and cells become compressed and take up less vertical space so you can fit more data on the screen at one time.

<img src="intro-table/assets/step-4-complete.png" alt="Image of what table looks like at the end of step 4." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
