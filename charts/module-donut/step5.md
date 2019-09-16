Now we'll add a legend to the donut chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartDonut
  constrainToVisibleArea
  data={[{ x: &#39;Cats&#39;, y: 35 }, { x: &#39;Dogs&#39;, y: 55 }, { x: &#39;Birds&#39;, y: 10 }]}
  labels={({ datum }) =&gt; `${datum.name}: ${datum.y}%`}
  subTitle=&quot;Pets&quot;
  title=&quot;100&quot;
  height={230}
  width={350}
/&gt;
</pre>

3) Replace the following property in that section:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 20,
  left: 20,
  right: 140,
  top: 20
}}
</pre>

- This adds more padding to the right property to accommodate the legend.

4) Add the following properties to that section:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats: 35&#39; }, 
  { name: &#39;Dogs: 55&#39; }, 
  { name: &#39;Birds: 10&#39; }
]}
legendOrientation=&quot;vertical&quot;
legendPosition=&quot;right&quot;
</pre>

- The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically
- The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart

5) Once the preview reloads - it should look like this:
<img src="module-donut/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by changing the chart's theme color in the next step.
