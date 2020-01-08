In the previous step, the modifier was set on the `block` class. This step will demonstrate how modifier classes are applied to different elements in the component.

Modify the dropdown component so that it is in the expanded state, then change the dropdown toggle to the plain variation.

1) <strong>Copy code to the `index.html` file.</strong>

Click the `Copy to Editor` button below to add HTML for a dropdown component.

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

2) <strong>Add the expanded modifier to the dropdown.</strong>

a) <strong>Locate the `pf-c-dropdown` class.</strong>

b) <strong>Add `pf-m-expanded` next to the `pf-c-dropdown` class and inside the quotation marks.</strong>

It should look like this: `<div class="pf-c-dropdown pf-m-expanded">`

<strong>Note: </strong> The bottom border on the dropdown toggle should have changed to a blue line.

3) <strong>Add the plain modifier to the dropdown toggle.</strong>

a) <strong>Locate the `pf-c-dropdown__toggle` class.</strong>

b) <strong>Add `pf-m-plain` next to the `pf-c-dropdown__toggle` class and inside the quotation marks.</strong>

This will style the `pf-c-dropdown__toggle` class to have no border.

It should look like this: `<button class="pf-c-dropdown__toggle pf-m-plain">`

<strong>Note: </strong> Now try adding `pf-m-plain` to `pf-c-dropdown__menu`. Notice that nothing happens. This is because the modifier class does not apply to `pf-c-dropdown__menu`, it only applies to `pf-c-dropdown__toggle`. When applying modifier classes always refer to the [documentation](https://www.patternfly.org/v4/documentation/core/components/dropdown).
