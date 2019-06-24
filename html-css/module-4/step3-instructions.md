The Gallery Layout is designed so that all of its children are of uniform size, displayed horizontally and wrap responsively.

## Task: Layout cards in a gallery format using the gutter

a. Copy this code to the editor:

<pre class="file" data-filename="layout.html" data-target="replace">
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

b. Add `pf-l-gallery` to the parent wrapper `<div>`. This will structure any children inside of the gallery into a grid layout, whereby the columns don’t extend beyond 250px in width, and when this happens they add more columns and wrap.

b. Add `pf-m-gutter` next to the `pf-l-gallery`class. This will add vertical and horizontal spacing of 24px between the card elements.
