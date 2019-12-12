The split layout is designed to position items horizontally, with one item filling the available horizontal space.

Make a simplified page header where a "nav" fills the available horizontal space.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add code in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;header&gt;
  &lt;div&gt;
    Align left.
  &lt;/div&gt;
  &lt;div&gt;
    This element should fill the remaining space between the left and right elements.
  &lt;/div&gt;
  &lt;div&gt;
    Align right.
  &lt;/div&gt;
&lt;/header&gt;
</pre>

2) <strong>Locate the parent container for the three divs.</strong>

It will be the `<header>`.

3) <strong>Add the split layout class to the parent container identified in step 2.</strong>

Add `pf-l-split` to `<header>`. 

When added to the parent it should look like:
`<header class="pf-l-split">`

4) <strong>Locate the three children inside of the parent container.</strong>

The children of the `<header>` are the three divs.

5) <strong>Add the class `pf-l-split__item` to each child.</strong>

Adding this class to each child means that the parent split container has a relationship with all of its `split__items`.

6) <strong>Add a modifier class to the second child.</strong>

For a child to fill the available horizontal space, add `pf-m-fill` to just one of the children. In this case, add it to the middle child.

It should look like:
`<div class="pf-l-split__item pf-m-fill">`
