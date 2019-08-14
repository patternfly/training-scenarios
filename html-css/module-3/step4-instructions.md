 Making your own modifier class is easy and will save you time. Choose which component you would like to add a modifier class and then select an element that you wish to modify. Create a modifier class name that represents the new style, and add the new styles to the stylesheet, as well as the new modifier class to the html. Here is a list of modifiers that we have in PatternFly: https://pf4.patternfly.org/modifiers

## Task: Create a modifier class for the Label component

Let’s create a “warning” variation of the label component by creating a suitable modifier class.

1) <strong>Copy code to the editor.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Label to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-label&quot;&gt;
  Default Label
&lt;/span>
&lt;span class=&quot;pf-c-label&quot;&gt;
  Warning Label
&lt;/span>
</pre>

2) <strong>Copy more code to the editor.</strong>

Click the <strong>Copy to Editor</strong> button below to add the template for your new styles.

<pre class="file" data-filename="myapp.scss" data-target="replace">
.pf-c-label {
  // Styles go here
}
</pre>

3) In `myapp.scss` add a new block inside of the `.pf-c-label` class that will add styles for the warning modifier:

```
&.pf-m-warning {
  //Add styles here
}
```

<strong>Pro Tip: </strong> When creating new styles for a modifier think about which styles you want to override. E.g. in this case, we want to override the variable for the component's background color and assign it to a new global variable.

4) In order to do this, you need to declare the variable. Add the declaration inside of `pf-c-label` and above `&.pf-m-warning`:

Add: `--pf-c-label--m-warning--BackgroundColor: var(--pf-global--warning-color--100);`

5) Now we need to override the original background color variable by setting its value to the new modifier variable you just created. Add this line inside of `&.pf-m-warning{}`:

`--pf-c-label--BackgroundColor: var(--pf-c-label--m-warning--BackgroundColor);`

6) Now in `index.html` lets add the modifier class that we just created to the second label example.

<strong>Hint: </strong> 
```
<span class=”pf-c-label pf-m-warning”>
  Warning Label
</span>
```
