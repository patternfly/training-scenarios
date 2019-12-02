In this step you will add tooltips to the area chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<Chart>` component.</strong>

It will look like this:

<pre class="file">
&lt;Chart
  height={250}
  width={600}
&gt;
</pre>

3) <strong>Add a `containerComponent` property to that section</strong>

The `containerComponent` property takes a component instance which will be used to create a container element for standalone charts.

You will add the `ChartVoronoiContainer` component which is used to create voronoi overlays for charts. These are useful for attaching events to data points, such as tooltips.

It should look like this:

<pre class="file" data-target="clipboard">
containerComponent={
  &lt;ChartVoronoiContainer
  /&gt;
}
</pre>

<strong>Note:</strong> There will be no visible changes at this stage.

4) <strong>Add a `constrainToVisibleArea` property inside of the `ChartVoronoiContainer`.</strong>

The `constrainToVisibleArea` property will alter the position of the tooltip so that it exactly fits within the rendered SVG.

It should look like this:

<pre class="file" data-target="clipboard">
containerComponent={
  &lt;ChartVoronoiContainer
    constrainToVisibleArea
  /&gt;
}
</pre>

5) <strong>Add a `labels` property inside of the `ChartVoronoiContainer`.</strong>

<pre class="file" data-target="clipboard">
containerComponent={
  &lt;ChartVoronoiContainer
    constrainToVisibleArea
    labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}
  /&gt;
}
</pre>

Once the preview reloads it should look like this:
<img src="area-chart/assets/tooltips.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

You will continue by adding axis labels to the chart in the next step.
