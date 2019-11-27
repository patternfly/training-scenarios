Now you will add tooltips to the area chart.

## Task

1) Make sure the <strong> App.js file is still open.</strong>

2) <strong>Locate the code </strong>that looks like the following:

<pre class="file">
&lt;Chart
  height={250}
  width={600}
&gt;
</pre>

3) <strong>Add the following property </strong>to that section:

<pre class="file" data-target="clipboard">
containerComponent={
  &lt;ChartVoronoiContainer
    constrainToVisibleArea
    labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}
  /&gt;
}
</pre>

<strong>Note:</strong> The `constrainToVisibleArea` property will alter the position of the tooltip so that it exactly fits within the rendered Scalable Vector Graphic (SVG).
- The `containerComponent` property takes a component instance which will be used to create a container element for standalone charts
- The `ChartVoronoiContainer` is used to create voronoi overlays for charts, which are useful for attaching events to data points, such as tooltips

- Once the preview reloads - it should look like this:
<img src="area-chart/assets/tooltips.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

You will continue by adding axis labels to the chart in the next step.
