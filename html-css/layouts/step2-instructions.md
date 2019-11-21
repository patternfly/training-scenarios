The Level Layout is designed to distribute space between children evenly and center them on the x-axis. By default the children are placed horizontally and wrap responsively.

## Task: Layout title and button horizontally.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add a Card component in the `index.html` file.

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

2) Add `pf-l-level` to the parent `<div>` of the title and button elements. 

<strong>Hint: </strong>Add it to `pf-c-card__body`.

The title and button should now aligned on the x-axis.
