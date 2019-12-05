Add a legend to the line chart.

1) <strong>Make sure the App.js file is still open.</strong>

2) <strong>Locate the code for the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
&lt;Chart
  constrainToVisibleArea
  containerComponent={&lt;ChartVoronoiContainer labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`} /&gt;}
  maxDomain={{y: 10}}
  minDomain={{y: 0}}
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

3) <strong>Update the padding for the right value to accommodate the legend.</strong>

<pre class="file" data-target="clipboard">
padding={{
  bottom: 75,
  left: 75,
  right: 200,
  top: 50
}}
</pre>

4) <strong>Add the `legendOrientation` and `legendPosition` properties to the `<Chart>` component.</strong>

The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically.  The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats&#39; }, 
  { name: &#39;Dogs&#39;, symbol: { type: &#39;dash&#39; }}, 
  { name: &#39;Birds&#39;},
  { name: &#39;Mice&#39; }
]}
legendOrientation=&quot;vertical&quot;
legendPosition=&quot;right&quot;
</pre>

 Once the preview reloads, it should look like this:
<img src="line-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
