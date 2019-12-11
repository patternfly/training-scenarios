As seen in previous steps, in order to override variables its important to understand how BEM is used to name them. It’s just as important when creating variables.

In this step, add a BEM element and custom styles with CSS custom properties to support an icon element in the label component. Assume there is a common use case for adding an icon to the left of text in the label component. When adding the custom icon element to the label component, also apply a margin-right of 8px.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button to add a label component to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-label&quot;&gt;
  My custom label
&lt;/span&gt;
</pre>

2) <strong>Add an icon before the label text.</strong>

Add markup for the icon: `<i class="fas fa-plus"></i>` above the text: "My custom label".

3) <strong>Add a new class to the icon added in step 2.</strong>

The label component only styles the label itself and the text inside. While this looks okay, its necessary to add space between the icon and the text beside it.

To do this the BEM way, assign a BEM element class to the icon.

Before the `fas` in the icon class, add the class `pf-c-label__icon`.

It should look like this:

```
<span class="pf-c-label">
  <i class="pf-c-label__icon fas fa-plus"></i>
  My custom label
</span>
```

4) <strong>Style the label icon and apply a margin to it.</strong>

<strong>Note: </strong>Never apply a global custom property as the value for a property in a component's CSS.

Copy code into the `myapp.scss` file.

Click the `Copy to Editor` button below to add the stylesheet to `myapp.scss`.

<pre class="file" data-filename="myapp.scss" data-target="replace">
.pf-c-label {
  // Add Label component variables here
}
</pre>

5) <strong>Create a new variable to represent the icon's margin.</strong>

Within `myapp.scss`, in the `.pf-c-label{}` block, start by defining the beginning of the custom property, which is the name of the component.

It should look like: `--pf-c-label`

6) <strong>Define the element that the custom property applies to.</strong>

Add the element after the name of the component.

The custom property should now be: `--pf-c-label__icon`

7) <strong>Add the property being applied to the icon.</strong>

Add the property after the element.

It should look like: `--pf-c-label__icon--MarginRight`

8) <strong>Add a declaration using the new custom property created in steps 5-7.</strong>

PatternFly's global variable for 8px of space is `--pf-global--spacer--sm`.

Assign the custom property name: `--pf-c-label__icon--MarginRight` that is already inside of the `.pf-c-label{}` block, to the global variable for 8px of space.

It should look like: `--pf-c-label__icon--MarginRight: var(--pf-global--spacer--sm);`

9) <strong>Add a new selector block for the style assigned to the label icon.</strong>

Create a new selector block for `pf-c-label__icon` in `myapp.scss`. It should be added to the global scope (outside of the existing `.pf-c-label` selector) to apply the margin styles to.

It should look like this:
```
.pf-c-label__icon {
  // Add styles here
}
```

10) <strong>Assign the new custom property name to the property that is being overriden.</strong>

Add a `margin-right` declaration inside of `.pf-c-label__icon{}` and assign it to the new margin variable.

It should look like this:
`margin-right: var(--pf-c-label__icon--MarginRight);`

<strong>Note: </strong> Once the preview reloads, there should be space to the right of the icon.