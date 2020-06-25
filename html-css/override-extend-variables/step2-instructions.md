There is now a card on the page. Customize the styles applied to it.
 
1) <strong>Add a new color variable to use in the card.</strong> 

Make the links in the card purple. In PatternFly, all of the CSS values used are first assigned to variables. It is recommended doing the same when making customizations in the application.
 
In `myapp.scss` inside of the `:root{}` block, make a new variable name called `--my-app-card-theme--Color`, and assign it to be purple: `#6200EE`.

<strong>Hint:</strong> 
```
--my-app-card-theme--Color: #6200EE;
```
 
2) <strong>Override the global link color.</strong> 

In the current example of the card, the buttons in the card footer use the global link color. Reassign the global link color variable to use the new custom color variable. This way, all properties that use the global link color variable in the card will now use this color.
 
Inside of the `.pf-c-card` block of `myapp.scss`, set the global variable `--pf-global--link--Color` to use the value defined in the custom variable `--my-app-card-theme--Color`. 

<strong>Hint:</strong>
```
--pf-global--link--Color: var(--my-app-card-theme--Color);
```

<strong>Note:</strong> Variable definitions declared for a component `.pf-c-[component name]` class selector are scoped to that component. So even though a new value is being assigned to the global variable, that value will only apply to the card component and not other components.

3) <strong>Change the outline style of the card.</strong> 

Not all changes require custom CSS. Many components include modifier classes that customize the component. For this update, use a modifier class for the card component.
 
4) <strong>Search for the card wrapper component and update the modifier class.</strong>

In `index.html` search for `<div class="pf-c-card">` and replace `pf-m-hoverable` with `pf-m-flat`.
 
<strong>Hint:</strong> `<div class="pf-c-card pf-m-flat">`
 