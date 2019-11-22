Now we'll add tooltips to the donut chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartDonut
  data={[{ x: &#39;Cats&#39;, y: 35 }, { x: &#39;Dogs&#39;, y: 55 }, { x: &#39;Birds&#39;, y: 10 }]}
  subTitle=&quot;Pets&quot;
  title=&quot;100&quot;
  height={230}
  width={350}
/&gt;
</pre>

3) Add the following properties to that section:

<pre class="file" data-target="clipboard">
constrainToVisibleArea
labels={({ datum }) =&gt; `${datum.x}: ${datum.y}%`}
</pre>

- The `constrainToVisibleArea` property will alter the position of the tooltip so that it exactly fits within the rendered SVG

4) Once the preview reloads - it should look like this:
<img src="donut-chart/assets/tooltips.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding a legend to the chart in the next step.
