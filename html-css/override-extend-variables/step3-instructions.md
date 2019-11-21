## Extend a PatternFly component to achieve a new design

Now that we have practiced overriding variables, let's practice extending PatternFly's system to create a new element in the card. Let's add a separator element to the card.

1) <strong>Add the html markup.</strong> 

In `index.html` add the html markup for the separator element that is a sibling to the `pf-c-card__body` element. Add this new code between `pf-c-card__header` and `pf-c-card__body` and `pf-c-card__body` and `pf-c-card__footer`. We will prefix the variable name with `my-app` so that it can be easily distinguished from the PatternFly codebase.

```
<div class="my-app-c-card__separator">
</div>
```

2) <strong>Add a variable for the height.</strong> 

In the `myapp.scss` file, we will add new styles for `my-app-c-card__separator`. The first variable to add is for height and it should use PatternFly's global variable for small border width, and go under the variable declarations inside the `.pf-c-card` block.

```
  --my-app-c-card__separator--Height: var(--pf-global--BorderWidth--sm);
```

3) <strong>Add a variable for background color.</strong> The second variable to add is for background color and it should use PatternFly's global variable for border color.

```
  --my-app-c-card__separator--BackgroundColor: var(--pf-global--BorderColor--100);
```

4) <strong>Add a variable for the margin.</strong> The third variable to add is for the margin and it should use PatternFly's global variable for spacing.

```
  --my-app-c-card__separator--Margin: var(--pf-global--spacer--lg);
```

5) <strong>Assign the variables for the Separator element.</strong>

In `myapp.scss` assign the variables that were declared to the height, background-color and margin style properties. Add this as a new block under `.pf-c-card`:

```
.my-app-c-card__separator {
  background-color: var(--my-app-c-card__separator--BackgroundColor);
  height: var(--my-app-c-card__separator--Height);
  margin-right: var(--my-app-c-card__separator--Margin);
  margin-bottom: var(--my-app-c-card__separator--Margin);
  margin-left: var(--my-app-c-card__separator--Margin);
}
```

When the server reloads, you should see something like this:
<img src="override-extend-variables/assets/devconf-artboard-3.png" alt="card with separator" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />