Now we'll add axis labels to the bar chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;Chart
  containerComponent={&lt;ChartVoronoiContainer labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`} /&gt;}
  domainPadding={{ x: [30, 25] }}
  height={250}
  width={600}
&gt;
</pre>

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 75,
  left: 75,
  right: 50,
  top: 50
}}
</pre>

- This will add more padding to the bottom and left properties to accommodate the axis labels.

4) Locate the code that looks like the following:

<pre class="file">
&lt;ChartGroup offset={11}&gt;
...
&lt;/ChartGroup&gt;
</pre>

5) Add the following code above that section:

<pre class="file" data-target="clipboard">
&lt;ChartAxis label=&quot;Years&quot;/&gt;
&lt;ChartAxis dependentAxis showGrid label=&quot;Percentage&quot;/&gt;
</pre>

- This will add grid lines which appear behind the ChartBar
- The `dependentAxis` property specifies whether the axis corresponds to dependent data points (e.g., usually the y-axis)
- The `showGrid` property of `ChartAxis` simply displays grid lines along that axis

6) Once the preview reloads - it should look like this:
<img src="module-bar/assets/axis.png" alt="Chart with axis labels" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

7) We'll continue by adding a legend to the chart in the next step.
