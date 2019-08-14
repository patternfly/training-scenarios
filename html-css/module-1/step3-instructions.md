With the modular approach to how PatternFly styles are defined, there’s a lot of flexibility in what html elements can be used within a component. This allows the components to use more semantic html elements depending on the context of the component. 


Leveraging semantic markup enhances accessibility, searchability, internationalization and interpolation. Semantic elements accurately describe the purpose of the element and the type of content within. https://html.com/semantic-markup/

## Workshop: Update the Nav component to use semantic html

Lets update the Nav component so that the html is semantic.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Nav component to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-nav&quot;&gt;
  &lt;div class=&quot;pf-c-nav__simple-list&quot;&gt;
    &lt;div class=&quot;pf-c-nav__item&quot;&gt;
      &lt;div href=&quot;#&quot; class=&quot;pf-c-nav__link pf-m-current&quot;&gt;
        I am a link
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-nav__item&quot;&gt;
      &lt;div href=&quot;#&quot; class=&quot;pf-c-nav__link&quot;&gt;
        I am a link
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pf-c-nav__item&quot;&gt;
      &lt;div href=&quot;#&quot; class=&quot;pf-c-nav__link&quot;&gt;
        I am a link
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

In your editor you should see the Nav component marked up by div's, which is semantically incorrect.

2) Search for the class `pf-c-nav` in the editor. Change the opening bracket's `<div>`  to `<nav>` and do the same for the closing bracket.

<strong>Note:</strong> Now `pf-c-nav` is semantic and a screen reader will understand that it is a navigational component.

<strong>Hint:</strong> `<nav class="pf-c-nav"></nav>`

3) Search for the class `pf-c-nav__simple-list` in the editor. Change the opening bracket's `<div>` to a `<ul>` and do the same for the closing bracket.

<strong>Note:</strong> Now `pf-c-nav__simple-list` is semantic and a screen reader will understand that it is an unordered list.

<strong>Hint:</strong> `<ul class="pf-c-nav__simple-list"></ul>`

4) Search for the class `pf-c-nav__item` in the editor, <strong>there will be three of them!</strong> Change the opening bracket's `<div>` to an `<li>` and do the same for the closing bracket, and all three of the classes.

<strong>Note:</strong> Now `pf-c-nav__item` is semantic and a screen reader will understand that it is a nav item.

<strong>Hint:</strong> `<li class="pf-c-nav__item"></li>`

<strong>Note: </strong> When you try click on a link, you'll notice that the link isn't "clickable". This is because `<div's>` and all links should use the `<a>` tag. 

5) <strong>Let's make the links clickable. </strong> Search for the class `pf-c-nav__link` in the editor. Change the opening bracket's `<div>` to an `<a>` and do the same for the closing bracket, and all three of the classes.

<strong>Note:</strong> Now `pf-c-nav__link` is semantic and clickable!

<strong>Hint:</strong> `<a href="#" class="pf-c-nav__link"></a>`

