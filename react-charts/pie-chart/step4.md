Add a legend to the pie chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the code for the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
&lt;ChartPie
  constrainToVisibleArea
  data={[{ x: &#39;Cats&#39;, y: 35 }, { x: &#39;Dogs&#39;, y: 55 }, { x: &#39;Birds&#39;, y: 10 }]}
  labels={({ datum }) =&gt; `${datum.name}: ${datum.y}%`}
  height={230}
  width={350}
/&gt;
</pre>

3) <strong>Add the `padding` property to that section:</strong>

In this case, give it the following values. More padding will be added to the right property to accommodate the axis labels.

<pre class="file" data-target="clipboard">
padding={{
  bottom: 20,
  left: 20,
  right: 140,
  top: 20
}}
</pre>


4) <strong>Add the `LegendOrientation` and `legendPosition` properties to the component.</strong>

The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically.

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats: 35&#39; }, 
  { name: &#39;Dogs: 55&#39; }, 
  { name: &#39;Birds: 10&#39; }
]}
legendOrientation=&quot;vertical&quot;
legendPosition=&quot;right&quot;
</pre>

Once the preview reloads, it should look like this:
<img src="pie-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />