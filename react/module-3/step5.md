Now we'll add tooltips to the `Chart` component...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;Chart
  domainPadding={{ x: [30, 25] }}
  height={250}
  width={600}
&gt;
</pre>

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
containerComponent={
  &lt;ChartVoronoiContainer 
    labels={datum =&gt; `${datum.name}: ${datum.y}`}
  /&gt;
}
</pre>

Once the preview reloads - it should look like this:
<img src="module-3/assets/tooltips.png" alt="Bar chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

The containerComponent property of Chart takes a component instance which will be used to create a container element for standalone charts. ChartVoronoiContainer is used to create voronoi overlays for charts, which are useful for attaching events to data points, such as tooltips. 

We'll continue by adding axis labels to the chart in the next step.
