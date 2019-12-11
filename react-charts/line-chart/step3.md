Add multiple datasets to the line chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<ChartLine>` component.</strong>

It will look like this:

<pre class="file">
&lt;ChartLine 
  data={[
    { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 1 }, 
    { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 2 }, 
    { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 5 }, 
    { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 3 }
  ]} 
/&gt;
</pre>

3) <strong>Replace the `ChartLine` component with multiple `ChartLine` components wrapped in a `ChartGroup` component.</strong>

`ChartGroup` is the React Component used to apply properties to multiple `ChartLine` components.  The `strokeDasharray` property is used to show a dashed line.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
&lt;ChartGroup&gt;
  &lt;ChartLine
    data={[
      { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 1 }, 
      { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 2 }, 
      { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 5 }, 
      { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 3 }
    ]} 
  /&gt;
  &lt;ChartLine 
    data={[
      { name: &#39;Dogs&#39;, x: &#39;2015&#39;, y: 2 }, 
      { name: &#39;Dogs&#39;, x: &#39;2016&#39;, y: 1 }, 
      { name: &#39;Dogs&#39;, x: &#39;2017&#39;, y: 7 }, 
      { name: &#39;Dogs&#39;, x: &#39;2018&#39;, y: 4 }
    ]}
    style={{
      data: {
        strokeDasharray: &#39;3,3&#39;
      }
    }}
  /&gt;
  &lt;ChartLine 
    data={[
      { name: &#39;Birds&#39;, x: &#39;2015&#39;, y: 4 }, 
      { name: &#39;Birds&#39;, x: &#39;2016&#39;, y: 4 }, 
      { name: &#39;Birds&#39;, x: &#39;2017&#39;, y: 9 }, 
      { name: &#39;Birds&#39;, x: &#39;2018&#39;, y: 7 }
    ]}
  /&gt;
  &lt;ChartLine 
    data={[
      { name: &#39;Mice&#39;, x: &#39;2015&#39;, y: 3 }, 
      { name: &#39;Mice&#39;, x: &#39;2016&#39;, y: 3 }, 
      { name: &#39;Mice&#39;, x: &#39;2017&#39;, y: 8 }, 
      { name: &#39;Mice&#39;, x: &#39;2018&#39;, y: 5 }
    ]}
  /&gt;
&lt;/ChartGroup&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="line-chart/assets/multiple.png" alt="Multiple dataset chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

