Just as atoms can be combined to create molecules, the smaller, simpler components can be combined to create more complex, reusable components. When smaller components are used within more complex components, the layout of the elements are defined in the css for the complex component. 

## Workshop: Add a badge component to the chip component

a. **Copy this code to the editor for the chip component.** This is the default chip component that already has another component in it, the button! So the chip is already a molecule.

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

b. Let’s make a variation of the default chip component by **adding the badge component** into the chip component. Remember this is a component and not a demo because the chip component includes styles that handle how the badge looks within the chip. For example,  when the badge component is added to the chip it gets a margin-left. **Add this block under the closing bracket for the text and before the button.**

`<span class="pf-c-badge pf-m-read">
        7
</span>`
