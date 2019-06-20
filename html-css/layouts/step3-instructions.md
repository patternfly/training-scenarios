The Gallery Layout is designed so that all of its children are of uniform size, displayed horizontally and wrap responsively.

## Task: Layout cards in a gallery format using the gutter

a. Copy this code to the editor:

<pre class="file" data-filename="layout.html" data-target="replace">
&lt;div id=&quot;parent-container&quot;&gt;
&lt;div class=&quot;pf-c-card&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;

  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex pf-m-justify-content-space-between&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
        &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class=&quot;pf-c-card&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;

  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex pf-m-justify-content-space-between&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
        &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class=&quot;pf-c-card&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;

  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex pf-m-justify-content-space-between&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
        &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class=&quot;pf-c-card&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;

  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex pf-m-justify-content-space-between&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
        &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class=&quot;pf-c-card&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;

  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex pf-m-justify-content-space-between&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
        &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class=&quot;pf-c-card&quot;&gt; 
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;

  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body pf-l-flex pf-m-row pf-m-justify-content-space-between&quot;&gt;
    &lt;span&gt;
      &lt;h2&gt;Patternfly-Elements&lt;/h2&gt;
      &lt;p&gt;Working repo for Patternfly 4&lt;/p&gt;
    &lt;/span&gt;
    &lt;button class=&quot;pf-c-button pf-m-primary&quot;&gt;
      Primary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex pf-m-justify-content-space-between&quot;&gt;
    &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
        &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-secondary&quot;&gt;
      Secondary
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

b. Add `pf-l-gallery` to the parent container `<div id="parent-container>`. This will structure any children inside of the gallery into a grid layout, whereby the columns don’t extend beyond 250px in width, and when this happens they add more columns and wrap.

b. Add `pf-m-gutter` to the `pf-l-gallery`. This will add vertical and horizontal spacing of 24px between the card elements.
