The bullseye layout is designed to both horizontally and vertically center a single child element within its parent.

Center the modal component inside of the page.

Katacoda is setting up a new application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add a modal box component in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-backdrop&quot;&gt;
  &lt;div class=&quot;pf-c-modal-box&quot;&gt;
    &lt;div class=&quot;pf-c-modal-box__body&quot;&gt;
      This is a PatternFly Modal
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Locate the parent container for the modal component.</strong>

The parent container is the wrapper, which is one level above its child. In this case, it is the `pf-c-backdrop` class.

Add `pf-l-bullseye` to to the class `pf-c-backdrop`.

<strong>Note: </strong>The modal should be centered in the div on the x and y axes.
