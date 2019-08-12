## Add some code to the workspace

Before we get started, let's add some code to the workspace that we can modify.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a card to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card pf-m-hoverable&quot;&gt;
  &lt;div class=&quot;pf-c-card__head&quot;&gt;
    &lt;img class=&quot;pf-c-brand&quot; src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot;&gt;
    &lt;div class=&quot;pf-c-card__actions&quot;&gt;
      &lt;button class=&quot;pf-c-button pf-m-plain&quot;&gt;
        &lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-md&quot;&gt;
    &lt;p&gt;Patternfly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
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

2) <strong>Set up your new styles file for overriding styles in the card component.</strong> There are two blocks in this file: `:root` targets styles across the entire application and `.pf-c-card` targets styles specifically in the card component.

Click the <strong>Copy to Editor</strong> button below to add code for the card component to the myapp.scss file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
:root {
  // Add global variables here
}

.pf-c-card {
  // Add card component variables here
}
</pre>

When the server reloads, you should see something like this:
<img src="module-5/assets/devconf-artboard-1.png" alt="card initial" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
