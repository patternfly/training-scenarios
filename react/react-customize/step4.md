Use CSS variables to further customize components.

1) <strong>Navigate to the `src` folder and open `src/app.css`{{open}}</strong>

2) <strong>Set up the CSS file.</strong>

Copy the following code into the `app.css` file, replacing all of the content there:

<pre class="file" data-filename="src/app.css" data-target="replace">
:root {
}

.pf-c-page.myPageClass {
}
</pre>

3) <strong>Add a new global color.</strong>

Inside of `:root` define a new variable that is assigned to a hex value. The `:root` contains styles that are applied to the global application.

In this example, use the variable name `--my-app-card-theme--Color`. For more information on PatternFly variable naming look at the "variable naming principles" tutorial.

Assign the variable to the color: #DC143C.

<strong>Hint:</strong>
```
:root {
  --my-app-card-theme--Color: #DC143C;
}
```

4) <strong>Override the global link color in the page.</strong>

To override styles for the page and the specific class, target the styles in the `.pf-c-page.myPageClass` class inside of the `app.css` file.

In this example, override the color for `--pf-global--link--Color` by assigning the variable to `--my-app-card-theme--Color` (the variable that was added to the root in step 3).

<strong>Hint: </strong>
```
.pf-c-page.myPageClass {
  --pf-global--link--Color: var(--my-app-card-theme--Color);
}
```

5) <strong>Override the page background color.</strong>

This override will still happen in the `.pf-c-page.myPageClass` block.

The variable for the background color of the page is `--pf-c-page--BackgroundColor`. Assign it to `purple`.

<strong>Hint:</strong> `--pf-c-page--BackgroundColor: purple;`

Once the preview reloads, the page should look like this:
<img src="react-customize/assets/step4.png" alt="Completed custom page demo" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
