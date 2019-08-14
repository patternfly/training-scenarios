
PatternFly is based on the BEM naming system, whereby modifiers are tied to a component's "block" and “element” classes. In the Badge we saw that the modifier was set on the "block" class, but let’s look at a more complex component to see how the modifier classes are applied to different elements in the component. To learn more, visit http://getbem.com/introduction/.

## Task: Modify the dropdown for the expanded state, then change the dropdown toggle to the plain variation
a. This is a link to the documentation for the dropdown component. <strong> At the bottom of the page, under the "Usage" section table, you will see the documentation for the modifier classes under “class” and the classes they apply to under “applied”.</strong>  https://pf4.patternfly.org/components/Dropdown/examples/

b. <strong>Copy code to the editor.</strong>
Click the <strong>Copy to Editor</strong> button below to add html for a Dropdown to the index.html file.

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

c. Add `pf-m-expanded` beside the `pf-c-dropdown` class, you’ll see that the the bottom-border has changed to a blue line. For this example you will also need to remove `hidden` from `pf-c-dropdown__menu`. 

c. Let’s try another modifier. Add `pf-m-plain` to `pf-c-dropdown__toggle` so that it’s modified to display the toggle modifier with no border.

<strong> Pro Tip</strong> Now try adding `pf-m-plain` to `pf-c-dropdown__menu`. What happens? <strong> Nothing should happen</strong>  because the modifier class does not apply to `pf-c-dropdown__menu`, it only applies to `pf-c-dropdown__toggle`. Always remember to refer to the documentation!
