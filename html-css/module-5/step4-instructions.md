## Add a PatternFly class for the layout

Now that we have an updated Card design, let's add several Cards and use the gallery layout to organize them on the page. 

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>copy code to the editor</strong> button below to add html for multiple Cards to the index.html file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card pf-m-hoverable&quot;&gt;
  &lt;div class=&quot;pf-c-card__head&quot;&gt;
    &lt;img class=&quot;pf-c-brand&quot; src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot;&gt;
    &lt;div class=&quot;pf-c-card__actions&quot;&gt;
      &lt;button class=&quot;pf-c-button pf-m-plain&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-xl&quot;&gt;
    &lt;p&gt;PatternFly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to PatternFly
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
      &lt;button class=&quot;pf-c-button pf-m-plain&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-xl&quot;&gt;
    &lt;p&gt;PatternFly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to PatternFly
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
      &lt;button class=&quot;pf-c-button pf-m-plain&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-xl&quot;&gt;
    &lt;p&gt;PatternFly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to PatternFly
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
      &lt;button class=&quot;pf-c-button pf-m-plain&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-xl&quot;&gt;
    &lt;p&gt;PatternFly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;my-app-c-card__separator&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to PatternFly
   &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to home
   &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Create a wrapper around the Cards.</strong> Multiple Cards were just added and we need to create a wrapper around them. 

Add an opening `<div>` tag to the first line, and a closing `</div>` tag to the bottom of the file.

(3) <strong>Add a layout class.</strong> 

To the opening `<div>` tag, add the gallery layout class: `pf-l-gallery`.

Hint: `<div class="pf-l-gallery">`

(4) <strong>Add a gutter modifier.</strong>

Modify the gallery layout so that it includes a gutter. To the same opening `<div>` tag add the class `pf-m-gutter`.

<strong>Hint:</strong> `<div class="pf-l-gallery pf-m-gutter">`