The Level Layout is designed to distribute space between children evenly and center them on the x-axis. By default the children are placed horizontally and wrap responsively.

## Task: Layout title and button horizontally.

a. Copy code to the editor:

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

b. Add `pf-l-level` to the parent `<div>` of the title and button elements. Hint it is `pf-c-card__body`.

c. The title and button are now aligned on the x-axis.
