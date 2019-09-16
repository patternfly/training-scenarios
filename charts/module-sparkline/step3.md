Now we'll create a simple sparkline chart...

## Task

1) Navigate to the `src` folder and open `src/App.js`{{open}}

2) Next, we'll set up the general structure of the chart and the necessary import statements.

Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import './app.css';
import {
  ChartArea,
  ChartGroup,
  ChartLabel,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts';

function App() {
  return (
    &lt;div className=&quot;chart-label-container&quot;&gt;
      &lt;div className=&quot;chart-container&quot;&gt;
        &lt;ChartGroup
          maxDomain={{y: 9}}
          padding={0}
          height={100}
          width={400}
        &gt;
          &lt;ChartArea
            data={[
              { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 3 }, 
              { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 4 }, 
              { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 8 }, 
              { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 6 }
            ]}
          /&gt;
        &lt;/ChartGroup&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default App;
</pre>

- The `maxDomain` property defines the maximum domain value for a chart

3) When the server reloads, you should see something like this:
<img src="module-sparkline/assets/simple.png" alt="Simple chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding tooltips to the chart in the next step.
