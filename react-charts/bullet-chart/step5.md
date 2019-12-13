Add a legend to the bullet chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<ChartBullet/>` component.</strong>

It will look like this:

<pre class="file">
&lt;ChartBullet
  height={150}
  width={600}
  maxDomain={{y: 100}}
  primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 60 }]}
  qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}
  comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}
  constraingToVisibleArea
  labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}
  padding={{
    bottom: 50,
    left: 150,
    right: 50,
    top: 50
  }}
  title="Text label"
  subTitle="Measure details"
/&gt;
</pre>

3) <strong>Adjust the bottom padding.</strong>

Add extra padding to the right side and bottom of the chart to accomodate the legend.

- bottom: 60
- right: 200

It should look like this:

<pre class="file" data-target="clipboard">padding={{
  bottom: 60,
  left: 150,
  right: 200,
  top: 50
}}</pre>

4) <strong>Add the `legendOrientation` property to the `ChartBullet` component.</strong>

The legend orientation is set so that it behaves as expected when you add legend data in the final steps (there will be no visible changes yet).
The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically. In this case, it should be horizontal.

<pre class="file" data-target="clipboard">legendOrientation=&quot;horizontal&quot;</pre>

5) <strong>Add the `legendPosition` property to the `ChartBullet` component.</strong>

The legend position is set so that it behaves as expected when you add legend data in the final steps (there will be no visible changes yet).
The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart. In this case, it should be at the bottom.

<pre class="file" data-target="clipboard">legendPosition=&quot;bottom&quot;</pre>

6) <strong>Add the `primarySegmentedMeasureLegendData` property to the `ChartBullet` component.</strong>

The `primarySegmentedMeasureLegendData` adds legend data to the chart which corresponds to the `primarySegmentedMeasureData` property.

<pre class="file" data-target="clipboard">primarySegmentedMeasureLegendData={[{ name: &#39;Measure 1&#39; }, { name: &#39;Measure 2&#39; }]}</pre>

7) <strong>Add the `qualitativeRangeLegendData` property to the `ChartBullet` component:</strong>

The `qualitativeRangeLegendData` property adds legend data to the chart which corresponds to the `qualitativeRangeData` property.

<pre class="file" data-target="clipboard">qualitativeRangeLegendData={[{ name: &#39;Range 1&#39; }, { name: &#39;Range 2&#39; }]}</pre>

8) <strong>Add the `comparativeWarningMeasureLegendData` property to the `ChartBullet` component.</strong>

The `comparativeWarningMeasureLegendData` adds legend data to the chart which corresponds to the `comparativeWarningMeasureData` property.

<pre class="file" data-target="clipboard">comparativeWarningMeasureLegendData={[{ name: &#39;Warning&#39; }]}</pre>

Once the preview reloads, it should look like this:
<img src="bullet-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0)2) 0px 1)25px 2)5px 0px;" />
