Now we'll change the donut utilization chart theme color...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

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

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

- The `themeColor` property specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.

4) Once the preview reloads - it should look like this:
<img src="module-donut-utilization/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding a donut threshold component in the next step.
