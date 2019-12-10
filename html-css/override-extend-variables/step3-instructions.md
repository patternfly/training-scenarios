Now practice extending PatternFly's system to create a new element in the card. Add the separator element to the card.
 
1) <strong>Add the html markup.</strong> 

In the `index.html` file add the html markup for the separator element.

Prefix the variable name with `my-app` so that it can be easily distinguished from the PatternFly codebase.

The class name should look like the following:
 
```
<div class="my-app-c-card__separator">
</div>
```

Place it in `index.html` twice so that both separators are siblings to the `pf-c-card__body` element. Add this new code between `pf-c-card__header` and `pf-c-card__body` and `pf-c-card__body` and `pf-c-card__footer`.

<strong>Note: </strong>There will be no visible changes at this step.
 
2) <strong>Add variables to style the separator element.</strong>

In the `myapp.scss` file, add new styles for `my-app-c-card__separator`.

a) <strong>Add a variable for height.</strong>

It should use PatternFly's global variable for small border width. Add it under the variable declarations inside the `.pf-c-card` block.

The declaration should look like the following:
 
```
--my-app-c-card__separator--Height: var(--pf-global--BorderWidth--sm);
```
 
b) <strong>Add a variable for background color.</strong> 

It should use PatternFly's global variable for border color. Add it under the variable declarations inside the `.pf-c-card` block.

The declaration should look like the following:
 
```
--my-app-c-card__separator--BackgroundColor: var(--pf-global--BorderColor--100);
```
 
c) <strong>Add a variable for the margin.</strong> 

It should use PatternFly's global variable for spacing. Add it under the variable declarations inside the `.pf-c-card` block.

The declaration should look like the following:
 
```
--my-app-c-card__separator--Margin: var(--pf-global--spacer--lg);
```
 
3) <strong>Assign the variables for the separator element.</strong>

In order to assign the variables that were declared above, scope the variables to the class that was added in step 1. 

a) <strong>Add a new block underneath `.pf-c-card`.</strong>

In `myapp.scss` add the following block. It should look like this:

```
.my-app-c-card__separator {
  // Add in variables here
}
```

b) <strong>Assign all of the variables that were added in steps 2a, 2b, and 2c.</strong>

Inside of the block created in step 3a, add the properties for `background-color`, `height`, `margin-right`, `margin-bottom` and `margin-left`.
 
```
.my-app-c-card__separator {
  background-color: var(--my-app-c-card__separator--BackgroundColor);
  height: var(--my-app-c-card__separator--Height);
  margin-right: var(--my-app-c-card__separator--Margin);
  margin-bottom: var(--my-app-c-card__separator--Margin);
  margin-left: var(--my-app-c-card__separator--Margin);
}
```
