Begin by adding a CSS selector to define the chart size.

Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" is visible on the lower pane.

1) <strong>Navigate to the `src` folder and open `src/app.css`{{open}}</strong>

2) <strong>Add CSS to define the overall chart size.</strong>

Copy the following code into the `app.css` file, replacing all of the content.

<pre class="file" data-filename="src/app.css" data-target="replace">
.chart-container {
  height: 250px;
  width: 600px;
}
</pre>

<strong>Note: </strong>Victory renders responsive containers, so the chart's width and height props do not determine the width and height of the chart in number of pixels. Instead, they define an aspect ratio for the chart.

The exact number of pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set to the same width to maintain the aspect ratio.

