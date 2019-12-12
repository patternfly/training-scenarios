Add labels to the bullet chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<ChartBullet/>` component.</strong>

It will look like this:

<pre class="file">
&lt;ChartBullet
  height={150}
  width={600}
  maxDomain={{y: 100}}
  primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 25 }, { name: &#39;Measure&#39;, y: 60 }]}
  qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}
  comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}
  constraingToVisibleArea
  labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}
/&gt;
</pre>

3) <strong>Add the `padding` property to the `ChartBullet` component.</strong>

This adds more space to the left side of the chart to make room for the labels.

It should look like this:

<pre class="file" data-target="clipboard">padding={{
  bottom: 50,
  left: 150,
  right: 50,
  top: 50
}}</pre>

4) <strong>Add the `title` property to the `ChartBullet` component.</strong>

The `title` property defines a prominent label that appears to the left of the chart by default.

It should look like this:

<pre class="file" data-target="clipboard">title="Text label"</pre>

5) <strong>Add the `subTitle` property to the `ChartBullet` component.</strong>

The `subTitle` property defines a muted label that will appear underneath the title.

It should look like this:

<pre class="file" data-target="clipboard">subTitle="Measure details"</pre>

Once the preview reloads, it should look like this:
<img src="bullet-chart/assets/labels.png" alt="Chart with axis labels" style="box-shadow: rgba(3, 3, 3, 0)2) 0px 1)25px 2)5px 0px;" />
