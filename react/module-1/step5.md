Now we'll add content to the `CardFooter` to complete our card.

## Task
1) Add a split layout to the `CardFooter` component

PatternFly 4 offers several layout options, including grid, bullseye, and split layouts.

In this exercise, we'll be using a split layout to separate a pair of buttons in the footer of our card. We'll be adding a `<SplitItem>` component inside `<Split>` for each item in the layout.

<pre class="file" data-target="clipboard">
&lt;Split&gt;
  &lt;SplitItem&gt;
  &lt;/SplitItem&gt;
  &lt;SplitItem&gt;
  &lt;/SplitItem&gt;
&lt;/Split&gt;
</pre>

2) Add a button to the first `SplitItem` component

Buttons communicate and trigger actions a user can take in an application or website. They come in several variations, such as `primary`, `secondary`, `danger`, `plain`, and `link`.

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
![Step 8 card](module-1/assets/step8.png)