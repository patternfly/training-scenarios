
Patternfly is based on the BEM system, whereby modifiers are tied to an “element” rather than the entire “block”, therefore a modifier class can only work with a specific element class in the component. In the Badge we saw that the modifier was set on the component class, which is also possible, but let’s look at a larger component to see how the modifier classes are applied to different elements in the component.

## Task: Add modifiers to the dropdown component
a. This is a link to the documentation for the dropdown component. <strong> At the bottom of the page, you will see the documentation for the modifier classes under “class” and the classes they apply to under “applied”.</strong>  https://pf4.patternfly.org/components/Dropdown/examples/

b. Add `pf-m-expanded` to `pf-c-dropdown`, you’ll see that the the bottom-border has changed to a blue line. For this example you will also need to remove `hidden` from `pf-c-dropdown__menu`. 

c. Let’s try another modifier. Add `pf-m-plain` to `pf-c-dropdown__toggle` so that it’s modified to display the toggle modifier with no border.

d. Now add `pf-m-plain` to `pf-c-dropdown__menu`. What happens? <strong> Nothing should happen</strong>  because the styles associated with the modifier class are not scoped to `pf-c-dropdown__menu`, they are only scoped to `pf-c-dropdown__toggle`.
Always remember to refer to the documentation!

Remember to click the <strong>Reload</strong> button above the preview panel to see how the styles change after you make updates.