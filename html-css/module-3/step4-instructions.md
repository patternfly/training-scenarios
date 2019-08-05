 
Making your own modifier class is easy and will save you time. Choose which component you would like to add a modifier class and then select an element that you wish to modify. Create a modifier class name that represents the new style, and add the new styles to the stylesheet, as well as the new modifier class to the html. Here is a list of modifiers that we have in patternfly: https://pf4.patternfly.org/modifiers

## Task: Create a modifier class for the Label component:
a. <strong>Let’s create a “warning” variation of the label component by creating a modifier class.</strong>

b. <strong>Copy code to label.html</strong> Click the <strong>Copy to Editor</strong> button below to add html for a Label to the index.html file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;!--Label.html--&gt;
&lt;span class=&quot;pf-c-label&quot;&gt;
  Default Label
&lt;/span>
&lt;span class=&quot;pf-c-label&quot;&gt;
  Warning Label
&lt;/span>
</pre>

c. <strong>Copy code to label.scss</strong> Click the <strong>Copy to Editor</strong> button below to add CSS for a Label to the layout.scss file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
<!--Label.scss-->
.pf-c-label {
// Component
--pf-c-label--PaddingTop: var(--pf-global--spacer--xs);
--pf-c-label--PaddingRight: var(--pf-global--spacer--sm);
--pf-c-label--PaddingBottom: var(--pf-global--spacer--xs);
--pf-c-label--PaddingLeft: var(--pf-global--spacer--sm);
--pf-c-label--BorderRadius: var(--pf-global--BorderRadius--sm);

// Color
--pf-c-label--BackgroundColor: var(--pf-global--primary-color--100);
--pf-c-label--Color: var(--pf-global--Color--light-100);

// Font
--pf-c-label--FontSize: var(--pf-global--FontSize--sm);

// Modifiers
--pf-c-label--m-compact--FontSize: var(--pf-global--FontSize--xs);

display: inline-block;
padding: var(--pf-c-label--PaddingTop) var(--pf-c-label--PaddingRight) var(--pf-c-label--PaddingBottom) var(--pf-c-label--PaddingLeft);
font-size: var(--pf-c-label--FontSize);
color: var(--pf-c-label--Color);
text-align: center;
white-space: nowrap;
background-color: var(--pf-c-label--BackgroundColor);
border-radius: var(--pf-c-label--BorderRadius);

&.pf-m-compact {
--pf-c-label--FontSize: var(--pf-c-label--m-compact--FontSize);
}
}
</pre>

d. In label.scss underneath the block for pf-m-compact, add the modifier for pf-m-warning: 
&.pf-m-warning { }

e. When creating the new styles for a modifier think about which styles you want to override. E.g. in this case, we want to override the variable for background color: --pf-c-label--BackgroundColor, to be assigned to var(--pf-global--warning-color--100) rather than var(--pf-global--primary-color--10).

f. First you need to declare the variables, so under the `//Modifiers` section add:
`--pf-c-label--m-warning--BackgroundColor: var(--pf-global--warning-color--100)`

g. And under the last line, assign the new variable to override the original variable:
`&.pf-m-warning { --pf-c-label--BackgroundColor: --pf-c-label--m-warning--BackgroundColor )`

h. Now in the label.html add the new example for the warning modifier. 
`<span class=”pf-c-label pf-m-warning”> Warning Label </span>`
