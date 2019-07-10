## Utilize Patternfly layout classes to achieve new layouts

We are going to copy the card multiple times and then add a gallery layout.

1. Copy code into the card.html file:

<pre class="file" data-filename="layout.html" data-target="replace">
&lt;div class=&quot;pf-c-card pf-m-hoverable&quot;&gt;
  &lt;div class=&quot;pf-c-card__head&quot;&gt;
    &lt;img class=&quot;pf-c-brand&quot; src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot;&gt;
    &lt;div class=&quot;pf-c-card__actions&quot;&gt;
      &lt;div class=&quot;pf-c-dropdown&quot;&gt;
        &lt;button class=&quot;pf-c-dropdown__toggle pf-m-plain&quot;&gt;
          &lt;i class=&quot;fas fa-ellipsis-v&quot;&gt;&lt;/i&gt;
        &lt;/button&gt;
      &lt;/div&gt;
      &lt;input type=&quot;checkbox&quot;&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-xl&quot;&gt;
    &lt;p&gt;Patternfly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
  &lt;div class=&quot;pf-c-card__body-separator&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
  &lt;div class=&quot;pf-c-card__body-separator&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to Patternfly
   &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to home
   &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;pf-c-card pf-m-hoverable&quot;&gt;
  &lt;div class=&quot;pf-c-card__head&quot;&gt;
    &lt;img class=&quot;pf-c-brand&quot; src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot;&gt;
    &lt;div class=&quot;pf-c-card__actions&quot;&gt;
      &lt;div class=&quot;pf-c-dropdown&quot;&gt;
        &lt;button class=&quot;pf-c-dropdown__toggle pf-m-plain&quot;&gt;
          &lt;i class=&quot;fas fa-ellipsis-v&quot;&gt;&lt;/i&gt;
        &lt;/button&gt;
      &lt;/div&gt;
      &lt;input type=&quot;checkbox&quot;&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-xl&quot;&gt;
    &lt;p&gt;Patternfly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
  &lt;div class=&quot;pf-c-card__body-separator&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
  &lt;div class=&quot;pf-c-card__body-separator&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to Patternfly
   &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to home
   &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;pf-c-card pf-m-hoverable&quot;&gt;
  &lt;div class=&quot;pf-c-card__head&quot;&gt;
    &lt;img class=&quot;pf-c-brand&quot; src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot;&gt;
    &lt;div class=&quot;pf-c-card__actions&quot;&gt;
      &lt;div class=&quot;pf-c-dropdown&quot;&gt;
        &lt;button class=&quot;pf-c-dropdown__toggle pf-m-plain&quot;&gt;
          &lt;i class=&quot;fas fa-ellipsis-v&quot;&gt;&lt;/i&gt;
        &lt;/button&gt;
      &lt;/div&gt;
      &lt;input type=&quot;checkbox&quot;&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-xl&quot;&gt;
    &lt;p&gt;Patternfly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
  &lt;div class=&quot;pf-c-card__body-separator&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
  &lt;div class=&quot;pf-c-card__body-separator&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to Patternfly
   &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to home
   &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2. Add a div wrapper around all cards. Add an opening `<div>` tag to the first line, and a closing `</div>` tag to the bottom of the file.

3. To the opening `<div>` tag, add the gallery layout class `pf-l-gallery`.

Hint: `<div class="pf-l-gallery">`

4. Modify the gallery layout so that it includes a gutter. To the same opening `<div>` tag add the class `pf-m-gutter`.

Hint: `<div class="pf-l-gallery pf-m-gutter">`


