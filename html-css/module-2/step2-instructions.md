Global custom properties follow these rules.

* They are prefixed with the word `global` and follow the formula `--pf-global--concept--PropertyCamelCase--modifier--state.`
 * a `concept` is something like a `spacer` or `main-title`.
 * a `PropertyCamelCase` is something like `BackgroundColor` or `FontSize`.
 * a `modifier` is something like `sm`, or `lg`.
 * and a `state` is something like `hover`, or `expanded`.
They are concepts, never tied to an element or component. This is incorrect: `--pf-global--h1--FontSize`, this is correct: `--pf-global--FontSize--3xl`.

## Workshop: Override the global link color custom property for danger

a. In this workshop we are going to change the global link color custom property to var(--pf-global--danger-color--100).Since global custom properties are prefixed with the word “global”, let’s write the beginning of the selector:
`--pf-global`

b. The concept for a link color is “link”. Knowing that the concept comes next, let’s add that to our custom property:
`--pf-global--link`

c. Since we’re modifying the color, we need to add the color property
`--pf-global--link--Color`

d. Now that we have the custom property name, we simply need to create a declaration with the danger color referenced above as the value:
`--pf-global--link--Color: var(--pf-global--danger-color--100);`