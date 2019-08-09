Demos show how Patternfly’s components and layouts can be put together to build more complex structures. Demos have no additional styling as they are strictly made from components and layouts. If styling is necessary to implement a desired demo, then new components or layouts, or variants of the components or layouts used, should be created instead.

## Workshop: Create a form demo using components and layouts

a. In this workshop we will create a form demo.

b. Let’s stack five components on the page. **Copy this code to the editor five times.**

<pre class="file" data-filename="index.html" data-target="replace">
&lt;form class=&quot;pf-c-form&quot;&gt;
 &lt;div class=&quot;pf-c-form__group&quot;&gt;
  &lt;label class=&quot;pf-c-form__label&quot;&gt;
   &lt;span class=&quot;pf-c-form__label-text&quot;&gt;
    First Name
   &lt;/span&gt;
  &lt;/label&gt;
  &lt;input class=&quot;pf-c-form-control&quot;&gt;
 &lt;/div&gt;
&lt;/form&gt;
</pre>

c. Now that we have added the components let's add the layout class around all of the form components. For this scenario we should use the **grid layout**. Wrap all of the form components in a div with the class `pf-l-grid` to add the layout block.

Hint: `<div class=”pf-l-grid”>`

d. The next step is to wrap each form component in the class `pf-l-grid__item` to add the layout elements. In the grid layout, the layout elements represent the cells in the grid. Add `<div class=”pf-l-grid__item”></div>` around each form component.

e. We want to modify this demo a little so that the form lays out better on the page. First add the modifier `pf-m-gutter` next to the class `pf-l-grid`, so that spacing is added between the `pf-l-grid__item` elements.

Hint: `<div class=”pf-l-grid pf-m-gutter”>`

f. Next we can add a modifier class to the `pf-l-grid__item` **element**  to control how many columns the element should span. To modify the width of a grid layout element use `pf-m-[number from 1 - 12]`. The number you use defines how many columns the element should span in a 12 column grid, and the numbers you use across a row should add up to 12.  

g. To demonstrate this behavior, add `pf-m-6-col` to the first two grid items and add `pf-m-4-col` to the last three grid items.

Hint: `<div class=”pf-l-grid__item pf-m-6-col”>`
