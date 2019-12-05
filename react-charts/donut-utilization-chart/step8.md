Add tooltips to the donut threshold component.

1) <strong>Make sure the App.js file is still open.</strong>

2) <strong>Locate the code for the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
&lt;ChartDonutThreshold
  data={[{ x: &#39;Warning at 60%&#39;, y: 60 }, { x: &#39;Danger at 90%&#39;, y: 90 }]}
  padding={{
    bottom: 20,
    left: 20,
    right: 290,
    top: 20
  }}
  themeColor={ChartThemeColor.green}
  height={230}
  width={350}
&gt;
</pre>

3) <strong>Add a `constrainToVisibleArea` property to the `<Chart>` component.</strong>

The `constrainToVisibleArea` property determines whether to coerce tooltips so that they fit within the visible area of the chart.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
constrainToVisibleArea
labels={({ datum }) =&gt; datum.x ? datum.x : null}
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/final.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
