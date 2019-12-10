Add a legend to the donut utilization chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the code for the `<ChartDonutUtilization>` component.</strong>

It should look like this:

<pre class="file">
&lt;ChartDonutUtilization
  title=&quot;45%&quot;
  subTitle=&quot;of 100 GBps&quot;
  labels={({ datum }) =&gt; datum.x ? `${datum.x}: ${datum.y}%` : null}
  thresholds={[{ value: 60 }, { value: 90 }]}
  height={230}
  width={350}
  constrainToVisibleArea
  data={{ x: &#39;Storage capacity&#39;, y: 45 }}
/&gt;
</pre>

3) <strong>Add the `padding` property to that section:</strong>

In this case, give it the following values. More padding will be added to the right property to accommodate the axis labels.

- bottom: 20
- left: 20
- right: 290
- top: 20

It should look like this:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 20,
  left: 20,
  right: 290,
  top: 20
}}
</pre>

4) <strong>Add the `legendOrientation` property to the `<ChartDonutUtilization>` component.</strong>

Set the orientation for the `legendData` so that it behaves as expected when added in step 6 (there will be no visible changes yet).

The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically. In this case it should be set to vertical:

<pre class="file" data-target="clipboard">
legendOrientation=&quot;vertical&quot;
</pre>

5) <strong>Add the `legendPosition` property to the `<ChartDonutUtilization>` component.</strong>

Set the position for the `legendData` so that it behaves as expected when added in step 6 (there will still be no visible changes yet).

The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart. It should look like the following:

<pre class="file" data-target="clipboard">
legendPosition=&quot;right&quot;
</pre>

6) <strong>Add the `legendData` property to the `<ChartDonutUtilization>` component.</strong>

Inside the `legendData` should be an object with names for the data. It should look like the following:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats&#39; }, 
  { name: &#39;Dogs&#39; }, 
  { name: &#39;Birds&#39; }, 
  { name: &#39;Mice&#39; }
]}
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
