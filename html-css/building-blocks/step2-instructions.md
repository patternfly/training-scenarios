Step 1 demonstrated how a simple component can be reused multiple times. This step will look at how these simpler components can be combined together to make more complex components that are still reusable.

When simpler components are used within more complex components, the layout of the elements are defined in the stylesheet for the complex component.

In this step, add a `badge` component to the `chip` component.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add HTML for a chip component to the `index.html` file.

This is the default chip component that already has another component in it: the button. This is why the chip can be considered as a more complex component.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-chip&quot;&gt;
  &lt;span class=&quot;pf-c-chip__text&quot;&gt;
    Chip
  &lt;/span&gt;
  &lt;button class=&quot;pf-c-button pf-m-plain&quot;&gt;
  &lt;i class=&quot;fas fa-times-circle&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
&lt;/div&gt;
</pre>

2) <strong>Add the `badge` inside of the `chip`. </strong>

To do this add this block of code between `pf-c-chip__text` and `pf-c-button`.

```
<span class="pf-c-badge pf-m-read">
  7
</span>
```

<strong>Note: </strong> Remember this is a component and not a demo because the chip component includes styles that handle how the badge looks within the chip. For example, when the badge component is added to the chip, it receives styling that gives it a margin. You can read more in the documentation [here](https://www.patternfly.org/v4/documentation/core/components/chip)
