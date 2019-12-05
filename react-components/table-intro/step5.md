A common case for Table is the need to handle large datasets elegantly. This can be addressed on both the styling and interactivity side. In this step, we'll look at how to address the case of large datasets from a styling perspective.

1) <strong>Set the table into compact mode</strong>

Locate the `<Table />` component and add a `variant` <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">prop</a>, setting its value to `compact`.

<pre class="file">
variant="compact"
</pre>

Notice the table head, rows, and cells become compressed and take up less vertical space so you can fit more data on the screen at one time.

<img src="table-intro/assets/step-5-complete.png" alt="Image of what table looks like at the end of step 5." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
