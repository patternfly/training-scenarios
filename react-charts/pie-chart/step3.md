Add tooltips to the pie chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<ChartPie>` component.</strong>

It will look like this:

<pre class="file">
&lt;ChartPie
  data={[{ x: &#39;Cats&#39;, y: 35 }, { x: &#39;Dogs&#39;, y: 55 }, { x: &#39;Birds&#39;, y: 10 }]}
  height={230}
  width={350}
/&gt;
</pre>

3) <strong>Add a `constrainToVisbleArea` property to the `<ChartPie>` component.</strong>

The `constrainToVisibleArea` property determines whether to coerce tooltips so that they fit within the visible area of the chart.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
constrainToVisibleArea
</pre>

4) <strong>Add a `labels` property to the `<ChartPie>` component.</strong>

<pre class="file" data-target="clipboard">
labels={({ datum }) =&gt; `${datum.x}: ${datum.y}%`}
</pre>

Once the preview reloads, it should look like this:
<img src="pie-chart/assets/tooltips.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />