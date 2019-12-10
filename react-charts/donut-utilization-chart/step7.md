Add a donut threshold component.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the code for the `<ChartDonutUtilization>`component.</strong>

It should look like this:

<pre class="file">
&lt;ChartDonutUtilization
  data={{ x: &#39;Storage capacity&#39;, y: 45 }}
  title=&quot;45%&quot;
  subTitle=&quot;of 100 GBps&quot;
  legendData={[
    { name: &#39;Storage capacity: 45%&#39; },
    { name: &#39;Warning threshold at 60%&#39; }, 
    { name: &#39;Danger threshold at 90%&#39; }
  ]}
  legendOrientation=&quot;vertical&quot;
  legendPosition=&quot;right&quot;
  padding={{
    bottom: 20,
    left: 20,
    right: 290,
    top: 20
  }}
  themeColor={ChartThemeColor.green}
  thresholds={[{ value: 60 }, { value: 90 }]}
  height={230}
  width={350}
  constrainToVisibleArea
  labels={({ datum }) =&gt; datum.x ? `${datum.x}: ${datum.y}%` : null}
/&gt;
</pre>

3) <strong>Refactor `height`, `padding`, `themeColor`, and `width` properties from `ChartDonutUtilization` to the `ChartDonutThreshold` component.</strong>

The `ChartDonutThreshold` component is a visual representation of donut utilization thresholds.

This is how the refactor should look. Copy this code to the editor:

<pre class="file" data-target="clipboard">
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
  &lt;ChartDonutUtilization
    data={{ x: &#39;Storage capacity&#39;, y: 45 }}
    title=&quot;45%&quot;
    subTitle=&quot;of 100 GBps&quot;
    labels={({ datum }) =&gt; datum.x ? `${datum.x}: ${datum.y}%` : null}
    legendData={[
      { name: &#39;Storage capacity: 45%&#39; },
      { name: &#39;Warning threshold at 60%&#39; }, 
      { name: &#39;Danger threshold at 90%&#39; }
    ]}
    legendOrientation=&quot;vertical&quot;
    legendPosition=&quot;right&quot;
    thresholds={[{ value: 60 }, { value: 90 }]}
  /&gt;
&lt;/ChartDonutThreshold&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/complex.png" alt="Complex chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
