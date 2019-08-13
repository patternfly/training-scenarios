Now we'll use CSS variables to further customize our components.

## Task

1) Navigate to the `src` folder and open `src/app.css`{{open}}

2) Next we'll set up some css to show how PatternFly uses css variables
Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="src/app.css" data-target="replace">
:root {
  // --pf-global--spacer--sm: 8px;  //8px usually
  // --pf-global--LineHeight--md: 100px;
  --my-app-card-theme--Color: pink;
}

.pf-c-page {
  --pf-c-page__main-section--PaddingTop: var(--pf-global--spacer--md);
  --pf-c-page__main-section--PaddingRight: var(--pf-global--spacer--md);
  --pf-c-page__main-section--PaddingBottom: var(--pf-global--spacer--md);
  --pf-global--link--Color: var(--my-app-card-theme--Color);
}
</pre>