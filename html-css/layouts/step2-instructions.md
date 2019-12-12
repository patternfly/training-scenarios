The level layout distributes space between children evenly and center them on the x-axis. By default, the children are placed horizontally and wrap responsively.

In this step, layout the title and button horizontally.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add a card component to the `index.html` file.

The card has a title component and button component inside of it.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card&quot;&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
    &lt;h1 class=&quot;pf-c-title pf-m-xl&quot;&gt;
      Large title
    &lt;/h1&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Click me
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Locate the parent of the `title` and `button` components.</strong>

3) <strong>Add the level layout class to the parent identified in step 2.</strong>

The level layout class is `pf-l-level`.

When added to the parent it should look like:
`<div class="pf-c-card__body pf-l-level"`

<strong>Note: </strong> The title and button should now align on the x-axis.
