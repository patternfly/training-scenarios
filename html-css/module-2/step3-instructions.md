As we have seen in previous steps, in order to override variables its important to understand how BEM is used to name them. It’s just as important when creating variables.

## Workshop: Add a BEM element and custom styles with CSS custom properties to support an icon element in the Label component

For this workshop let's assume there is a common use case for adding an icon to the left of text in the label component when used in your application. When we add the custom icon element to the label component we should also apply a margin-right of 8px.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add a Label component in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-label&quot;&gt;
  My custom label
&lt;/span&gt;
</pre>

2) Copy code into the index.html file to place an icon before the label text

Click the <strong>Copy to Editor</strong> button below to add a Label and Icon in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-label&quot;&gt;
  &lt;i class=&quot;fas fa-plus&quot;&gt;&lt;/i&gt;
  My custom label
&lt;/span&gt;
</pre>

3) The label component only styles the label itself and the text inside. While this looks OK, we need to add space between the icon and the text beside it. To do this the BEM way, let's assign a BEM element class to the icon.

Search for `<i class="fas fa-plus"></i>`. Before the `fas` add the class `pf-c-label__icon`.

<strong>Hint: </strong>
```
<span class="pf-c-label">
  <i class="pf-c-label__icon fas fa-plus"></i>
  My custom label
</span>
```

Now we need to style the label icon and apply the margin to it.

5) <strong>Copy code into the myapp.scss file.</strong>

Click the <strong>Copy to Editor</strong> button below to add a stylesheet in the `myapp.scss` file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
.pf-c-label {
  // Add Label component variables here
}
</pre>

<strong>Pro Tip: </strong>Since we know that we never apply global custom properties as the value for property in a component's CSS, we need to start by creating a new variable to represent the icon's margin. 

6) Within the `myapp.scss` file, in the `.pf-c-label{}` block, start by defining the beginning of the custom property. From the previous exercise we know this is the name of the component.

<strong>Hint: </strong>`--pf-c-label`

g. Then define the element that the custom property applies to.
`--pf-c-label__icon`

h. Next add the property that the custom property applies to.
`--pf-c-label__icon--MarginRight`

i. Now create the declaration using the 8px global custom property referenced above.
`--pf-c-label__icon--MarginRight: var(--pf-global--spacer--sm);`

j. Let's add that to the selector in the codepen.
`.pf-c-label {
--pf-c-label__icon--MarginRight: var(--pf-global--spacer--sm);
}`

k. Since BEM allows us to avoid nesting, let's create a new selector in the codepen in the global scope (outside of the existing .pf-c-label selector) to apply the margin styles to.

`.pf-c-label__icon { 
}`

l. Now all we need is a margin-right declaration that gives our icon the spacing we need.
`.pf-c-label__icon {
  margin-right: var(--pf-c-label__icon--MarginRight);
}`
