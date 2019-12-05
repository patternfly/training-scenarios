Add a legend to the donut utilization chart.

1) <strong>Make sure the App.js file is still open.</strong>

2) <strong>Locate the code for the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
&lt;ChartDonutUtilization
  constrainToVisibleArea
  data={{ x: &#39;Storage capacity&#39;, y: 45 }}
  title=&quot;45%&quot;
  subTitle=&quot;of 100 GBps&quot;
  labels={({ datum }) =&gt; datum.x ? `${datum.x}: ${datum.y}%` : null}
  thresholds={[{ value: 60 }, { value: 90 }]}
  height={230}
  width={350}
/&gt;
</pre>

3) <strong>Add a `padding` property to the component.</strong>

This `padding` property adds more padding to accommodate the legend.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 20,
  left: 20,
  right: 290,
  top: 20
}}
</pre>

4) <strong>Add the `LegendOrientation` and `legendPosition` properties to the component.</strong>

The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically.

The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Storage capacity: 45%&#39; },
  { name: &#39;Warning threshold at 60%&#39; }, 
  { name: &#39;Danger threshold at 90%&#39; }
]}
legendOrientation=&quot;vertical&quot;
legendPosition=&quot;right&quot;
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
