Now we'll change the sparkline chart theme color...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartGroup
  constrainToVisibleArea
  containerComponent={&lt;ChartVoronoiContainer labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`} /&gt;}
  maxDomain={{y: 9}}
  padding={0}
  height={100}
  width={400}
&gt;
</pre>

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

- The `themeColor` property specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.

4) Once the preview reloads - it should look like this:
<img src="sparkline-chart/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
