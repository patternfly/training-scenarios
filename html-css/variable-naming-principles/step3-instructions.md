Its important to understand how BEM is used to override variables and also to create them.

In this step, add a BEM element and custom styles with CSS custom properties to support a badge element in the label component. Assume there is a common use case for adding a badge to the left of text in the label component. When adding the custom badge element to the label component, also apply a margin-right of 8px.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button to add a label component to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-label pf-m-purple&quot;&gt;
  &lt;span class=&quot;pf-c-label__content&quot;&gt;
    My custom label
  &lt;/span&gt;
&lt;/span&gt;
</pre>

2) <strong>Add a badge before the label text.</strong>

Add markup for the badge above the text reading, "My custom label":

<pre class="file" data-target="clipboard">
  &lt;div class=&quot;pf-c-badge pf-m-unread&quot;&gt;
    4
  &lt;/div&gt;
</pre>

3) <strong>Add a new class to the badge added in step 2.</strong>

The label component only styles the label itself and the text inside. While this looks okay, its necessary to add space between the badge and the text beside it.

To do this the BEM way, assign a BEM element class to the badge.

After the `pf-c-badge` class, add the class `pf-c-label__badge`.

It should look like this:

```
<span class="pf-c-label pf-m-purple">
  <div class="pf-c-badge pf-m-unread">
    4
  </div>
  <span class="pf-c-label__content">
    My custom label
  </span>
</span>
```

4) <strong>Style the badge and apply a margin to it.</strong>

<strong>Note: </strong>Never apply a global custom property as the value for a property in a component's CSS.

Copy code into the `myapp.scss` file.

Click the `Copy to Editor` button below to add the stylesheet to `myapp.scss`.

<pre class="file" data-filename="myapp.scss" data-target="replace">
.pf-c-label {
  // Add Label component variables here
}
</pre>

5) <strong>Create a new variable to represent the badge's margin.</strong>

Within `myapp.scss`, in the `.pf-c-label{}` block, define the beginning of the custom property, which is the name of the component.

It should look like: `--pf-c-label`

6) <strong>Define the element that the custom property applies to.</strong>

Add the element after the name of the component.

The custom property should now be: `--pf-c-label__badge`.

7) <strong>Add the property being applied to the badge.</strong>

Add the property after the element.

It should look like this: `--pf-c-label__badge--MarginRight`

8) <strong>Add a declaration using the new custom property created in steps 5–7.</strong>

PatternFly's global variable for 8px of space is `--pf-global--spacer--sm`.

Assign the custom property name `--pf-c-label__badge--MarginRight` that is already inside of the `.pf-c-label{}` block to the global variable for 8px of space.

It should look like this: `--pf-c-label__badge--MarginRight: var(--pf-global--spacer--sm);`

9) <strong>Add a new selector block for the style assigned to the label badge.</strong>

Create a new selector block for `pf-c-label__badge` in `myapp.scss`. It should be added to the global scope (outside of the existing `.pf-c-label` selector) to apply the margin styles to it.

It should look like this:
```
.pf-c-label__badge {
  // Add styles here
}
```

10) <strong>Assign the new custom property name to the property that is being overriden.</strong>

Add a `margin-right` declaration inside of `.pf-c-label__badge{}` and assign it to the new margin variable.

It should look like this:
`margin-right: var(--pf-c-label__badge--MarginRight);`

<strong>Note: </strong> Once the preview reloads, there should be space to the right of the badge.