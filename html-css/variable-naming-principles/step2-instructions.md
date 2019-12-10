Global custom properties follow these rules:

In PatternFly, global properties follow this general formula: `--pf-global--concept--PropertyCamelCase--modifier--state.`
 * They are prefixed with the word `global`
 * a `concept` is something like a `spacer` or `main-title`.
 * a `PropertyCamelCase` is something like `BackgroundColor` or `FontSize`.
 * a `modifier` is something like `sm`, or `lg`.
 * and a `state` is something like `hover`, or `expanded`.
They are concepts, never tied to an element or component. This is incorrect: `--pf-global--h1--FontSize`, this is correct: `--pf-global--FontSize--3xl`.

In this step, override the global link color by setting it to the custom property for `danger`. Add a button and expandable component to see how changing a global variable has an impact across components.

1) <strong>Add two components to `index.html`.</strong>

Click the `Copy to Editor` button below to add a button component and expandable component to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot; type=&quot;button&quot;&gt;Inline link&lt;/button&gt;

&lt;div class=&quot;pf-c-expandable&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;pf-c-expandable__toggle&quot; aria-expanded=&quot;false&quot;&gt;
    &lt;i class=&quot;fas fa-angle-right pf-c-expandable__toggle-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
    &lt;span&gt;Show more&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;
</pre>

2) <strong>Copy code into the `myapp.scss` file.</strong>

Click the `Copy to Editor` button below to set up the stylesheet in the `myapp.scss` file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
:root {
  // Add global variables here
}
</pre>

3) <strong>Write the prefix for the global custom property.</strong>

Since global custom properties are prefixed with the word `global`, use that for the beginning of the custom property.

In the `myapp.scss` file, in the `:root`block, begin writing the global custom property.

It should look like: `--pf-global`

4) <strong>Add the `concept` to the global custom property.</strong>

The `concept` for the link color is `link`. Knowing that the concept comes next, add that to the global custom property.

The global custom property should now look like: `--pf-global--link`

5) <strong>Add the `property` to the global custom property.</strong>

As the color is being modified, add the color property as the next step.

The global custom property should now look like: `--pf-global--link--Color`

6) <strong>Add a declaration using the new custom property created in steps 2-4.</strong>

PatternFly's global danger color is: `--pf-global--danger-color--100`.

Assign the custom property name: `--pf-global--link--Color` that is already inside of the `:root` block, to the global danger color.

It should look like this:
`--pf-global--link--Color: var(--pf-global--danger-color--100);`

<strong>Note: </strong> The button component and expandable component should inherit different colors.