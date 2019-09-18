Now we'll add a legend to the donut utilization chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

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

3) Replace the following property in that section:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 20,
  left: 20,
  right: 290,
  top: 20
}}
</pre>

- This adds more padding to the right property to accommodate the legend.

4) Add the following properties to that section:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Storage capacity: 45%&#39; },
  { name: &#39;Warning threshold at 60%&#39; }, 
  { name: &#39;Danger threshold at 90%&#39; }
]}
legendOrientation=&quot;vertical&quot;
legendPosition=&quot;right&quot;
</pre>

- The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically
- The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart

5) Once the preview reloads - it should look like this:
<img src="donut-utilization-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by changing the chart's theme color in the next step.
