A typical case for the table component is the need to handle large datasets elegantly. This is addressed on both the styling and interactivity side. In this step, styling techniques are applied to improve the experience.

1) <strong>Set the table to compact mode</strong>

Locate the `<Table />` component and add a `variant` <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">prop</a>, setting its value to `compact`.

<pre class="file">
variant="compact"
</pre>

<strong>Note: </strong> Notice the table head, rows, and cells become compressed and take up less vertical space in order to fit more data on the screen at one time.

<img src="table-intro/assets/step-5-complete.png" alt="Image of what table looks like at the end of step 5." style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
