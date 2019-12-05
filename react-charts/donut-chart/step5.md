Change the donut chart theme color.

1) <strong>Make sure the App.js file is still open.</strong>

2) <strong>Locate the `<Chart>` component and add a property to change the theme.</strong>

It will look like this:

<pre class="file">
&lt;ChartDonut
  constrainToVisibleArea
  data={[{ x: &#39;Cats&#39;, y: 35 }, { x: &#39;Dogs&#39;, y: 55 }, { x: &#39;Birds&#39;, y: 10 }]}
  labels={({ datum }) =&gt; `${datum.name}: ${datum.y}%`}
  legendData={[
    { name: &#39;Cats: 35&#39; }, 
    { name: &#39;Dogs: 55&#39; }, 
    { name: &#39;Birds: 10&#39; }
  ]}
  legendOrientation=&quot;vertical&quot;
  legendPosition=&quot;right&quot;
  subTitle=&quot;Pets&quot;
  title=&quot;100&quot;
  height={230}
  width={350}
/&gt;
</pre>

3) <strong>Add the 'themeColor' property to the component.</strong>

The `themeColor` property specifies the theme color. Some valid values are `ChartThemeColor.blue`,  `ChartThemeColor.green`, or `ChartThemeColor.multi`.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

Once the preview reloads, it should look like this:
<img src="donut-chart/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
