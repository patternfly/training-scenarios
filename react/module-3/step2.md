In PatternFly 4, charts are composed using separate components so features are more easily customizable. For example, ChartAxis, ChartBar, and CharGroup may be added as children of Chart. 

There are many more components available for creating various types of charts, for example; area, bar, bullet, donut, donut utilization, line, pie, scatter, and stack.

In this exercise, we'll start by creating a simple bar chart, then add multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. The image below is what we'll end up with when we are done.

<img src="module-3/assets/final.png" alt="Completed chart component" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

## Task
Katacoda is setting up a new React application for you. You'll be ready to code once the server starts and you can see "Welcome to PatternFly" on the lower pane.

1) Navigate to the `src` folder and open `src/app.css`{{open}}

2) Next we'll set up some css to show how PatternFly uses css variables

Copy the following code into the app.css file, replacing all of the content there:

<pre class="file" data-filename="src/app.css" data-target="replace">
.bar-chart {
  height: 250px;
  width: 600px;
}
</pre>

Because Victory renders responsive containers, the Chart's width and height props do not determine the width and height
of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of pixels will 
depend on the size of the container the chart is rendered into. Typically, the parent container is set to the same width
in order to maintain the aspect ratio.

We'll continue by creating a simple bar chart in the next step.
