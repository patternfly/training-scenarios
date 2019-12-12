The gallery layout makes sure all of its children are of uniform size, display horizontally and wrap responsively.

Layout cards using in the gallery format.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add six card components to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div&gt;
  &lt;div class=&quot;pf-c-card&quot;&gt; 
    &lt;div class=&quot;pf-c-card__body&quot;&gt;
      This is a card.
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card&quot;&gt; 
      &lt;div class=&quot;pf-c-card__body&quot;&gt;
        This is a card.
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card&quot;&gt; 
      &lt;div class=&quot;pf-c-card__body&quot;&gt;
        This is a card.
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card&quot;&gt; 
      &lt;div class=&quot;pf-c-card__body&quot;&gt;
        This is a card.
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card&quot;&gt; 
      &lt;div class=&quot;pf-c-card__body&quot;&gt;
        This is a card.
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card&quot;&gt; 
      &lt;div class=&quot;pf-c-card__body&quot;&gt;
        This is a card.
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Locate the parent of all six card components.</strong>

It will be the outermost `div`.

3) <strong>Add the gallery layout to the parent container located in step 2.</strong>

The `gallery` will structure any children inside of the gallery into a grid layout, whereby the columns don’t extend beyond 250px in width, and when this happens, they add more columns and wrap.

The gallery layout class is `pf-l-gallery`.

When added to the parent it should look like:
`<div class="pf-l-gallery">`

4) <strong>Add a modifier class to the gallery layout to add space.</strong>

Add `pf-m-gutter` next to the `pf-l-gallery` class added in step 3. This will add vertical and horizontal spacing of 24px between the card elements.
