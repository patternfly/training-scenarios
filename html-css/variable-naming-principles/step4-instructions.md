As we have seen, in order to override variables its important to understand how BEM is used to name them. It’s just as important when creating global variables.

## Workshop: Create a new global custom property for a 5xl font size, and new variation of the title component to use the 5xl global variable

Referencing the typography design guidelines (https://www.patternfly.org/v4/design-guidelines/styles/typography), the largest font size we offer is a "Hero title" size at 36px represented by the global variable `pf-global--FontSize--4xl`. On certain customer facing pages of your application, let's assume you have CTA's that need a slightly larger font-size (42px), and you want that available as a variation of the title component (.pf-m-5xl) to reuse throughout your application.

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add a title component using the new modifier of `pf-m-5xl` in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;h1 class=&quot;pf-c-title pf-m-5xl&quot;&gt;
  5xl title
&lt;/h1&gt;
</pre>

2) Let's begin writing the CSS. By defining the `:root` scope we can place the new global variable for the 42px font size in it. <strong>Copy code into the myapp.scss file.</strong>

Click the <strong>Copy to Editor</strong> button below to add the stylesheet in the `index.html` file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
:root {
  //Add global variables here
}

.pf-c-title {
  //Add Title component variables here
}
</pre>

3) Next, let's define the global custom property name we will use. Following the existing convention for global font size custom properties, add the following custom property inside of the `:root{}` block:

Add: `--pf-global--FontSize--5xl`

4) Now you need to create a declaration using the new custom property with the font size you want as the value and add that to your selector.<strong>Update the line we added in step 3 and add 42px.</strong>

<strong>Hint: </strong> `--pf-global--FontSize--5xl: 42px;`

5) Now that you have the var `--pf-global--FontSize--5xl` available for use throughout your application, let's create a new variation of the title component that uses this new global variable.

<strong>Note: </strong> Referencing the title component documentation (https://www.patternfly.org/v4/documentation/core/components/title), note that the largest modifier size is .pf-m-4xl and that modifier class applies to `.pf-c-title`. 

6) We need to create a local custom property in the title component to represent the 5xl variation's font size. Beginning with the component name, let's start writing the custom property and add it to the `.pf-c-title{}` block in the `myapp.scss` file:

<strong>Hint: </strong>`--pf-c-title`

7) Next add the new modifier: `--pf-c-title--m-5xl`

8) And finally add the property that the custom property represents: `--pf-c-title--m-5xl--FontSize`

9) Now create a declaration with the global variable you added as the value for your new custom property. There should just be one line of code inside of `.pf-c-title{}`:

<strong>Hint: </strong>`--pf-c-title--m-5xl--FontSize: var(--pf-global--FontSize--5xl);`

10) Next we need to write a CSS selector for the new 5xl variation. Knowing that the modifier `.pf-m-5xl` will apply to the title component, let's use the & in SCSS nested inside of .pf-c-title to create `.pf-c-title.pf-m-5xl`.

<strong>Hint: </strong> Add this block inside of `.pf-c-title`:

```
&.pf-m-5xl {
  //Code goes here
}
```

11) Last all we need to do is create a declaration within the modifier to define the font-size property with a value of the new title component custom property we created for this variation. Add this line inside of `.pf-m-5xl{}`

Add: `font-size: var(--pf-c-title--m-5xl--FontSize);`
