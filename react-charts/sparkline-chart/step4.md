Add a label to the sparkline chart.

1) <strong>Make sure `App.js` is still open.</strong>

2) <strong>Locate the code that looks like this:</strong>

<pre class="file">
&lt;div className=&quot;chart-container&quot;&gt;
  ...
&lt;/div&gt;
</pre>

3) <strong>Add the `ChartContainer` component outside of the wrapper identified in step 2.</strong>

<pre class="file" data-target="clipboard">
&lt;ChartContainer&gt;
  &lt;ChartLabel text=&quot;CPU utilization&quot; dy={15} /&gt;
&lt;/ChartContainer&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="sparkline-chart/assets/label.png" alt="Chart with legend"
style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
