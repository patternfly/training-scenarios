Even basic tables need to be able to account for the case of large dataset. In this step, we'll look at how we can address this from a styling perspective.

## Task

1) Locate the code for the Table component (`<Table caption="Patternfly React Table" cells={columns} rows={defaultRows}>`)

2) Add a `variant` <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">prop</a> to the Table component, and set its value to `"compact"`.

<pre class="file" data-target="clipboard">
variant="compact"
</pre>

Your Table definition should now lo

<pre class="file" data-target="clipboard">
&lt;Table variant=&quot;compact&quot; caption=&quot;Patternfly React Table&quot; cells={columns} rows={defaultRows}&gt;
  &lt;TableHeader /&gt;
  &lt;TableBody /&gt;
&lt;/Table&gt;
</pre>

Notice the table head, rows, and cells become compressed and take up less vertical space so you can fit more data on the screen at one time.

<img src="intro-table/assets/step-4-complete.png" alt="Image of what table looks like at the end of step 4." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
