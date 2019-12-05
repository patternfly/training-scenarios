Add axis labels to the line chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the code for the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
&lt;Chart
  constrainToVisibleArea
  containerComponent={&lt;ChartVoronoiContainer labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`} /&gt;}
  maxDomain={{y: 10}}
  minDomain={{y: 0}}
  height={250}
  width={600}
&gt;
</pre>

3) <strong>Add the `padding` property to that section:</strong>

This will add more padding to the bottom and left properties to accommodate the axis labels.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 75,
  left: 75,
  right: 50,
  top: 50
}}
</pre>

4) <strong>Locate the code between the `<Chart>` and `<ChartGroup>`.</strong>

<pre class="file">
&lt;ChartGroup&gt;
...
&lt;/ChartGroup&gt;
</pre>

5) <strong>Between these components add the `<ChartAxis>` components.</strong>

The `<Chart>` component displays an axis by default. The `dependentAxis` property specifies whether the axis corresponds to dependent data points (e.g., usually the y-axis).  The `showGrid` property simply displays grid lines along that axis.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
&lt;ChartAxis label=&quot;Years&quot;/&gt;
&lt;ChartAxis dependentAxis showGrid label=&quot;Percentage&quot;/&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="line-chart/assets/axis.png" alt="Chart with axis labels" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

