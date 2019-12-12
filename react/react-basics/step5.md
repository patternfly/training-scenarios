Add content and a layout to the `CardFooter` to complete the card.

1) <strong>Add a split layout to the `CardFooter` component.</strong>

a) <strong>Locate the `CardFooter` component.</strong>

b) <strong>Add the layout to the `CardFooter`.</strong>

PatternFly offers several layout options, including grid, bullseye, and split layouts.

Use a split layout to separate a pair of buttons in the footer of the card. The split layout is designed to position items horizontally. Add a `<SplitItem>` component inside `<Split>` for each item in the layout.

<pre class="file" data-target="clipboard">
&lt;Split&gt;
  &lt;SplitItem&gt;
  &lt;/SplitItem&gt;
  &lt;SplitItem&gt;
  &lt;/SplitItem&gt;
&lt;/Split&gt;
</pre>

2) <strong>Add a button to the first `SplitItem` component.</strong>

Use the `link` variant of the button and add an `isInline` prop so that the buttons are inline rather than block elements.

<pre class="file" data-target="clipboard">
&lt;Button variant=&quot;link&quot; isInline>Link to PatternFly&lt;/Button&gt;
</pre>

3) <strong>Add a button to the second `SplitItem` component.</strong>

Use the same variant and props as step 2.

<pre class="file" data-target="clipboard">
&lt;Button variant=&quot;link&quot; isInline>Link to home&lt;/Button&gt;
</pre>

4) <strong>Add a gutter prop to the `Split` component to add more spacing between the buttons.</strong>

The `Split` component should look like this with the gutter set to `md` (medium) spacing.

<pre class="file" data-target="clipboard">
&lt;Split gutter="md"&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="react-basics/assets/final-card.png" alt="Completed card component with header, icon, body, and footer links" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
