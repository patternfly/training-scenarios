Demos show how PatternFly’s components and layouts can be put together to build more complex structures. Demos have no additional styling as they are strictly made from components and layouts. If styling is necessary to implement a desired demo, then new components or layouts, or variants of the components or layouts used, should be created instead.

## Workshop: Create a form demo using components and layouts

1) <strong>Add the form component five times to the `index.html` file.</strong>

Use the `Copy to Clipboard` button to copy and paste this block of code five times in the `index.html` file.

<pre class="file" data-target="clipboard">
  <form class="pf-c-form">
    <div class="pf-c-form__group">
      <label class="pf-c-form__label">
        <span class="pf-c-form__label-text">
          Form label
        </span>
      </label>
      <input class="pf-c-form-control">
    </div>
  </form>
</pre>

2) <strong>Apply the PatternFly grid layout to position the components that were added in step 1.</strong>

Add a `<div>` wrapper around all of the code in the editor whereby the layout class `class="pf-l-grid"` is applied.

<strong>Hint:</strong>

```
<div class="pf-l-grid">
  // Form components are here
</div>
```

3) <strong>Wrap each form component in its own layout class.</strong>

Step 2 involved adding `pf-l-grid` around the entire form component. In this step wrap each form component in `pf-l-grid__item` to lay out each item individually.

To do this, look for `pf-c-form` in `index.html` and wrap it in the `pf-l-grid__item` class.

<strong>Hint:</strong>

```
<div class=”pf-l-grid__item”>
  // code for form component
</div>
```
<strong>Note:</strong> make sure to find all five.

4) <strong>Add a modifier class to the layout class that was added in step 2.</strong>

This step uses the `pf-m-gutter` class which modifies the `pf-l-grid` class so that there is equal spacing around all children. 

At line 1 add the class `pf-m-gutter` after `pf-l-grid` but inside the quotation marks.

<strong>Hint:</strong> `<div class="pf-l-grid pf-m-gutter">`

<strong>Note: </strong> Learn how modifier classes work with layout classes by looking at the [documentation](https://www.patternfly.org/v4/documentation/core/layouts/grid#usage) on the PatternFly website.

5) <strong>Add a modifier class to the layout classes that were added in step 3.</strong>

This step modifies the number of columns that a grid item spans. The maximum number of columns that a grid item can span is 12 (which is equivalent to 100%).

Find each `pf-l-grid__item` and add the class `pf-m-[number from 1 - 12]`. The numbers across a row should add up to 12.

Add `pf-m-6-col` to the first two grid items and add `pf-m-4-col` to the last three grid items.

<strong>Hint: </strong> `<div class="pf-l-grid__item pf-m-6-col">`

<strong>Hint: </strong> `<div class="pf-l-grid__item pf-m-4-col">`
