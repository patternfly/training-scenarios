The Flex Layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value that is applied to flex items.

## Task: Layout items in a card using flex.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add code in the `index.html` file.

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

Lets make the first card body layout horizontally. For `pf-c-card__body`:

2) Set its layout to be flex. Add `pf-l-flex` to the `pf-c-card__body`.

3) Set its direction to be row. Add `pf-m-row` to the `pf-c-card__body`.

4) Add space between the text and the button, this can be done using the modifier: `pf-m-justify-content-space-between`.

Lets make the card footer layout the buttons. For `pf-c-card__footer`:

5) Set its layout to be flex. Add `pf-l-flex` to the `pf-c-card__footer`.

6) Add space between the buttons. Add `pf-m-justify-content-space-between` to the `pf-c-card__footer`.
