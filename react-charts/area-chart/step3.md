Add multiple datasets to the area chart.

1) <strong>Make sure `App.js` is still open.</strong>

2) <strong>Locate the code within the `<ChartArea/>` component.</strong>

It will look like this:

<pre class="file">
&lt;ChartArea
  data={[
    { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 3 }, 
    { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 4 }, 
    { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 8 }, 
    { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 6 }
  ]} 
/&gt;
</pre>

3) <strong>Replace the `ChartArea` component with multiple `ChartArea` components wrapped in a `ChartGroup` component.</strong>

`ChartGroup` is the React Component used to apply properties to multiple `ChartArea` components.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
&lt;ChartGroup&gt;
  &lt;ChartArea
    data={[
      { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 3 }, 
      { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 4 }, 
      { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 8 }, 
      { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 6 }
    ]}
    interpolation="monotoneX"
  /&gt;
  &lt;ChartArea 
    data={[
      { name: &#39;Dogs&#39;, x: &#39;2015&#39;, y: 2 }, 
      { name: &#39;Dogs&#39;, x: &#39;2016&#39;, y: 3 }, 
      { name: &#39;Dogs&#39;, x: &#39;2017&#39;, y: 4 }, 
      { name: &#39;Dogs&#39;, x: &#39;2018&#39;, y: 5 },
      { name: &#39;Dogs&#39;, x: &#39;2019&#39;, y: 6 }
    ]}
    interpolation="monotoneX"
  /&gt;
  &lt;ChartArea 
    data={[
      { name: &#39;Birds&#39;, x: &#39;2015&#39;, y: 1 }, 
      { name: &#39;Birds&#39;, x: &#39;2016&#39;, y: 2 }, 
      { name: &#39;Birds&#39;, x: &#39;2017&#39;, y: 3 }, 
      { name: &#39;Birds&#39;, x: &#39;2018&#39;, y: 2 },
      { name: &#39;Birds&#39;, x: &#39;2019&#39;, y: 4 }
    ]}
    interpolation="monotoneX"
  /&gt;
&lt;/ChartGroup&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="area-chart/assets/multiple.png" alt="Multiple dataset chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
