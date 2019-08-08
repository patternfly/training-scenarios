 In Patternfly, layouts are the containers that allow for organizing and grouping elements.  There are seven different layouts in Patternfly, but in this module we will cover just one. You can explore our other module which does a deep dive into layouts.

## Workshop: Add a layout class

a. Let's add a simple layout class to the html markup to demonstrate that we don’t need to add any css styling.

b. Copy this code into the editor:

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div&gt;
  &lt;div class=&quot;pf-c-card&quot;&gt;
    &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-md&quot;&gt;
      Header
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card__body&quot;&gt;
      Body
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-card__footer&quot;&gt;
      Footer
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

c. It’s important to follow the documentation for layouts. For example here is the documentation for the bullseye layout: https://pf4.patternfly.org/layouts/Bullseye/examples/ . In the documentation it specifies that you should add the class `pf-l-bullseye` to the parent container of its child.

d. In this case we want to center the card component within the outer div. To the first line `<div>` add the class: `pf-l-bullseye`.
Hint: <div class=”pf-l-bullseye”>

e. You should see that the card is now centered in the middle of the page!
