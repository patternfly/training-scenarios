Add thresholds to the donut utilization chart.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<Chart>` component.</strong>

It will look like this:

<pre class="file">
&lt;ChartDonutUtilization
  data={{ x: &#39;Storage capacity&#39;, y: 90 }}
  title=&quot;90%&quot;
  subTitle=&quot;of 100 GBps&quot;
  height={230}
  width={350}
/&gt;
</pre>

3) <strong>Add a `thresholds` property to the `<Chart>` component.</strong>

The dynamic portion of the chart will change colors when data points reach the given `thresholds` properties.  This will change the dynamic portion of the chart to red.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
thresholds={[{ value: 60 }, { value: 90 }]}
</pre>

4) <strong>Locate the `data` and `title` properties in the `<Chart>` component.</strong> 

It will look like the following:

<pre class="file">
data={{ x: &#39;Storage capacity&#39;, y: 90 }}
title=&quot;90%&quot;
</pre>

5) <strong>Replace the `data` and `title` properties in the `<Chart>` component.</strong> 

This will change the dynamic portion of the chart to yellow.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
data={{ x: &#39;Storage capacity&#39;, y: 60 }}
title=&quot;60%&quot;
</pre>

6) <strong>Replace the `data` and `title` properties in the `<Chart>` component.</strong> 

This will return the dynamic portion of the chart to the default color.

Copy this code to the editor:

<pre class="file" data-target="clipboard">
data={{ x: &#39;Storage capacity&#39;, y: 45 }}
title=&quot;45%&quot;
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/thresholds.png" alt="Chart with thresholds" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
