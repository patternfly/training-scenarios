This step looks at how component variables are named.

In PatternFly, component-level custom properties follow this general formula `--pf-c-block[__element][--modifier][--state][--breakpoint][--pseudo-element]--PropertyCamelCase.`

* `--pf-c-block` refers to the block, usually the component or layout name (i.e. `--pf-c-alert`).
* `__element` refers to the element inside of the block (i.e. `__title`).
* `--modifier` refers to a modifier class such as `.pf-m-danger`, and is prefixed with m- in the component variable (i.e.`--m-danger`).
* `--state` is something like hover or active.
* `--breakpoint` is a media query breakpoint such as sm for $pf-global--breakpoint--sm.
* `--pseudo-element` is one of either before or after.
* `PropertyCamelCase` refers to the property that is being changed.

In this step, override the title color custom property in the success variation of the alert component.

Katacoda is setting up a new application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

1) <strong>Add a success alert component to `index.html`.</strong>

Click the `Copy to Editor` button below to add the success component in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-alert pf-m-success&quot;&gt;
  &lt;div class=&quot;pf-c-alert__icon&quot;&gt;
    &lt;i class=&quot;fas fa-check-circle&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;h4 class=&quot;pf-c-alert__title&quot;&gt;Success alert title&lt;/h4&gt;
&lt;/div&gt;
</pre>

2) <strong>Set up the styles file for the alert component.</strong>

Click the `Copy to Editor` button below to set up the stylesheet in the `myapp.scss` file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
:root {
  // Add global variables here
}

.pf-c-alert {
  // Add Alert component variables here
}
</pre>

3) <strong>Write the block for the custom property name.</strong>

Overriding the success variation’s title color, means overriding its custom property.

In the `myapp.scss` file, in the `.pf-c-alert{}`block, begin writing the custom property name.

In reference to the documentation above, it should be: `--pf-c-alert`

4) <strong>Add the modifier to the custom property name.</strong>

Reference the [documentation](https://www.patternfly.org/v4/documentation/core/components/alert) by scrolling down to the bottom to view the alert component's documentation. Note that the success variation class `.pf-m-success` applies to `.pf-c-alert`. Add that modifier to the custom property.

The custom property name should now be: `--pf-c-alert--m-success`

5) <strong>Add the element to the custom property name.</strong>

The element that is being changed is the `title` of the alert.

The custom property name should now be: `--pf-c-alert--m-success__title`

6) <strong>Add the property that is being modified.</strong>

In this case, modify the color property of the title in the alert component.

The custom property name should now be: `--pf-c-alert--m-success__title--Color`

7) <strong>Add a declaration using the new custom property created in steps 3-6.</strong>

PatternFly's global danger color is: `--pf-global--danger-color--100`.

Assign the custom property name: `--pf-c-alert--m-success__title--Color` that is already inside of the `.pf-c-alert{}` block, to the global danger color.

It should look like this:
`--pf-c-alert--m-success__title--Color: var(--pf-global--danger-color--100);`

<strong>Note: </strong> The alert component should have a new color for the title.