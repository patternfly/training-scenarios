Change the donut utilization chart theme color.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<Chart>` component and add a property to change the theme.</strong>

It should look like this:

<pre class="file">
&lt;ChartDonutUtilization
  constrainToVisibleArea
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
  padding={{
    bottom: 20,
    left: 20,
    right: 290,
    top: 20
  }}
  thresholds={[{ value: 60 }, { value: 90 }]}
  height={230}
  width={350}
/&gt;
</pre>

3) <strong>Add the `themeColor` property to the component.</strong>

The `themeColor` property specifies the theme color. Some valid values are `ChartThemeColor.blue`,  `ChartThemeColor.green`, or `ChartThemeColor.multi`.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

