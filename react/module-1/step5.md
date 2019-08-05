Now we'll add content to the `CardFooter` to complete our card.

## Task
1) Add a split layout to the `CardFooter` component

PatternFly 4 offers several layout options, including grid, bullseye, and split layouts.

In this exercise, we'll be using a split layout to separate a pair of buttons in the footer of our card. The split layout is designed to position items horizontally.  We'll be adding a `<SplitItem>` component inside `<Split>` for each item in the layout.

<pre class="file" data-target="clipboard">
&lt;CardFooter&gt;
  &lt;Split&gt;
    &lt;SplitItem&gt;
    &lt;/SplitItem&gt;
    &lt;SplitItem&gt;
    &lt;/SplitItem&gt;
  &lt;/Split&gt;
&lt;/CardFooter&gt;
</pre>

2) Add a button to the first `SplitItem` component

We'll be using the `link` variant and adding an `isInline` prop so that the buttons are inline rather than block elements.

<pre class="file" data-target="clipboard">
&lt;SplitItem&gt;
  &lt;Button variant=&quot;link&quot; isInline>Link to PatternFly&lt;/Button&gt;
&lt;/SplitItem&gt;
</pre>

3) Add a second button to the second `SplitItem` component:

<pre class="file" data-target="clipboard">
&lt;SplitItem&gt;
  &lt;Button variant=&quot;link&quot; isInline>Link to home&lt;/Button&gt;
&lt;/SplitItem&gt;
</pre>

4) Add a gutter prop to the `Split` component to add more spacing between the buttons:

<pre class="file" data-target="clipboard">
&lt;Split gutter="md"&gt;
</pre>

When these steps are complete - the finished card should look like this:
<img src="module-1/assets/final-card.png" alt="Completed card component with header, icon, body, and footer links" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
