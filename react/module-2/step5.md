Now we'll use CSS variables to further customize our components.

## Task

1) Navigate to the `src` folder and open `src/app.css`{{open}}

2) Next we'll set up some css to show how PatternFly uses css variables
Copy the following code into the app.css file, replacing all of the content there:

<pre class="file" data-filename="src/app.css" data-target="replace">
:root {
  --my-app-card-theme--Color: #DC143C;
}

.pf-c-page.myPageClass {
  --pf-global--link--Color: var(--my-app-card-theme--Color);
  --pf-c-page--BackgroundColor: purple;
}
</pre>