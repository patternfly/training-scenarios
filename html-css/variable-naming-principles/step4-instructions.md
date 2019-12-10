Create a new global custom property for a 5xl font size. Use this new global variation to make a new variation of the title component.

Referencing the typography [design guidelines](https://www.patternfly.org/v4/design-guidelines/styles/typography), the largest font size PatternFly offers is a "Hero title" size. It is 36px represented by the global variable `pf-global--FontSize--4xl`. Assume that there is a need for a larger font size for the title component that is used across the entire application.

1) <strong>Copy code into the `index.html` file.</strong>

Click the `Copy to Editor` button below to add a title component using the new modifier of `pf-m-5xl` in the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;h1 class=&quot;pf-c-title pf-m-5xl&quot;&gt;
  5xl title
&lt;/h1&gt;
</pre>

2) <strong>Set up the stylesheet for the title component.</strong>

Click the `Copy to Editor` button below to set up the stylesheet in the `myapp.scss` file.

<pre class="file" data-filename="myapp.scss" data-target="replace">
:root {
  //Add global variables here
}

.pf-c-title {
  //Add Title component variables here
}
</pre>

3) <strong>Define the global custom property name to be used.</strong>

Follow the existing convention for global font size custom properties. Add the new custom property for font size inside of the `:root{}` block. This applies it to the global scope of the application.

It should look like: `--pf-global--FontSize--5xl`

4) <strong>Create a declaration using the new custom property.</strong>

Assign the property name added in step 3 to the pixel value for the new font size.

Update the line added in step 3 to be 42px.

It should look like: `--pf-global--FontSize--5xl: 42px;`

5) <strong>Create a local custom property in the title block.</strong>

The local custom property should represent the 5xl variation's font size. 

Beginning with the component name, start writing the custom property and add it to the `.pf-c-title{}` block in the `myapp.scss` file:

It should look like: `--pf-c-title`

6) <strong>Add the new modifier to the custom property name.</strong>

It should look like: `--pf-c-title--m-5xl`

7) <strong>Add the property that the custom property represents.</strong>

It should look like: `--pf-c-title--m-5xl--FontSize`

8) <strong>Add a new declaration using the global variable added in step 3 and 4.</strong>

Add this declaration inside of `.pf-c-title{}`.

It should look like: `--pf-c-title--m-5xl--FontSize: var(--pf-global--FontSize--5xl);`

9) <strong>Create a CSS selector for the new 5xl variation.</strong>

Knowing that the modifier `.pf-m-5xl` will apply to the title component, use the & in SCSS to nest `.pf-m-5xl` inside of `.pf-c-title` to create `.pf-c-title.pf-m-5xl`.

Add this block inside of `.pf-c-title`, underneath the declaration from step 8.

```
&.pf-m-5xl {
  //Code goes here
}
```

10) <strong>Create a declaration within the modifier block.</strong>

The declaration will define the font size property with a value of the new title component custom property that was created for this variation. 

Add `font-size: var(--pf-c-title--m-5xl--FontSize);` inside of `.pf-m-5xl{}`.
