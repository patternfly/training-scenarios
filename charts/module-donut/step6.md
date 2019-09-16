Now we'll change the donut chart theme color...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

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

3) Add the following property to that section:

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

- The `themeColor` property specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.

4) Once the preview reloads - it should look like this:
<img src="module-donut/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
