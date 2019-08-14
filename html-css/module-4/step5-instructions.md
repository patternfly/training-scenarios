The Gallery Layout is designed so that all of its children are of uniform size, displayed horizontally and wrap responsively.

## Task: Layout cards using in the gallery format.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add Card components in the `index.html` file.

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

2) Add `pf-l-gallery` to the parent wrapper `<div>`.

<strong>Note: </strong> This will structure any children inside of the gallery into a grid layout, whereby the columns don’t extend beyond 250px in width, and when this happens they add more columns and wrap.

3) Add `pf-m-gutter` next to the `pf-l-gallery`class. This will add vertical and horizontal spacing of 24px between the card elements.
