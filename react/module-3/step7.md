Now we'll add a legend labels to the `Chart` component...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;Chart
  containerComponent={&lt;ChartVoronoiContainer labels={datum =&gt; `${datum.name}: ${datum.y}`} /&gt;}
  domainPadding={{ x: [30, 25] }}
  padding={{
    bottom: 75,
    left: 75,
    right: 50,
    top: 50
  }}
  height={250}
  width={600}
&gt;
</pre>

3) Replace the following property in that section:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 75,
  left: 75,
  right: 200,
  top: 50
}}
</pre>

4) Add the following properties to that section:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats&#39; }, 
  { name: &#39;Birds&#39; }, 
  { name: &#39;Dogs&#39; }, 
  { name: &#39;Mice&#39; }
]}
legendOrientation=&quot;vertical&quot;
legendPosition=&quot;right&quot;
</pre>

Once the preview reloads - it should look like this:
<img src="module-3/assets/legend.png" alt="Bar chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

The padding property of Chart specifies the amount of padding between the edge of the chart and any rendered child components. In this example, we have added more padding to the right property to accommodate the legend.

The legendOrientation property of Chart specifies whether the legend is rendered horizontally or vertically. The legendPosition property of Chart specifies whether the legend is rendered on the bottom or right of the chart.

We'll continue by changing the chart's theme color in the next step.
