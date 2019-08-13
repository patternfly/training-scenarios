Now we'll use CSS variables to further customize our components.

## Task

1) Navigate to the `src` folder and open `src/app.css`{{open}}

2) Next we'll set up some css to show how PatternFly uses css variables
Copy the following code into the app.css file, replacing all of the content there:

<pre class="file" data-filename="src/app.css" data-target="replace">
:root {
  --my-app-card-theme--Color: #DC143C;
}

.pf-c-page {
  --pf-c-page__main-section--PaddingTop: var(--pf-global--spacer--md);
  --pf-c-page__main-section--PaddingRight: var(--pf-global--spacer--md);
  --pf-c-page__main-section--PaddingBottom: var(--pf-global--spacer--md);
  --pf-global--link--Color: var(--my-app-card-theme--Color);
}

.pf-c-page__header {
  --pf-c-page__header-nav--BackgroundColor: #6495ED;
}

.pf-c-card {
  --pf-global--link--Color: var(--my-app-card-theme--Color);
}
</pre>