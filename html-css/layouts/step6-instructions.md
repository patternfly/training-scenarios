The grid layout is based on CSS Grid’s two-dimensional system of columns and rows. This layout styles the parent element and its children to achieve responsive column and row spans as well as gutters.

Organize form components using grid.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add code in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card&quot;&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
    &lt;form class=&quot;pf-c-form&quot;&gt;
      &lt;div class=&quot;pf-c-form__group&quot;&gt;
        &lt;label class=&quot;pf-c-form__label&quot;&gt;Name&lt;/label&gt;
        &lt;input class=&quot;pf-c-form-control&quot; required&gt;
      &lt;/div&gt;
      &lt;div class=&quot;pf-c-form__group&quot;&gt;
        &lt;label class=&quot;pf-c-form__label&quot;&gt;Email&lt;/label&gt;
        &lt;input class=&quot;pf-c-form-control&quot; required&gt;
      &lt;/div&gt;
      &lt;div class=&quot;pf-c-form__group&quot;&gt;
        &lt;label class=&quot;pf-c-form__label&quot;&gt;Phone number&lt;/label&gt;
        &lt;input class=&quot;pf-c-form-control&quot; placeholder=&quot;555-555-5555&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;pf-c-form__group&quot;&gt;
        &lt;label class=&quot;pf-c-form__label&quot;&gt;Street Address&lt;/label&gt;
        &lt;input class=&quot;pf-c-form-control&quot; placeholder=&quot;123 A Street&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;pf-c-form__group&quot;&gt;
        &lt;label class=&quot;pf-c-form__label&quot;&gt;State&lt;/label&gt;
        &lt;input class=&quot;pf-c-form-control&quot; placeholder=&quot;MA&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;pf-c-form__group&quot;&gt;
        &lt;label class=&quot;pf-c-form__label&quot;&gt;Zip Code&lt;/label&gt;
        &lt;input class=&quot;pf-c-form-control&quot; placeholder=&quot;12345&quot;&gt;
      &lt;/div&gt;
        &lt;div class=&quot;pf-c-form__group&quot;&gt;
        &lt;label class=&quot;pf-c-form__label&quot;&gt;Country&lt;/label&gt;
        &lt;input class=&quot;pf-c-form-control&quot; placeholder=&quot;United States&quot;&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Locate the form component.</strong>

Look for `<form class="pf-c-form">`

3) <strong>Add the grid layout class to the form component identified in step 2.</strong>

The grid layout uses the class: `pf-l-grid`.

It should look like:
`<form class="pf-c-form pf-l-grid">`.

4) <strong>Locate the six form group classes.</strong>

They will look like:
`<div class="pf-c-form__group">`

5) <strong>For every form group class identified in step 4, add a grid item class.</strong>

Adding this class to each child means that the parent grid container has a relationship with all of its `grid__items`.

It should look like:
`<div class="pf-c-form__group pf-l-grid__item">`

6) <strong>Change the widths of the `grid__items`.</strong>

In order to change widths, use the modifier `pf-m-[0-12]-col`, where `0-12` represents the number of columns that a grid column spans.

a) To the first two `form-groups` add `pf-m-6-col` next to `pf-l-grid__item`.

It should look like:
`<div class="pf-c-form__group pf-l-grid__item" pf-m-6-col>`

b) To the last three `form-groups` add `pf-m-4-col` next to `pf-l-grid__item`.

It should look like:
`<div class="pf-c-form__group pf-l-grid__item" pf-m-4-col>`
