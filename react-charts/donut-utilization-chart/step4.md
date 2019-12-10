Add tooltips to the donut utilization chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<ChartDonutUtilization>` component.</strong>

It will look like this:

<pre class="file">
&lt;ChartDonutUtilization
  data={{ x: &#39;Storage capacity&#39;, y: 45 }}
  title=&quot;45%&quot;
  subTitle=&quot;of 100 GBps&quot;
  thresholds={[{ value: 60 }, { value: 90 }]}
  height={230}
  width={350}
/&gt;
</pre>

3) <strong>Add a `constrainToVisbleArea` property to the `<ChartDonutUtilization>` component.</strong>

The `constrainToVisibleArea` property determines whether to coerce tooltips so that they fit within the visible area of the chart.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
constrainToVisibleArea
</pre>

4) <strong>Add a `labels` property to the `<ChartDonutUtilization>` component.</strong>

Copy this code to the editor:

<pre class="file" data-target="clipboard">
labels={({ datum }) =&gt; datum.x ? `${datum.x}: ${datum.y}%` : null}
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/tooltips.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

