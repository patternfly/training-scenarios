Now we'll add a label to the sparkline chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;div className=&quot;chart-container&quot;&gt;
  ...
&lt;/div&gt;
</pre>

3) 5) Add the following code below that section:

<pre class="file" data-target="clipboard">
&lt;ChartLabel text=&quot;CPU utilization&quot;/&gt;
</pre>

5) Once the preview reloads - it should look like this:
<img src="module-sparkline/assets/label.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by changing the chart's theme color in the next step.
