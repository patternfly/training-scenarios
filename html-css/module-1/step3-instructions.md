With the modular approach to how PatternFly styles are defined, there’s a lot of flexibility in what html elements can be used within a component. This allows the components to use more semantic html elements depending on the context of the component. 


Leveraging semantic markup enhances accessibility, searchability, internationalization and interpolation. Semantic elements accurately describe the purpose of the element and the type of content within. https://html.com/semantic-markup/

## Workshop: Update the Nav component to use semantic html

a. For a component that is originally not using semantic markup, we are going to update its html markup to use semantic elements, to make improvements.

b. Copy this code to the editor:

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-nav&quot;&gt;
  &lt;div class=&quot;pf-c-nav__simple-list&quot;&gt;
    &lt;div class=&quot;pf-c-nav__item&quot;&gt;
      &lt;div href=&quot;#&quot; class=&quot;pf-c-nav__link pf-m-current&quot;&gt;
        Current link
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-nav__item&quot;&gt;
      &lt;div href=&quot;#&quot; class=&quot;pf-c-nav__link&quot;&gt;
        Link 2
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-nav__item&quot;&gt;
      &lt;div href=&quot;#&quot; class=&quot;pf-c-nav__link&quot;&gt;
        Link 3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

c. You can probably tell from the classes that this is the nav component. It’s important that a nav component uses semantic markup for all of its elements. 

d. For the class `pf-c-nav`, replace the outer `<div>`  with `<nav>`. This tag defines a set of navigation links, so now a screen reader knows that this is the navigation.

Hint: `<nav class="pf-c-nav">`

e. For the class `pf-c-nav__simple-list` replace the outer `<div>` with a `<ul>` which stands for unordered list. Now the screen reader will know that there is a list of items.

Hint: `<ul class=”pf-c-nav__simple-list”>`

f. For the three classes `pf-c-nav__item` replace the outer `<div>`s with an `<li>` which stands for list item. Now the screen reader will know that this class is an item inside of a list.

Hint: `<li class=”pf-c-nav__item”>`

g. Do you notice that when you try to click on a link the cursor still appears instead of an arrow, which would indicate that it is clickable? This is because `<divs>` aren’t clickable, in this context, the content inside of the list items needs to be an `<a>` link. For the classes `pf-c-nav__link` let's replace the `<div>` tag with an `<a>` tag.

Hint: `<a href="#" class="pf-c-nav__link">`

h. Do you notice that the links are now clickable?
