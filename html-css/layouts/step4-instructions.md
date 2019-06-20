The Grid Layout is based on CSS Grid’s two-dimensional system of columns and rows. This layout styles the parent element and its children to achieve responsive column and row spans as well as gutters.

## Task: Layout form components using grid

a. Copy this file to the editor:

&lt;div class=&quot;pf-c-card&quot;&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
&lt;form novalidate class=&quot;pf-c-form&quot;&gt;

  &lt;div class=&quot;pf-c-form__group&quot;&gt;
    &lt;label class=&quot;pf-c-form__label&quot; for=&quot;simple-form-name&quot;&gt;
      Name &lt;span class=&quot;pf-c-form__label-required&quot; aria-hidden=&quot;true&quot;&gt;&amp;#42;&lt;/span&gt;
    &lt;/label&gt;
    &lt;input class=&quot;pf-c-form-control&quot; required type=&quot;text&quot; id=&quot;simple-form-name&quot; name=&quot;simple-form-name&quot; aria-describedby=&quot;simple-form-name-helper-1&quot;&gt;
  &lt;/div&gt;
  
  &lt;div class=&quot;pf-c-form__group&quot;&gt;
    &lt;label class=&quot;pf-c-form__label&quot; for=&quot;simple-form-email&quot;&gt;
      Email &lt;span class=&quot;pf-c-form__label-required&quot; aria-hidden=&quot;true&quot;&gt;&amp;#42;&lt;/span&gt;
    &lt;/label&gt;
    &lt;input class=&quot;pf-c-form-control&quot; required type=&quot;email&quot; id=&quot;simple-form-email&quot; name=&quot;simple-form-email&quot;&gt;
  &lt;/div&gt;

  &lt;div class=&quot;pf-c-form__group&quot;&gt;
    &lt;label class=&quot;pf-c-form__label&quot; for=&quot;simple-form-number&quot;&gt;
      Phone number&lt;/label&gt;
    &lt;input class=&quot;pf-c-form-control&quot; type=&quot;tel&quot; id=&quot;simple-form-number&quot; name=&quot;simple-form-number&quot; placeholder=&quot;555-555-5555&quot;&gt;
  &lt;/div&gt;
 
  &lt;div class=&quot;pf-c-form__group&quot;&gt;
    &lt;label class=&quot;pf-c-form__label&quot; for=&quot;simple-form-number&quot;&gt;
      Street Address&lt;/label&gt;
    &lt;input class=&quot;pf-c-form-control&quot; type=&quot;tel&quot; id=&quot;simple-form-number&quot; name=&quot;simple-form-number&quot; placeholder=&quot;123 A Street&quot;&gt;
  &lt;/div&gt;
 
   &lt;div class=&quot;pf-c-form__group&quot;&gt;
    &lt;label class=&quot;pf-c-form__label&quot; for=&quot;simple-form-number&quot;&gt;
      State&lt;/label&gt;
    &lt;input class=&quot;pf-c-form-control&quot; type=&quot;tel&quot; id=&quot;simple-form-number&quot; name=&quot;simple-form-number&quot; placeholder=&quot;MA&quot;&gt;
  &lt;/div&gt;
 
  &lt;div class=&quot;pf-c-form__group&quot;&gt;
    &lt;label class=&quot;pf-c-form__label&quot; for=&quot;simple-form-number&quot;&gt;
      Zip Code&lt;/label&gt;
    &lt;input class=&quot;pf-c-form-control&quot; type=&quot;tel&quot; id=&quot;simple-form-number&quot; name=&quot;simple-form-number&quot; placeholder=&quot;12345&quot;&gt;
  &lt;/div&gt;
 
    &lt;div class=&quot;pf-c-form__group&quot;&gt;
    &lt;label class=&quot;pf-c-form__label&quot; for=&quot;simple-form-number&quot;&gt;
      Country&lt;/label&gt;
    &lt;input class=&quot;pf-c-form-control&quot; type=&quot;tel&quot; id=&quot;simple-form-number&quot; name=&quot;simple-form-number&quot; placeholder=&quot;United States&quot;&gt;
  &lt;/div&gt;
 
  &lt;div class=&quot;pf-c-form__group pf-m-action&quot;&gt;
    &lt;div class=&quot;pf-c-form__actions&quot;&gt;
      &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
        Submit form
      &lt;/button&gt;
      &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
        Cancel
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
 
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;

b. Add `pf-l-grid` to the `pf-c-card` container.

c. For every `pf-c-form__group` add `pf-l-grid__item` to the class so that it becomes a grid item.

d. Change the widths of the containers.
  a. For the email and phone number inputs with `pf-c-form__group` add `pf-m-6-col`.
  b. For state, zip code and country inputs with `pf-c-form__group` add `pf-m-4-col`.
  