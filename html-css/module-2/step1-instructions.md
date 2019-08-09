BEM stands for Block Element and Modifier, where, Block maps to the component, element is the elements within the component and modifiers are tied to the elements in the block.

Let's look at how component variables are named:
Similarly, component-level custom properties follow this general formula `--pf-c-block[__element][--modifier][--state][--breakpoint][--pseudo-element]--PropertyCamelCase.`

* `--pf-c-block` refers to the block, usually the component or layout name (i.e., --pf-c-alert).
* `__element` refers to the element inside of the block (i.e., __title).
* `--modifier` refers to a modifier class such as `.pf-m-danger`, and is prefixed with m- in the component variable (i.e., `--m-danger`).
* `--state` is something like hover or active.
* `--breakpoint` is a media query breakpoint such as sm for $pf-global--breakpoint--sm.
* `--pseudo-element` is one of either before or after.

## Workshop: Override the title color custom property in the success variation of the alert component.

a. We want to change the success variation’s title color to PatternFly’s danger color `var(--pf-global--danger-color--100)`. To find the BEM class for the success variation of the alert component, and the alert title, visit https://www.patternfly.org/v4/documentation/core/components/alert.

b. Scroll to the bottom to view the Alert component’s documentation and note the class for the success variation is **.pf-m-success**, and the class for the title is **.pf-c-alert__title**.

c. To override the color, we want to override the custom property defined for the success variation’s title color. Since component level custom properties are defined in the top-level component selector, use .pf-c-alert as the selector for your overrides. Write the following in the CSS file
`.pf-c-alert {
}`

d. Let’s start with the component part of the custom property name:
`--pf-c-alert`

e. Referencing the documentation, we can see that the success variation class **.pf-m-success** applies to **.pf-c-alert**, so we need to add that modifier to the custom property:
`--pf-c-alert--m-success`

f. Next we want to find the title’s element name and add that:
`--pf-c-alert--m-success__title`

g. And finally, we want to modify the color property, so let’s add that:
`--pf-c-alert--m-success__title--Color`

h. Now that we have the custom property name, we simply need to create a declaration with the danger color referenced above as the value:
`--pf-c-alert--m-success__title--Color: var(--pf-global--danger-color--100);`