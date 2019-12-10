Add a legend to the stack chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the code for the `padding` property in the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
&lt;Chart
  containerComponent={&lt;ChartVoronoiContainer labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`} /&gt;}
  domainPadding={{ x: [30, 25] }}
  padding={{
    bottom: 75,
    left: 75,
    right: 50,
    top: 50
  }}
  height={250}
  width={600}
&gt;
</pre>

3) <strong>Update the padding for the right value to accommodate the legend.</strong>

  `right: 200`

4) <strong>Add the `legendOrientation` property to the `<Chart>` component.</strong>

Set the orientation for the `legendData` so that it behaves as expected when added in step 6 (there will be no visible changes yet).

The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically. In this case it should be set to vertical:

<pre class="file" data-target="clipboard">
legendOrientation=&quot;vertical&quot;
</pre>

5) <strong>Add the `legendPosition` property to the `<Chart>` component.</strong>

Set the position for the `legendData` so that it behaves as expected when added in step 6 (there will still be no visible changes yet).

The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart. It should look like the following:

<pre class="file" data-target="clipboard">
legendPosition=&quot;right&quot;
</pre>

6) <strong>Add the `legendData` property to the `<Chart>` component.</strong>

Inside the `legendData` should be an object with names for the data. It should look like the following:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats&#39; }, 
  { name: &#39;Dogs&#39; }, 
  { name: &#39;Birds&#39; }, 
  { name: &#39;Mice&#39; }
]}
</pre>

Once the preview reloads, it should look like this:
<img src="stack-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />