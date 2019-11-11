In step 1 we saw that the modifier was set on the "block" class, but let’s look at a more complex component to see how the modifier classes are applied to different elements in the component.

In this step we will modify the Dropdown component. You can explore the documentation and classes for the Dropdown component at this (link)[https://www.patternfly.org/v4/documentation/core/components/dropdown]. At the bottom of the page, under the "Usage" section table, you will see the documentation for the modifier classes under “class” and the classes they apply to under “applied”.

## Task: Modify the Dropdown for the expanded state, then change the dropdown toggle to the plain variation

1) <strong>Copy code to the editor.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Dropdown to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-dropdown&quot;&gt;
  &lt;button class=&quot;pf-c-dropdown__toggle&quot;&gt;
  &lt;span class=&quot;pf-c-dropdown__toggle-text&quot;&gt;
    Collapsed dropdown
  &lt;/span&gt;
  &lt;i class=&quot;fas fa-caret-down pf-c-dropdown__toggle-icon&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;ul class=&quot;pf-c-dropdown__menu&quot;&gt;
    &lt;li&gt;
      &lt;a class=&quot;pf-c-dropdown__menu-item&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;a class=&quot;pf-c-dropdown__menu-item&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class=&quot;pf-c-dropdown__menu-item&quot; disabled&gt;Disabled action&lt;/button&gt;
    &lt;/li&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre>

2) Search for the `pf-c-dropdown` class. Add `pf-m-expanded` beside that class name and inside the quotation marks.

<strong>Hint: </strong> `<div class="pf-c-dropdown pf-m-expanded">`

You’ll see that the the bottom-border has changed to a blue line.

3) Let’s try another modifier. Add `pf-m-plain` to `pf-c-dropdown__toggle` so that it’s modified to display the toggle modifier with no border. You may need to right-click on the iframe to reload the browser.

<strong>Hint: </strong> `<button class="pf-c-dropdown__toggle pf-m-plain">`

<strong>Pro Tip: </strong> Now try adding `pf-m-plain` to `pf-c-dropdown__menu`. What happens? <strong> Nothing should happen</strong>  because the modifier class does not apply to `pf-c-dropdown__menu`, it only applies to `pf-c-dropdown__toggle`. Always remember to refer to the documentation!
