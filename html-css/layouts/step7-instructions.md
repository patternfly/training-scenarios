The flex layout is based on the CSS flex properties. The flex parent determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value that is applied to flex items.

Layout items in a card using flex.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add a card to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card&quot; style=&quot;width: 450px&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;PatternFly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for PatternFly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Locate the first card body.</strong>

It will be: `<div class="pf-c-card__body">`

3) <strong>Layout the card body identified in step 2 to be `flex row`.</strong>

By laying out the `card body` this way, all items within its container will layout horizontally.

a) <strong>Set the layout to be flex.</strong>

The flex layout uses the class `pf-l-flex`.

Add this class to `pf-c-card__body`. It should look like: 
`<div class="pf-c-card__body pf-l-flex">`

b) <strong>Set its direction to be row using a modifier.</strong>

The modifier to set the direction of a container to be row is: `pf-m-row`

Add this class to `pf-c-card__body`. It should look like:
`<div class="pf-c-card__body pf-l-flex pf-m-row">`

4) <strong>Add space between the text and buttons in the `card body`.</strong>

The modifier to add space between is `pf-m-justify-content-space-between`.

Add this modifier to the card body. It should look like:
`<div class="pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between">`

5) <strong>Locate the card footer.</strong>

It will look like: `<div class="pf-c-card__footer">`

6) <strong>Add space to the buttons in the card footer identified in step 5.</strong>

a) <strong>Set the layout to be flex.</strong>

Add `pf-l-flex` to the `pf-c-card__footer`.

It should look like:
`<div class="pf-c-card__footer pf-l-flex">`

b) <strong>Add a modifier to add space between the buttons.</strong>

Add `pf-m-justify-content-space-between` to the `pf-c-card__footer`.

It should look like:
`<div class="pf-c-card__footer pf-l-flex pf-m-justify-content-space-between">`
