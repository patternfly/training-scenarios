The Split Layout is designed to position items horizontally, with one item filling the available horizontal space.

## Task: Make a version of the Page Header that uses the Split Layout 

a. Copy this file to the editor:

<pre class="file" data-filename="layout.html" data-target="replace">
    &lt;header class=&quot;pf-c-page__headerclass&quot;&gt;
    &lt;div class=&quot;pf-c-page__header-left&quot;&gt;
        Toggle goes here
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-page__header-middle&quot;&gt;
        Nav goes here and it should fill the remaining space.
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-page__header-right&quot;&gt;
        User menu goes here
    &lt;/div&gt;
    &lt;/header&gt;
</pre>

b. Add `pf-l-split` to the parent container. Hint: `pf-c-page__headerclass`.

c. Add `pf-l-split__item` to all of the children inside of the container. Hint: `pf-c-page__header-left` , `pf-c-page__header-middle` , `pf-c-page__header-right`.

d. Add `pf-m-fill` to the split item in the middle. This will allow the page nav to fill the available horizontal space in the nav. Hint: `pf-c-page__header-middle`.
