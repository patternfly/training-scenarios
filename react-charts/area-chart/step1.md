PatternFly React charts are based on the [Victory chart](https://formidable.com/open-source/victory/docs/victory-chart/) library, along with additional functionality, custom components, and theming for PatternFly. 
This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior. 

PatternFly React charts are composed using separate components, so features are more easily customizable. 
In this course, we're going to build a PatternFly area chart together - starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color.

You will learn how to use PatternFly React chart components together to build a consistent user experience.

The image below is what we'll end up with when we are done.

<img src="area-chart/assets/final.png" alt="Completed chart component" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

## Task

1) <strong> Navigate to the `src` folder and open `src/app.css`{{open}}.</strong>

2) Next you will <strong>add some CSS </strong>to define the overall chart size.

3) <strong>Copy the following code into the app.css file, replacing all of the content there:</strong>

<pre class="file" data-filename="src/app.css" data-target="replace">
.chart-container {
  height: 250px;
  width: 600px;
}
