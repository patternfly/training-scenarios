Now we'll create a simple bullet chart...

## Task

1) Navigate to the `src` folder and open `src/App.js`{{open}}

2) Next, we'll set up the general structure of the chart and the necessary import statements.

Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import './app.css';
import {
  Chart,
  ChartBullet,
  ChartThemeColor
} from '@patternfly/react-charts';

function App() {
  return (
    &lt;div className=&quot;chart-container&quot;&gt;
      &lt;ChartBullet
        maxDomain={{y: 100}}
        comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}
        primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 60 }]}
        qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}
        height={150}
        width={600}
      /&gt;
    &lt;/div&gt;
  );
}

export default App;
</pre>

- The `maxDomain` property defines the maximum domain value for a chart
- The `qualitativeRangeData` property adds qualitative ranges to the bullet chart
- The `primarySegmentedMeasureData` property adds a primary measure to the bullet chart
- The `comparativeWarningMeasureData` property adds comparative warning measure to the bullet chart

3) When the server reloads, you should see something like this:
<img src="bullet-chart/assets/simple.png" alt="Simple chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding tooltips to the chart in the next step.
