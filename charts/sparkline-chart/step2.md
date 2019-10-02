We'll begin by adding a CSS selector to define the chart size...

- Katacoda is setting up a new React application for you. You'll be ready to code once the server starts and you can see "Welcome to PatternFly" on the lower pane.

## Task

1) Navigate to the `src` folder and open `src/app.css`{{open}}

2) Next we'll add some CSS to define the overall chart size and label layout

Copy the following code into the app.css file, replacing all of the content there:

<pre class="file" data-filename="src/app.css" data-target="replace">
.chart-container {
  height: 100px;
  width: 400px;
}
.chart-label-container {
  margin-left: 50px;
  margin-top: 50px;
  height: 135px;
}
</pre>

- Because Victory renders responsive containers, the Chart's width and height props do not determine the width and height of the chart in number of pixels, but instead define an aspect ratio for the chart. 
The exact number of pixels will depend on the size of the container the chart is rendered into. 
Typically, the parent container is set to the same width in order to maintain the aspect ratio.

We'll continue by creating a simple sparkline chart in the next step.
