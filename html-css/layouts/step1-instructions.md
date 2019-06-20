The Bullseye Layout is designed to both horizontally and vertically center a single child element within its parent.

## Task: Center the modal component inside of the page

Center the Modal Component inside of the Page.

a. Copy this file to the editor:

<pre class="file" data-filename="layout.html" data-target="replace">&lt;div class=&quot;pf-c-backdrop&quot;&gt;
  &lt;div class=&quot;pf-c-modal-box&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;modal-title&quot; aria-describedby=&quot;modal-description&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-plain&quot; aria-label=&quot;Close&quot;&gt;
      &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
    &lt;/button&gt;
    &lt;h1 class=&quot;pf-c-title pf-m-2xl&quot; id=&quot;modal-title&quot;&gt;
      Modal header
    &lt;/h1&gt;
    &lt;div class=&quot;pf-c-modal-box__body&quot; id=&quot;modal-description&quot;&gt;
      To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.
    &lt;/div&gt;
    &lt;footer class=&quot;pf-c-modal-box__footer&quot;&gt;
      Modal footer
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

b. Add `pf-l-bullseye` to the parent container with the class `pf-c-backdrop`.

c. You will see that the modal is now centered in the div on the x and y axes.
