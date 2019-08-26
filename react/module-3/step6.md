Now we'll add axis labels to the `Chart` component...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;Chart
  containerComponent={&lt;ChartVoronoiContainer labels={datum =&gt; `${datum.name}: ${datum.y}`} /&gt;}
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

4) Locate the code that looks like the following:

<pre class="file">
&lt;ChartGroup offset={11}&gt;
</pre>

5) Add the following code above that section:

Note that the grid lines should appear behind the bars

<pre class="file" data-target="clipboard">
&lt;ChartAxis label=&quot;Years&quot;/&gt;
&lt;ChartAxis dependentAxis showGrid label=&quot;Percentage&quot;/&gt;
</pre>

Once the preview reloads - it should look like this:
<img src="module-3/assets/axis.png" alt="Bar chart with axis labels" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

The padding property of Chart specifies the amount of padding between the edge of the chart and any rendered child components. In this example, we have added more padding to the bottom and left properties to accommodate the axis labels.

The dependentAxis property of ChartAxis specifies whether the axis corresponds to dependent data points (e.g., usually the y-axis). The showGrid property of ChartAxis simply displays grid lines along that axis. 

We'll continue by adding a legend to the chart in the next step.
