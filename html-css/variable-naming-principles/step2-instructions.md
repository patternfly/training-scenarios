Global custom properties follow these rules.

* They are prefixed with the word `global` and follow the formula `--pf-global--concept--PropertyCamelCase--modifier--state.`
 * a `concept` is something like a `spacer` or `main-title`.
 * a `PropertyCamelCase` is something like `BackgroundColor` or `FontSize`.
 * a `modifier` is something like `sm`, or `lg`.
 * and a `state` is something like `hover`, or `expanded`.
They are concepts, never tied to an element or component. This is incorrect: `--pf-global--h1--FontSize`, this is correct: `--pf-global--FontSize--3xl`.

## Workshop: Override the global link color custom property for "danger"

In this workshop we are going to change the global link color custom property to `var(--pf-global--danger-color--100)`.

1) <strong>Copy code into the myapp.scss file.</strong>

Click the <strong>Copy to Editor</strong> button below to set up your stylesheet in the `myapp.scss` file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
:root {
  // Add global variables here
}
</pre>

2) Since global custom properties are prefixed with the word “global”, let’s write the beginning of the selector:

<strong>Hint: </strong>`--pf-global`

3) The concept for a link color is “link”. Knowing that the concept comes next, let’s add that to our custom property:

<strong>Hint: </strong>`--pf-global--link`

4) Since we’re modifying the color, we need to add the color property.

<strong>Hint: </strong>`--pf-global--link--Color`

5) Now that we have the <strong>custom property name</strong>, we simply need to create a declaration with the danger color referenced above as the value:

This is the one line that you should add inside of the `:root{}` block:
`--pf-global--link--Color: var(--pf-global--danger-color--100);`