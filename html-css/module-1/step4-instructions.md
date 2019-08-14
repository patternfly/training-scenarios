 In PatternFly, layouts are the containers that allow for organizing and grouping elements.  There are seven different layouts in PatternFly, but in this module we will cover just one. You can explore our other module which does a deep dive into layouts.

## Workshop: Practice using layout classes

Let's add a Bullseye layout class to the html markup to demonstrate the power of using PatternFly's layout classes.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Card component to the `index.html` file.

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

2) Let's add the bullseye class to the editor so that the Card is centered horizontally and vertically.

<strong>Note: </strong>It’s important to follow the documentation for layouts. Here is a link to the documentation for the Bullseye layout: https://pf4.patternfly.org/layouts/Bullseye/examples/. In the documentation it specifies that you should add the class `pf-l-bullseye` to the parent container of its child.

3) On line 1 is the outer `<div>` wrapper. Replace this line with `<div class="pf-l-bullseye">`

Once the browser reloads, you should see that the card is now centered in the middle of the page!
