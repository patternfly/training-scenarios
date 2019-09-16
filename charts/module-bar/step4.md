Now we'll add multiple datasets to the bar chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartBar 
  data={[
    { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 1 }, 
    { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 2 }, 
    { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 5 }, 
    { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 3 }
  ]} 
/&gt;
</pre>

3) Replace that section with the following code:

<pre class="file" data-target="clipboard">
&lt;ChartGroup offset={11}&gt;
  &lt;ChartBar
    data={[
      { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 1 }, 
      { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 2 }, 
      { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 5 }, 
      { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 3 }
    ]} 
  /&gt;
  &lt;ChartBar 
    data={[
      { name: &#39;Dogs&#39;, x: &#39;2015&#39;, y: 2 }, 
      { name: &#39;Dogs&#39;, x: &#39;2016&#39;, y: 1 }, 
      { name: &#39;Dogs&#39;, x: &#39;2017&#39;, y: 7 }, 
      { name: &#39;Dogs&#39;, x: &#39;2018&#39;, y: 4 }
    ]}
  /&gt;
  &lt;ChartBar 
    data={[
      { name: &#39;Birds&#39;, x: &#39;2015&#39;, y: 4 }, 
      { name: &#39;Birds&#39;, x: &#39;2016&#39;, y: 4 }, 
      { name: &#39;Birds&#39;, x: &#39;2017&#39;, y: 9 }, 
      { name: &#39;Birds&#39;, x: &#39;2018&#39;, y: 7 }
    ]}
  /&gt;
  &lt;ChartBar 
    data={[
      { name: &#39;Mice&#39;, x: &#39;2015&#39;, y: 3 }, 
      { name: &#39;Mice&#39;, x: &#39;2016&#39;, y: 3 }, 
      { name: &#39;Mice&#39;, x: &#39;2017&#39;, y: 8 }, 
      { name: &#39;Mice&#39;, x: &#39;2018&#39;, y: 5 }
    ]}
  /&gt;
&lt;/ChartGroup&gt;
</pre>

- The `ChartGroup` is the React Component used to apply properties to multiple `ChartBar` components
- The `offset` property is used to adjust each `ChartBar` from its original position

4) Once the preview reloads - it should look like this:
<img src="module-bar/assets/multiple.png" alt="Multiple dataset chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding tooltips to the chart in the next step.
