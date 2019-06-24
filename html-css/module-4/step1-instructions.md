The Bullseye Layout is designed to both horizontally and vertically center a single child element within its parent.

## Task: Center the modal component inside of the page

Center the Modal Component inside of the Page.

a. Copy this file to the editor:

<pre class="file" data-filename="layout.html" data-target="replace">&lt;div class=&&lt;div class=&quot;pf-c-backdrop&quot;&gt;
  &lt;div class=&quot;pf-c-modal-box&quot;&gt;
    &lt;div class=&quot;pf-c-modal-box__body&quot;&gt;
      This is a Patternfly Modal
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

b. Add `pf-l-bullseye` to the parent container with the class `pf-c-backdrop`.

c. You will see that the modal is now centered in the div on the x and y axes.
