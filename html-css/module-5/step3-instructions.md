## Extend a Patternfly component to achieve a new design

Now that we have practiced overriding variables, let's practice extending Patternfly's system to create a new element in the card.

1) <strong>Add the html markup.</strong> 

In `index.html` add the html markup for the separator element that is a sibling to the `pf-c-card__body` element. Add this block between `pf-c-card__header` and `pf-c-card__body` and `pf-c-card__body` and `pf-c-card__footer`. We will prefix the variable name with `myapp` so that it can be easily distinguished from the Patternfly codebase.

```
<div class="myapp-c-card__body-separator">
</div>
```

2) <strong>Add a variable for the height.</strong> 

In the `myapp.scss` file, we will add new styles for `myapp-c-card__body-separator`. The first variable to add is for height and it should use Patternfly's global variable for small border width, and go under the variable declarations at the top of the file.

```
--myapp-c-card__body-separator--Height: var(--pf-global--BorderWidth--sm);
```

3) <strong>Add a variable for background color.</strong> The second variable to add is for background color and it should use Patternfly's global variable for border color.

```
--myapp-c-card__body-separator--BackgroundColor: var(--pf-global--BorderColor--100);
```

4) <strong>Add a variable for the padding.</strong> The third variable to add is for the padding and it should use Patternfly's global variable for spacing.

```
--myapp-c-card__body-separator--Padding: var(--pf-global--spacer--md);
```

5) <strong>Assign the variables for the separator.</strong>

In `myapp.scss` assign the variables that were declared to the height and background-color style properties:

```
.myapp-c-card__body-separator {
  background-color: var(--myapp-c-card__body-separator--BackgroundColor);
  height: var(--myapp-c-card__body-separator--Height);
  padding: var(--myapp-c-card__body-separator--Padding);
}
```

Remember to click the <strong>Reload</strong> button above the preview panel to see how the styles change after you make updates.