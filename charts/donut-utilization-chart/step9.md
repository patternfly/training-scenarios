Now we'll add tooltips to the donut threshold component...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

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

3) Add the following properties to that section:

<pre class="file" data-target="clipboard">
constrainToVisibleArea
labels={({ datum }) =&gt; datum.x ? datum.x : null}
</pre>

- The `constrainToVisibleArea` property will alter the position of the tooltip so that it exactly fits within the rendered SVG

4) Once the preview reloads - it should look like this:
<img src="donut-utilization-chart/assets/final.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
