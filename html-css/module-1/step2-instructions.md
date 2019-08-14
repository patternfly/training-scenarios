Just as atoms can be combined to create molecules, the smaller, simpler components can be combined to create more complex, reusable components. When smaller components are used within more complex components, the layout of the elements are defined in the css for the complex component. 

## Workshop: Add a badge component to the chip component

Lets add a chip component and then add the code for a badge inside.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Chip component to the `index.html` file.

<strong>Note:</strong> This is the default chip component that already has another component in it: the button! So the chip is already a "molecule" as per the description above.

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

2) Now that we have a Chip component, lets add the Badge component inside. 

<strong>Pro Tip:</strong> Remember this is a component and not a demo because the chip component includes styles that handle how the badge looks within the chip. For example, when the badge component is added to the Chip it receives a margin-left. You can read more in the documentation here: https://www.patternfly.org/v4/documentation/core/components/chip

3) Add the Badge inside of the Chip. Add the block of code below, between `pf-c-chip__text` and `pf-c-button`.

```
<span class="pf-c-badge pf-m-read">
  7
</span>
```
