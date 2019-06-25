The Stack Layout is designed to position items vertically, with one item filling the available vertical space. 

## Task: Edit the card body so that the text fills the available vertical space.

a. Copy code to the editor:

<pre class="file" data-filename="layout.html" data-target="replace">
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

b. Add `pf-l-stack` to the parent container. Hint: `pf-c-card__body`.

c. Add `pf-l-split__item` to all of the children inside of the container. Hint: `pf-c-title` , `<div>` , `pf-c-button`.

d. To the middle `<div>` add the class `pf-m-fill` next to the `pf-l-split__item` class that is already there. This will allow that div to fill the available vertical space.
