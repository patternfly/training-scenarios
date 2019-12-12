The stack layout is designed to position items vertically, with one item filling the available vertical space. 

Edit the card body so that the text fills the available vertical space.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add a card component to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card&quot; style=&quot;height: 450px; width: 300px;&quot;&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
    &lt;h1 class=&quot;pf-c-title pf-m-2xl&quot;&gt;
      This is a title
    &lt;/h1&gt;
    &lt;div&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    &lt;/div&gt;
    &lt;button class=&quot;pf-c-button pf-m-link pf-m-inline&quot;&gt;
      Footer Link Button
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Locate the parent container of the `pf-c-title` , `<div>` , `pf-c-button` classes.</strong>

It will be `pf-c-card__body`.

3) <strong>Add the stack layout to the parent identified in step 2.</strong>

The class for the stack layout is `pf-l-stack`.

When added to the parent it should look like:
`<div class="pf-c-card__body pf-l-stack">`

4) <strong>Locate the three children inside of the parent container.</strong>

The children of the `<div class="pf-c-card__body">` are `<h1 class="pf-c-title">` , `<div>` and `<button class="pf-c-button>`.

5) <strong>Add the class `pf-l-stack__item` to each child.</strong>

Adding this class to each child means that the parent stack container has a relationship with all of its `stack__items`.

It should look like:
`<h1 class="pf-c-title pf-l-stack__item">` , `<div class="pf-l-stack__item">` , `<button class="pf-c-button pf-l-stack__item">`.

6) <strong>Add a modifier class to the second child.</strong>

In order for a child to fill the available vertical space, add `pf-m-fill` to just one of the children. In this case add it to the middle child.

It should look like:
`<div class="pf-l-stack__item pf-m-fill">`
