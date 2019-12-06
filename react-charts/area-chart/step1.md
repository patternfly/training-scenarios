<<<<<<< HEAD
<<<<<<< HEAD
This step will begin by adding a CSS selector to define the chart size.
=======
Begin by adding a CSS selector to define the chart size.
>>>>>>> 8e7b2db643a6d7af430c00829f5c60764581c387

Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" is visible on the lower pane.

1) <strong>Navigate to the `src` folder and open `src/app.css`{{open}}</strong>

2) <strong>Add CSS to define the overall chart size.</strong>

<<<<<<< HEAD
Copy the following code into the `app.css` file, replacing all of the content there:
=======
Begin by adding a CSS selector to define the chart size.

Katacoda is setting up a new React application. Begin coding once the server starts and "Welcome to PatternFly" is visible on the lower pane.

1) <strong>Navigate to the `src` folder and open `src/app.css`{{open}}</strong>

2) <strong>Add CSS to define the overall chart size.</strong>

Copy the following code into the `app.css` file, replacing all the content.
>>>>>>> upstream/master
=======
Copy the following code into the `app.css` file, replacing all the content.
>>>>>>> 8e7b2db643a6d7af430c00829f5c60764581c387

<pre class="file" data-filename="src/app.css" data-target="replace">
.chart-container {
  height: 250px;
  width: 600px;
}
</pre>

<<<<<<< HEAD
<<<<<<< HEAD
<strong>Note: </strong>Because Victory renders responsive containers, the chart's width and height props do not determine the width and height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set to the same width in order to maintain the aspect ratio.

We will continue by creating a simple area chart in the next step.

<!-- The image below is what we'll end up with when we are done.

<img src="area-chart/assets/final.png" alt="Completed chart component" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" /> -->
=======
<strong>Note: </strong>Victory renders responsive containers, so the chart's width and height props do not determine the width and height of the chart in number of pixels. Instead, they define an aspect ratio for the chart.

The exact number of pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set to the same width to maintain the aspect ratio.
>>>>>>> upstream/master
=======
<strong>Note: </strong>Victory renders responsive containers, so the chart's width and height props do not determine the width and height of the chart in number of pixels. Instead, they define an aspect ratio for the chart.

The exact number of pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set to the same width to maintain the aspect ratio.
>>>>>>> 8e7b2db643a6d7af430c00829f5c60764581c387
