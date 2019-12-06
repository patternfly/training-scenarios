<<<<<<< HEAD
<<<<<<< HEAD
In this step you will add a legend to the area chart.

1) <strong>Make sure the `App.js` file is still open.
=======
Add a legend to the area chart.

1) <strong>Make sure the `App.js` file is still open.</strong>
>>>>>>> upstream/master
=======
Add a legend to the area chart.

1) <strong>Make sure the `App.js` file is still open.</strong>
>>>>>>> 8e7b2db643a6d7af430c00829f5c60764581c387

2) <strong>Locate the code for the `padding` property in the `<Chart>` component.</strong>

It should look like this:

<pre class="file">
<<<<<<< HEAD
<<<<<<< HEAD
  padding={{
    bottom: 75,
    left: 75,
    right: 50,
    top: 50
  }}
=======
padding={{
  bottom: 75,
  left: 75,
  right: 50,
  top: 50
}}
>>>>>>> 8e7b2db643a6d7af430c00829f5c60764581c387
</pre>

3) <strong>Update the padding for the right value to accommodate the legend.</strong>

`right: 200`

4) <strong>Add the `legendOrientation` property to the `<Chart>` component.</strong>

You will need to set the orientation for the `legendData` so that it behaves as expected when you add it in step 6 (there will be no visible changes yet).

The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically. In this case it should be set to vertical:

<pre class="file" data-target="clipboard">
legendOrientation=&quot;vertical&quot;
</pre>

5) <strong>Add the `legendPosition` property to the `<Chart>` component.</strong>

You will need to set the position for the `legendData` so that it behaves as expected when you add it in step 6 (there will still be no visible changes yet).

The `legendPosition` property specifies whether the legend is rendered on the bottom or right of the chart. It should look like the following:

=======
padding={{
  bottom: 75,
  left: 75,
  right: 50,
  top: 50
}}
</pre>

3) <strong>Update the padding for the right value to accommodate the legend.</strong>

`right: 200`

4) <strong>Add the `legendOrientation` property to the `<Chart>` component.</strong>

Set the orientation for the `legendData` so that it behaves as expected when added in step 6 (there will be no visible changes yet).

The `legendOrientation` property specifies whether the legend is rendered horizontally or vertically. In this case it should be set to vertical:

>>>>>>> upstream/master
<pre class="file" data-target="clipboard">
legendPosition=&quot;right&quot;
</pre>

<<<<<<< HEAD
<<<<<<< HEAD
6) <strong>Add the `legendPosition` property to the `<Chart>` component.</strong>
=======
5) <strong>Add the `legendPosition` property to the `<Chart>` component.</strong>

Set the position for the `legendData` so that it behaves as expected when added in step 6 (there will still be no visible changes yet).
>>>>>>> upstream/master
=======
6) <strong>Add the `legendData` property to the `<Chart>` component.</strong>
>>>>>>> 8e7b2db643a6d7af430c00829f5c60764581c387

Inside the `legendData` should be an object with names for the data. It should look like the following:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats&#39; }, 
  { name: &#39;Dogs&#39; }, 
  { name: &#39;Birds&#39; }, 
  { name: &#39;Mice&#39; }
]}
</pre>

<<<<<<< HEAD
<<<<<<< HEAD
Once the preview reloads it should look like this:
<img src="area-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

You will continue by changing the chart's theme color in the next step.
=======
6) <strong>Add the `legendData` property to the `<Chart>` component.</strong>

Inside the `legendData` should be an object with names for the data. It should look like the following:

<pre class="file" data-target="clipboard">
legendData={[
  { name: &#39;Cats&#39; }, 
  { name: &#39;Dogs&#39; }, 
  { name: &#39;Birds&#39; }, 
  { name: &#39;Mice&#39; }
]}
</pre>

Once the preview reloads, it should look like this:
<img src="area-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
>>>>>>> upstream/master
=======
Once the preview reloads, it should look like this:
<img src="area-chart/assets/legend.png" alt="Chart with legend" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
>>>>>>> 8e7b2db643a6d7af430c00829f5c60764581c387
