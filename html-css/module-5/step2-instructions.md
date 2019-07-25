## Override Patternfly variables to achieve a new theme



1) <strong>Add a new color variable to use in the card. </strong> Add a new variable that you can use to customize the card in your app.

On line 3 of `card.scss` make a new variable name called `--my-app-card-theme--Color` and assign it to be purple: `#6200EE`.

Hint: `--card-theme--Color: #6200EE;`

2) <strong>Override the global link color. </strong> The buttons in the card footer currently use the global link color. Override this color to be the new color that was set in step 3. 

On line 4 of `card.scss` set the global variable `--pf-global--link--Color` to use the value defined in the custom variable `--my-app-card-theme--Color`. 
Note that variables defined inside the css file of a component are scoped to that component. Therefore, the value assigned to a global variable inside `card.scss` will only apply to the Card component, and not other components.

Hint: `--pf-global--link--Color: var(--card-theme--Color);`

3) <strong>Change the font-size of the title in the card header.</strong> Not all changes require custom css. Many components include modifier classes that enable you to customize the appearrance of a component. For this update, we'll use a modifier class available for the Title component. 

Search in `index.html` for `<div class="pf-c-card__header pf-c-title pf-m-md">`. Replace `pf-m-md` with `pf-m-xl`.

Hint: `<div class="pf-c-card__header pf-c-title pf-m-xl">`

Remember to click the <strong>Reload</strong> button above the preview panel to see how these contents after you make changes.