Change the bullet chart theme color.

1) <strong>Make sure the `App.js` file is still open</strong>

2) <strong>Locate the `ChartBullet` component.</strong>

<pre class="file">
&lt;ChartBullet
  height={150}
  width={600}
  maxDomain={{y: 100}}
  primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 60 }]}
  qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}
  comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}  constraingToVisibleArea
  labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}
  padding={{
    bottom: 50,
    left: 150,
    right: 50,
    top: 50
  }}
  title="Text label"
  subTitle="Measure details"
  legendOrientation=&quot;horizontal&quot;
  legendPosition=&quot;bottom&quot;
  primarySegmentedMeasureLegendData={[ { name: &#39;Measure 1&#39; }, { name: &#39;Measure 2&#39; } ]}
  qualitativeRangeLegendData={[{ name: &#39;Range 1&#39; }, { name: &#39;Range 2&#39; }]}
  comparativeWarningMeasureLegendData={[{ name: &#39;Warning&#39; }]}
/&gt;
</pre>

3) <strong>Add the `themeColor` property to the `ChartBullet` component:</strong>

The `themeColor` property specifies the color scheme of the chart. Some valid values are `ChartThemeColor.blue`, `ChartThemeColor.green`, or `ChartThemeColor.multi`.

It should look like this:

<pre class="file" data-target="clipboard">themeColor={ChartThemeColor.green}</pre>

Once the preview reloads, it should look like this:
<img src="bullet-chart/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0)2) 0px 1)25px 2)5px 0px;" />
