Demos show how PatternFly’s components and layouts can be put together to build more complex structures. Demos have no additional styling as they are strictly made from components and layouts. If styling is necessary to implement a desired demo, then new components or layouts, or variants of the components or layouts used, should be created instead.

## Workshop: Create a Form demo using components and layouts

Let's create a Form Demo.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for five Form components to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;form class=&quot;pf-c-form&quot;&gt;
 &lt;div class=&quot;pf-c-form__group&quot;&gt;
  &lt;label class=&quot;pf-c-form__label&quot;&gt;
   &lt;span class=&quot;pf-c-form__label-text&quot;&gt;
    Form Label
   &lt;/span&gt;
  &lt;/label&gt;
  &lt;input class=&quot;pf-c-form-control&quot;&gt;
 &lt;/div&gt;
&lt;/form&gt;
&lt;form class=&quot;pf-c-form&quot;&gt;
 &lt;div class=&quot;pf-c-form__group&quot;&gt;
  &lt;label class=&quot;pf-c-form__label&quot;&gt;
   &lt;span class=&quot;pf-c-form__label-text&quot;&gt;
    Form Label
   &lt;/span&gt;
  &lt;/label&gt;
  &lt;input class=&quot;pf-c-form-control&quot;&gt;
 &lt;/div&gt;
&lt;/form&gt;
&lt;form class=&quot;pf-c-form&quot;&gt;
 &lt;div class=&quot;pf-c-form__group&quot;&gt;
  &lt;label class=&quot;pf-c-form__label&quot;&gt;
   &lt;span class=&quot;pf-c-form__label-text&quot;&gt;
    Form Label
   &lt;/span&gt;
  &lt;/label&gt;
  &lt;input class=&quot;pf-c-form-control&quot;&gt;
 &lt;/div&gt;
&lt;/form&gt;
&lt;form class=&quot;pf-c-form&quot;&gt;
 &lt;div class=&quot;pf-c-form__group&quot;&gt;
  &lt;label class=&quot;pf-c-form__label&quot;&gt;
   &lt;span class=&quot;pf-c-form__label-text&quot;&gt;
    Form Label
   &lt;/span&gt;
  &lt;/label&gt;
  &lt;input class=&quot;pf-c-form-control&quot;&gt;
 &lt;/div&gt;
&lt;/form&gt;
&lt;form class=&quot;pf-c-form&quot;&gt;
 &lt;div class=&quot;pf-c-form__group&quot;&gt;
  &lt;label class=&quot;pf-c-form__label&quot;&gt;
   &lt;span class=&quot;pf-c-form__label-text&quot;&gt;
    Form Label
   &lt;/span&gt;
  &lt;/label&gt;
  &lt;input class=&quot;pf-c-form-control&quot;&gt;
 &lt;/div&gt;
&lt;/form&gt;
</pre>

Now that we have added the components let's add a layout. In this case we will use the Grid layout.

2) Add a wrapper around all of the form components that uses the class `pf-l-grid`.

<strong>Hint:</strong> `<div class="pf-l-grid"></div>`

3) Wrap each form component in a "Grid Item" class. Search for `pf-c-form` and around that block, wrap it in this block (remember to do all five): 

```
<div class=”pf-l-grid__item”>
</div>
```

Let's explore how modifier classes work with layout classes. You can learn which modifiers apply to which layout classes in the "Usage" table in the documentation here: https://www.patternfly.org/v4/documentation/core/layouts/grid 

4) Search for `pf-l-grid` and add a gutter modifier `pf-m-gutter` to that class so that space is added between Grid Items.

<strong>Hint:</strong> `<div class="pf-l-grid pf-m-gutter">`

5) Search for `pf-l-grid__item`.

<strong>Pro Tip:</strong> to modify the width of a grid layout element use `pf-m-[number from 1 - 12]`. The number you use defines how many columns the element should span in a 12 column grid, and the numbers you use across a row should add up to 12.

Add `pf-m-6-col` to the first two grid items and add `pf-m-4-col` to the last three grid items.

<strong>Hint: </strong> `<div class="pf-l-grid__item pf-m-6-col">`
<strong>Hint: </strong> `<div class="pf-l-grid__item pf-m-4-col">`