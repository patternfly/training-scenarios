In this step, create a custom `warning` variation for the label component. First, choose which component to add a modifier class to and then select an element to be modified. Second, create a modifier class name that represents the new style. Third, add the new modifier class to the HTML. Fourth, add the new styles to the stylesheet.

1) <strong>Copy code to the `index.html` file.</strong>

Click the `Copy to Editor` button below to add HTML for two label components.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-label&quot;&gt;
  Default Label
&lt;/span>
&lt;span class=&quot;pf-c-label&quot;&gt;
  Warning Label
&lt;/span>
</pre>

2) <strong>Set up the styles file in `myapp.css`.</strong>

Click the `Copy to Editor` button below to add the template for the new styles.

<pre class="file" data-filename="myapp.scss" data-target="replace">
.pf-c-label {
  // Styles go here
}
</pre>

3) <strong>Decide on which styles to override for the component.</strong>

When adding new style overrides for a component, decide on which properties to change. For example, in the case of the label, you might choose to override the background color because the component already styles the background color.

4) <strong>Write a custom property to target the warning variation.</strong>

Add the custom property inside of the `.pf-c-label{}` block.

The custom property should follow the general formula discussed in the `variable naming principles` tutorial: `--pf-c-block[__element][--modifier][--state][--breakpoint][--pseudo-element]--PropertyCamelCase.`

In this case, it should be: `--pf-c-label--m-warning--BackgroundColor`

5) <strong>Assign the custom property to a global variable.</strong>

On the same line as the custom property added in step 5, assign the property to the global variable for `warning` color, which is `--pf-global--warning-color--100`.

The declaration inside of the `.pf-c-label{}` block should look like: `--pf-c-label--m-warning--BackgroundColor: var(--pf-global--warning-color--100);`

6) <strong>Add a new block to target styles for the `warning` variation.</strong>

In `myapp.scss` nest the block `&.pf-m-warning{}` inside of the `.pf-c-label{}` class, using the SCSS &.

It should look like the following:

```
&.pf-m-warning {
  //Add styles here
}
```

7) <strong>Override the original background color variable by setting its value to the new modifier variable that was created. </strong>

Inside of `&.pf-m-warning{}` add this line:

`--pf-c-label--BackgroundColor: var(--pf-c-label--m-warning--BackgroundColor);`

8) <strong>Add the `warning` modifier class to `index.html`.</strong>

a) <strong>Locate the second `pf-c-label` class in `index.html`.</strong>

b) <strong>Add the new modifier class next to the `pf-c-label` class, inside of the quotation marks.</strong>

It should look like this:
```
<span class=”pf-c-label pf-m-warning”>
  Warning Label
</span>
```
