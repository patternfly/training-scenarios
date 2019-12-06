Create a simple donut utilization chart.

1) <strong>Navigate to the `src` folder and open `src/App.js`{{open}}</strong>

2) <strong>Set up the general structure of the chart and the necessary import statements.</strong>

Copy the following code into the `App.js` file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import './app.css';
import {
  ChartAxis,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartThemeColor
} from '@patternfly/react-charts';

function App() {
  return (
    &lt;div className=&quot;chart-container&quot;&gt;
      &lt;ChartDonutUtilization
        data={{ x: &#39;Storage capacity&#39;, y: 90 }}
        title=&quot;90%&quot;
        subTitle=&quot;of 100 GBps&quot;
        height={230}
        width={500}
      /&gt;
    &lt;/div&gt;
  );
}

export default App;
</pre>

Once the preview reloads, it should look like this:
<img src="donut-utilization-chart/assets/simple.png" alt="Simple chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
