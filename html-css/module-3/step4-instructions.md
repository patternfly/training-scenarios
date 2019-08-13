 Making your own modifier class is easy and will save you time. Choose which component you would like to add a modifier class and then select an element that you wish to modify. Create a modifier class name that represents the new style, and add the new styles to the stylesheet, as well as the new modifier class to the html. Here is a list of modifiers that we have in patternfly: https://pf4.patternfly.org/modifiers

## Task: Create a modifier class for the Label component
a. <strong>Let’s create a “warning” variation of the label component by creating a suitable modifier class.</strong>

b. <strong>Copy code to the editor.</strong> Click the <strong>Copy to Editor</strong> button below to add html for a Label to the index.html file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-label&quot;&gt;
  Default Label
&lt;/span>
&lt;span class=&quot;pf-c-label&quot;&gt;
  Warning Label
&lt;/span>
</pre>

c. <strong>Copy code to the editor.</strong> Click the <strong>Copy to Editor</strong> button below to add the template for your new styles.

<pre class="file" data-filename="myapp.scss" data-target="replace">
<!--Label.scss-->
.pf-c-label {
  // Styles go here
}
</pre>

d. In `myapp.scss` add a new block inside of the `.pf-c-label` class that will add styles for the warning modifier:

```
&.pf-m-warning {

}
```

e. When creating new styles for a modifier think about which styles you want to override. E.g. in this case, we want to override the variable for the component's background color: `--pf-c-label--BackgroundColor`, to be assigned to `var(--pf-global--warning-color--100)` rather than `var(--pf-global--primary-color--100)`.

f. First you need to declare the variable. Inside of `pf-c-label` and above `&.pf-m-warning` add:

`--pf-c-label--m-warning--BackgroundColor: var(--pf-global--warning-color--100)`

g. Now we need to override the original background color variable by setting its value to the new modifier variable you just created. Add this line inside of `&.pf-m-warning{}`:

`--pf-c-label--BackgroundColor: var(--pf-c-label--m-warning--BackgroundColor)`

h. Now in `index.html` lets add the modifier class that we just created to the second label example.

<strong>Hint: </strong> 
```
<span class=”pf-c-label pf-m-warning”>
  Warning Label
</span>
```
