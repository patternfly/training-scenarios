Change the line chart theme color.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<Chart>` component and add a peroperty to change the theme.</strong>

It will look like this:

<pre class="file">
&lt;Chart
  constrainToVisibleArea
  containerComponent={&lt;ChartVoronoiContainer labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`} /&gt;}
  maxDomain={{y: 10}}
  minDomain={{y: 0}}
  legendData={[{ name: &#39;Cats&#39; }, { name: &#39;Birds&#39; }, { name: &#39;Dogs&#39; }, { name: &#39;Mice&#39; }]}
  legendOrientation=&quot;vertical&quot;
  legendPosition=&quot;right&quot;
  padding={{
    bottom: 75,
    left: 75,
    right: 200,
    top: 50
  }}
  height={250}
  width={600}
&gt;
</pre>

3) <strong>Add the `themeColor` property to the component.</strong>

The `themeColor` property specifies the theme color. Some valid values are `ChartThemeColor.blue`,  `ChartThemeColor.green`, or `ChartThemeColor.multi`.

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

Once the preview reloads, it should look like this:
<img src="line-chart/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
