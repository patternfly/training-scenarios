As we have seen, in order to override variables its important to understand how BEM is used to name them. It’s just as important when creating variables.

## Workshop: Add a BEM element and custom styles with CSS custom property to support an icon element in the Label component

a. We are going to add a custom icon element to the label component and apply a margin-right of 8px (--pf-global--spacer--sm)

b. Let's assume there is a common use case for adding an icon to the left of text in the label component when used in your application. Start out by adding a label component.

`<span class="pf-c-label">
    My custom label
</span>`

c. Then place an icon before the label text

`<span class="pf-c-label">
  <i class="fas fa-plus"></i>
  My custom label
</span>`

d. The label component only styles the label itself and the text inside. While this looks OK, we need to add space between the icon and the text beside it. To do this the BEM way, let's assign a BEM element class to the icon.

`<span class="pf-c-label">
  <i class="pf-c-label__icon fas fa-plus"></i>
  My custom label
</span>`

e. Now we need to style the label icon and apply the margin to it. Begin by writing the selector for the label component in the CSS panel of the codepen so that you can apply CSS that is scoped to the component.
`.pf-c-label {
}`

f. Since we know that we never apply global custom properties as the value for property in a component's CSS, we need to start by creating a new variable to represent the icon's margin. Start by defining the beginning of the custom property. From the previous exercise we know this is the name of the component.
`--pf-c-label`

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
