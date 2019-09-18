Now we'll create a simple stack `Chart` component...

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
  ChartAxis,
  ChartBar,
  ChartStack,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts';

function App() {
  return (
    &lt;div className=&quot;chart-container&quot;&gt;
      &lt;Chart
        domainPadding={{ x: [30, 25] }}
        height={250}
        width={600}
      &gt;
        &lt;ChartBar 
          data={[
            { name: &#39;Cats&#39;, x: &#39;2015&#39;, y: 1 }, 
            { name: &#39;Cats&#39;, x: &#39;2016&#39;, y: 2 }, 
            { name: &#39;Cats&#39;, x: &#39;2017&#39;, y: 5 }, 
            { name: &#39;Cats&#39;, x: &#39;2018&#39;, y: 3 }
          ]} 
        /&gt;
      &lt;/Chart&gt;
    &lt;/div&gt;
  );
}

export default App;
</pre>

- `ChartBar` is the React component used to add data to the Chart -- `ChartArea` could be used instead.
- The `domainPadding` property adjusts the position of the first/last `ChartBar`

3) When the server reloads, you should see something like this:
<img src="stack-chart/assets/simple.png" alt="Simple chart" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

We'll continue by adding multiple datasets to the chart in the next step.
