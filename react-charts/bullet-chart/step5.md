Now we'll add labels to the bullet chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartBullet
  comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}
  maxDomain={{y: 100}}
  primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 60 }]}
  qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}
  height={150}
  width={600}
/&gt;
</pre>

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 50,
  left: 150,
  right: 50,
  top: 50
}}
</pre>

- This will add more padding to the left property to accommodate the labels.

4) Add the following property to that section:

<pre class="file" data-target="clipboard">
title="Text label"
subTitle="Measure details"
</pre>

5) Once the preview reloads - it should look like this:
<img src="bullet-chart/assets/labels.png" alt="Chart with axis labels" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding a legend to the chart in the next step.
