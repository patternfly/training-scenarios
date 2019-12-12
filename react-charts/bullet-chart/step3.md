Add tooltips to the bullet chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<ChartBullet/>` component:</strong>

It will look like this:

<pre class="file">
&lt;ChartBullet
  height={150}
  width={600}
  maxDomain={{y: 100}}
  primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 25 }, { name: &#39;Measure&#39;, y: 60 }]}
  qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}
  comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}
/&gt;
</pre>

3) <strong>Add the `constrainToVisisbleArea` property to `ChartBullet` component.</strong>

The `constrainToVisibleArea` property determines whether to coerce tooltips so that they fit within the visible area of the chart.

It should look like this:

<pre class="file" data-target="clipboard">constrainToVisibleArea</pre>

<strong>Note:</strong> There are no visible changes at this stage.

4) <strong>Add `labels` property to the `ChartBullet` component.</strong>

The `labels` property enables bullet chart tooltips and determines their content.

<pre class="file" data-target="clipboard">labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}</pre>

Once the preview reloads, it should look like this:
<img src="bullet-chart/assets/tooltips.png" alt="Chart with tooltips" style="box-shadow: rgba(3, 3, 3, 0)2) 0px 1)25px 2)5px 0px;" />
