In PatternFly, layouts allow for organizing and grouping elements. This module covers just one of the seven layouts, to learn about all seven layouts, explore the layout module which does a deep dive into layouts.

Add a bullseye layout class to the HTML markup.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add HTML for a card component to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div&gt;
  &lt;div class=&quot;pf-c-card&quot;&gt;
    &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-md&quot;&gt;
      Header
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card__body&quot;&gt;
      Body
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card__footer&quot;&gt;
      Footer
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Add the bullseye class to the card.</strong>

This will allow the card to be centered horizontally and vertically on the page.

Find the outermost `<div>` wrapper for the card and add the class `pf-l-bullseye`.

It should look like: `<div class="pf-l-bullseye">`

Once the preview reloads, the card should be centered in the middle of the page.

<strong>Note: </strong>It’s important to follow the documentation for layouts because it will demonstrate where to add the layout class. The documentation for bullseye is [here](https://www.patternfly.org/v4/documentation/core/layouts/bullseye). In the documentation it specifies to add the class `pf-l-bullseye` to the parent container of its child.
