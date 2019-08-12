## Override PatternFly variables to achieve a new theme

Now that we have a card on our page, let's customize the styles applied to it.

1) <strong>Add a new color variable to use in the card.</strong> Let's make the links in the card purple! In PatternFly, all of the css values we use are first assigned to variables. We recommend doing the same when making customizations in your application.

In `myapp.scss` inside of the `:root` block make a new variable name called `--my-app-card-theme--Color` and assign it to be purple: `#6200EE`.

<strong>Hint:</strong> 
```
:root {
  --my-app-card-theme--Color: #6200EE;
}
```

2) <strong>Override the global link color. </strong> In our current example of the card, the buttons in the card footer use the global link color. We can reassign the global link color variable to use our new custom color variable, so that all properties that use the global link color variable in the card will now use this color.

Inside of the `.pf-c-card` block of `myapp.scss` set the global variable `--pf-global--link--Color` to use the value defined in the custom variable `--my-app-card-theme--Color`. 

<strong>Hint:</strong>
```
.pf-c-card {
    --pf-global--link--Color: var(--my-app-card-theme--Color);
}
```

<strong>Note:</strong> Variable definitions declared for a component `.pf-c-[component name]` class selector are scoped to that component. So even though we are assigning a new value to the global variable, that value will only apply to the Card component, and not other components.

3) <strong>Change the font-size of the title in the card header.</strong> Not all changes require custom css. Many components include modifier classes that enable you to customize the appearance of a component. For this update, we'll use a modifier class available for the Title component. 

Search in `index.html` for `<div class="pf-c-card__header pf-c-title pf-m-md">` and replace `pf-m-md` with `pf-m-xl`.

<strong>Hint:</strong> `<div class="pf-c-card__header pf-c-title pf-m-xl">`

When the server reloads, you should see something like this:
<img src="module-5/assets/devconf-artboard-2.png" alt="card with new link color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />