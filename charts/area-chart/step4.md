Now we'll add multiple datasets to the area chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

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

3) Replace that section with the following code:

<pre class="file" data-target="clipboard">
&lt;ChartGroup&gt;
  &lt;ChartArea
    data={[
      { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 3 }, 
      { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 4 }, 
      { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 8 }, 
      { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 6 }
    ]}
    interpolation="basis"
  /&gt;
  &lt;ChartArea 
    data={[
      { name: &#39;Dogs&#39;, x: &#39;2015&#39;, y: 2 }, 
      { name: &#39;Dogs&#39;, x: &#39;2016&#39;, y: 3 }, 
      { name: &#39;Dogs&#39;, x: &#39;2017&#39;, y: 4 }, 
      { name: &#39;Dogs&#39;, x: &#39;2018&#39;, y: 5 },
      { name: &#39;Dogs&#39;, x: &#39;2019&#39;, y: 6 }
    ]}
    interpolation="basis"
  /&gt;
  &lt;ChartArea 
    data={[
      { name: &#39;Birds&#39;, x: &#39;2015&#39;, y: 1 }, 
      { name: &#39;Birds&#39;, x: &#39;2016&#39;, y: 2 }, 
      { name: &#39;Birds&#39;, x: &#39;2017&#39;, y: 3 }, 
      { name: &#39;Birds&#39;, x: &#39;2018&#39;, y: 2 },
      { name: &#39;Birds&#39;, x: &#39;2019&#39;, y: 4 }
    ]}
    interpolation="basis"
  /&gt;
&lt;/ChartGroup&gt;
</pre>

- The `ChartGroup` is the React Component used to apply properties to multiple `ChartArea` components

4) Once the preview reloads - it should look like this:
<img src="area-chart/assets/multiple.png" alt="Multiple dataset chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding tooltips to the chart in the next step.
