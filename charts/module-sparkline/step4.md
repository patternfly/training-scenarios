Now we'll add tooltips to the sparkline chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartGroup
  maxDomain={{y: 9}}
  padding={0}
  height={100}
  width={400}
&gt;
</pre>

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
containerComponent={
  &lt;ChartVoronoiContainer 
    constrainToVisibleArea
    labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}
  /&gt;
}
</pre>

- The `constrainToVisibleArea` property will alter the position of the tooltip so that it exactly fits within the rendered SVG
- The `containerComponent` property takes a component instance which will be used to create a container element for standalone charts
- The `ChartVoronoiContainer` is used to create voronoi overlays for charts, which are useful for attaching events to data points, such as tooltips

4) Once the preview reloads - it should look like this:
<img src="module-sparkline/assets/tooltips.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding a label to the chart in the next step.
