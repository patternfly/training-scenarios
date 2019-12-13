Create a simple bullet chart.

1) <strong>Navigate to the `src` folder and open `src/App.js`{{open}}</strong>

2) <strong>Set up the general structure of the chart and the necessary import statements.</strong>

Copy the following code into the `App.js` file, replacing all of the content there:

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
        height={150}
        width={600}
        maxDomain={{y: 100}}
        primarySegmentedMeasureData={[{ name: &#39;Measure&#39;, y: 25 }, { name: &#39;Measure&#39;, y: 60 }]}
      /&gt;
    &lt;/div&gt;
  );
}

export default App;
</pre>

- The `maxDomain` property defines the the maximum value that can be expressed on each axis.
- The `primarySegmentedMeasureData` property adds the featured meausure to the chart. It appears as a blue bar by default.

3) <strong>Add the `qualitativeRangeData` property to the `ChartBullet` component.</strong>

The `qualitativeRangeData` property adds descriptive ranges like 'poor', 'average', or 'great' to the chart. These ranges appear as grayscale boxes in the background by default.

It should look like this:

<pre class="file" data-target="clipboard">qualitativeRangeData={[{ name: &#39;Range&#39;, y: 50 }, { name: &#39;Range&#39;, y: 75 }]}</pre>


4) <strong>Add the `comparativeWarningMeasureData` property to the `ChartBullet` component.</strong>

The `comparativeWarningMeasureData` property adds warning thresholds to the chart. Each threshold will appear as a yellow tick mark.

It should look like this:

<pre class="file" data-target="clipboard">comparativeWarningMeasureData={[{ name: &#39;Warning&#39;, y: 88 }]}</pre>

When the preview reloads, it should look like this:
<img src="bullet-chart/assets/simple.png" alt="Simple chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
