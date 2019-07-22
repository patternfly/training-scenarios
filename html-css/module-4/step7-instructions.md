The Flex Layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value that is applied to flex items.

## Task: Layout items in a card using flex.

a. Copy code to the editor:

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card&quot; style=&quot;width: 450px&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
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

b. Lets make the first card body layout horizontally. For (`pf-c-card__body`):
  i. set its layout to be flex. Add `pf-l-flex` to the `pf-c-card__body`.
  ii. set its direction to be row. Add `pf-m-row` to the `pf-c-card__body`.
  iii. add space between the text and the button. Add `pf-m-justify-content-space-between` to the `pf-c-card__body`.

c. Repeat step b for the second card body.

d. Lets make the card footer layout the buttons. For (`pf-c-card__footer`):
  i. set its layout to be flex. Add `pf-l-flex` to the `pf-c-card__footer`.
  ii. add space between the buttons. Add `pf-m-justify-content-space-between` to the `pf-c-card__footer`.
