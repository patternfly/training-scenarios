# Create your own modifier class

Making your own modifier class is easy and will save you time. Choose which component you would like to add a modifier class and then select an element that you wish to modify. Create a modifier class name that represents the new style, and add the new styles to the stylesheet, as well as the new modifier class to the html. Here is a list of modifiers that we have in patternfly: https://pf4.patternfly.org/modifiers

## Task: Create a modifier class for the Label component:
a. Let’s create a “warning” variation of the label component by creating a modifier class.

b. Copy code to label.html

c. Copy code to label.scss

d. In label.scss underneath the block for pf-m-compact, add the modifier for pf-m-warning: 
&.pf-m-warning { }

e. When creating the new styles for a modifier think about which styles you want to override. E.g. in this case, we want to override the variable for background color: --pf-c-label--BackgroundColor, to be assigned to var(--pf-global--warning-color--100) rather than var(--pf-global--primary-color--10).

f. First you need to declare the variables, so under the `//Modifiers` section add:
`--pf-c-label--m-warning--BackgroundColor: var(--pf-global--warning-color--100)`

g. And under the last line, assign the new variable to override the original variable:
`&.pf-m-warning { --pf-c-label--BackgroundColor: --pf-c-label--m-warning--BackgroundColor )`

h. Now in the label.html add the new example for the warning modifier. 
`<span class=”pf-c-label pf-m-warning”> Warning Label </span>`

