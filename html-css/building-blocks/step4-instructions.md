"Demos" show how PatternFly’s components and layouts are put together to build more complex structures. Demos have no additional styling; they are strictly made from components and layouts. If styling is needed for a certain demo, then instead create new components or layouts, or variants of the components or layouts.

Create a form demo using components and layouts.

1) <strong>Add five `form` components.</strong>

Use the `Copy to Clipboard` button to copy and paste this block of code five times in the `index.html` file.

<pre class="file" data-target="clipboard">
  &lt;form class=&quot;pf-c-form&quot;&gt;
    &lt;div class=&quot;pf-c-form__group&quot;&gt;
      &lt;label class=&quot;pf-c-form__label&quot;&gt;
        &lt;span class=&quot;pf-c-form__label-text&quot;&gt;
          Form label
        &lt;/span&gt;
      &lt;/label&gt;
      &lt;input class=&quot;pf-c-form-control&quot;&gt;
    &lt;/div&gt;
  &lt;/form&gt;
</pre>

2) <strong>Apply a grid layout to position the form components.</strong>

a) <strong>Add one `<div>` wrapper around all of the code in the editor.</strong>

b) <strong>Add the layout class.</strong>

It should look like this:

```
<div class="pf-l-grid">
  // Form components are here
</div>
```

3) <strong>Wrap each form component in its own layout class.</strong>

Step 2 involved adding `pf-l-grid` around the entire form component. In this step wrap each form component in `pf-l-grid__item` to lay out each item individually.

To do this, look for `pf-c-form` in `index.html` and wrap it in the `pf-l-grid__item` class.

The wrapper should look like this:

```
<div class=”pf-l-grid__item”>
  // code for form component
</div>
```
<strong>Note:</strong> Make sure to do this step for all five `form` components.

4) <strong>Add a modifier class to the grid layout.</strong>

Use the `pf-m-gutter` class to modify the `pf-l-grid` class so that there is equal spacing around all children.

Add the class `pf-m-gutter` after `pf-l-grid` to the outermost wrapper, inside the quotation marks.

It should look like: `<div class="pf-l-grid pf-m-gutter">`

<strong>Note: </strong> Learn how modifier classes work with layout classes by looking at the [documentation](https://www.patternfly.org/v4/documentation/core/layouts/grid#usage) on the PatternFly website.

5) <strong>Add modifier classes to the grid item classes.</strong>

This step modifies the number of columns that a grid item spans. The maximum number of columns that a grid item can span is 12 (which is equivalent to 100%).

Find each `pf-l-grid__item` that was added in step 3 and add the class `pf-m-[number from 1 - 12]`. The numbers across a row should add up to 12.

Add `pf-m-6-col` to the first two grid items and add `pf-m-4-col` to the last three grid items.

The first two grid items should look like: `<div class="pf-l-grid__item pf-m-6-col">`

The second two grid items should look like: `<div class="pf-l-grid__item pf-m-4-col">`
