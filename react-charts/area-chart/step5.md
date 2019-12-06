Add axis labels to the area chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the code for the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
&lt;Chart
  height={250}
  width={600}
  containerComponent={
  &lt;ChartVoronoiContainer
    constrainToVisibleArea
    labels={({ datum }) =&gt; `${datum.name}: ${datum.y}`}
  /&gt;
}
&gt;
</pre>

3) <strong>Add the `padding` property to that section:</strong>

In this case, give it the following values. More padding will be added to the bottom and left properties to accommodate the axis labels.

- bottom: 75
- left: 75
- right: 50
- top: 50

It should look like this:

<pre class="file" data-target="clipboard">
padding={{
  bottom: 75,
  left: 75,
  right: 50,
  top: 50
}}
</pre>

4) <strong>Locate the code between the `<Chart>` and `<ChartGroup>`.</strong>

<pre class="file">
&lt;Chart&gt;
&lt;/Chart&gt;

&lt;ChartGroup&gt;
&lt;/ChartGroup&gt;
</pre>

5) <strong>Between these components add the `<ChartAxis>` components.</strong>

The `<Chart>` component displays an axis by default. Add labels and grid lines here to enhance the component.

a) <strong>Add the `<ChartAxis>` component with a label property.</strong>

It should look like this:

<pre class="file" data-target="clipboard">
&lt;ChartAxis label=&quot;Years&quot;/&gt;
</pre>

b) <strong>Add another `<ChartAxis>` component with multiple properties.</strong>

The `dependentAxis` property specifies whether the axis corresponds to dependent data points (e.g., usually the y-axis).

The `showGrid` property displays grid lines along that axis.

It should look like this:

<pre class="file" data-target="clipboard">
&lt;ChartAxis dependentAxis showGrid label=&quot;Percentage&quot;/&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="area-chart/assets/axis.png" alt="Chart with axis labels" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
