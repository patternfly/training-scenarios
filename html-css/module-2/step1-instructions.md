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

1) <strong>Copy code into the myapp.scss file.</strong>

Click the <strong>Copy to Editor</strong> button below to set up your stylesheet in the `myapp.scss` file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
:root {
  // Add global variables here
}

.pf-c-alert {
  // Add Alert component variables here
}
</pre>

<strong>Note:</strong> The task is to change the success variation’s title color to PatternFly’s danger color. To find the BEM class for the success variation of the alert component, and the alert title, visit https://www.patternfly.org/v4/documentation/core/components/alert.

Scroll to the bottom to view the Alert component’s documentation and note the class for the success variation is **.pf-m-success**, and the class for the title is **.pf-c-alert__title**.

2) To override the success variation’s title color, we need to override its custom property. In the `myapp.scss` file, in the `.pf-c-alert{}`block, let's begin writing the custom property name. Start with the component part of the custom property name:

<strong>Hint: </strong> `--pf-c-alert`

3) Lets add the modifier to the custom property name.

<strong>Note: </strong> In this step you will need to reference the documentation. In it we can see that the success variation class **.pf-m-success** applies to **.pf-c-alert**, so we need to add that modifier to the custom property:

<strong>Hint: </strong>`--pf-c-alert--m-success`

4) Next we want to find the title’s element name and add that:

<strong>Hint: </strong>`--pf-c-alert--m-success__title`

5) And finally, we want to modify the color property, so let’s add that:

<strong>Hint: </strong>`--pf-c-alert--m-success__title--Color`

6) Now that we have the <strong>custom property name</strong>, we simply need to create a declaration with the danger color referenced above as the value:

This is the one line that you should add inside of the `.pf-c-alert{}` block:
`--pf-c-alert--m-success__title--Color: var(--pf-global--danger-color--100);`