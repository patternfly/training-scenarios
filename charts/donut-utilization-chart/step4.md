Now we'll add thresholds to the donut utilization chart...

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;ChartDonutUtilization
  data={{ x: &#39;Storage capacity&#39;, y: 90 }}
  title=&quot;90%&quot;
  subTitle=&quot;of 100 GBps&quot;
  height={230}
  width={350}
/&gt;
</pre>

3) Add the following properties to that section:

<pre class="file" data-target="clipboard">
thresholds={[{ value: 60 }, { value: 90 }]}
</pre>

- The dynamic portion of the chart will change colors when data points reach the given `thresholds` properties
- This will change the dynamic portion of the chart to red

4) Locate the code that looks like the following:

<pre class="file">
data={{ x: &#39;Storage capacity&#39;, y: 90 }}
title=&quot;90%&quot;
</pre>

5) Replace the following property in that section:

<pre class="file" data-target="clipboard">
data={{ x: &#39;Storage capacity&#39;, y: 60 }}
title=&quot;60%&quot;
</pre>

- This will change the dynamic portion of the chart to yellow

6) Replace the following property in that section:

<pre class="file" data-target="clipboard">
data={{ x: &#39;Storage capacity&#39;, y: 45 }}
title=&quot;45%&quot;
</pre>

- This will return the dynamic portion of the chart to the default color

7) Once the preview reloads - it should look like this:
<img src="donut-utilization-chart/assets/thresholds.png" alt="Chart with thresholds" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding tooltips to the chart in the next step.
