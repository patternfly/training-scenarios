## Extend a Patternfly component to achieve a new design

Now that we have practiced overriding variables, let's practice extending Patternfly's system to create a new element in the card. Let's add a separator element to the card.

1) <strong>Add the html markup.</strong> 

In `index.html` add the html markup for the separator element that is a sibling to the `pf-c-card__body` element. Add this new code between `pf-c-card__header` and `pf-c-card__body` and `pf-c-card__body` and `pf-c-card__footer`. We will prefix the variable name with `my-app` so that it can be easily distinguished from the Patternfly codebase.

```
<div class="my-app-c-card__body-separator">
</div>
```

2) <strong>Add a variable for the height.</strong> 

In the `myapp.scss` file, we will add new styles for `my-app-c-card__body-separator`. The first variable to add is for height and it should use Patternfly's global variable for small border width, and go under the variable declarations inside the `.pf-c-card` block.

```
.pf-c-card {
  --my-app-c-card__body-separator--Height: var(--pf-global--BorderWidth--sm);
}
```

3) <strong>Add a variable for background color.</strong> The second variable to add is for background color and it should use Patternfly's global variable for border color.

```
.pf-c-card {
  --my-app-c-card__body-separator--BackgroundColor: var(--pf-global--BorderColor--100);
}
```

4) <strong>Add a variable for the margin.</strong> The third variable to add is for the margin and it should use Patternfly's global variable for spacing.

```
.pf-c-card {
  --my-app-c-card__body-separator--Margin: var(--pf-global--spacer--md);
}
```

5) <strong>Assign the variables for the separator.</strong>

In `myapp.scss` assign the variables that were declared to the height, background-color and margin style properties. Add this as a new block under `.pf-c-card`:

```
.my-app-c-card__body-separator {
  background-color: var(--my-app-c-card__body-separator--BackgroundColor);
  height: var(--my-app-c-card__body-separator--Height);
  margin: var(--my-app-c-card__body-separator--Margin);
}
```
