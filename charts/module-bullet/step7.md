Now we'll change the bullet chart theme color...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartBullet
  comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}
  comparativeWarningMeasureLegendData={[{ name: &#39;Warning&#39; }]}
  legendOrientation=&quot;horizontal&quot;
  legendPosition=&quot;bottom&quot;
  maxDomain={{y: 100}}
  padding={{
    bottom: 50,
    left: 150,
    right: 50,
    top: 50
  }}
  primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 60 }]}
  primarySegmentedMeasureLegendData={[{ name: &#39;Measure 1&#39; }, { name: &#39;Measure 2&#39; }]}
  qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}
  qualitativeRangeLegendData={[{ name: &#39;Range 1&#39; }, { name: &#39;Range 2&#39; }]}
  title="Text label"
  subTitle="Measure details"
  height={150}
  width={600}
/&gt;
</pre>

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

- The `themeColor` property specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.

4) Once the preview reloads - it should look like this:
<img src="module-bullet/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
