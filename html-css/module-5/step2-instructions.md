## Extend Patternfly variables to achieve a new design

The goal is to create a separator element that sits inside of the card body:

1. In `card.html` add this block of code under the closing tag for `pf-c-card__header`:

```
<div class="pf-c-card__body">
  <div class="pf-c-card__body-separator">
  </div>
</div>
```

2. Repeat step a, by copying the same block of code before the `pf-c-card__footer`.

3. In the `card.scss` file, we will add new styles for `pf-c-card__body-separator`. The first variable to add is for height and it should use Patternfly's global variable for small border width, and go under the variable declarations at the top of the file.

```
--pf-c-card__body-separator--Height: var(--pf-global--BorderWidth--sm);
```

4. The second variable to add is for background color and it should use Patternfly's global variable for border color.

```
--pf-c-card__body-separator--BackgroundColor: var(--pf-global--BorderColor--100);
```

5. At the bottom of `card.scss` assign the variables that were declared to the height and background-color style properties:

```
.pf-c-card__body {
  .pf-c-card__body-separator {
    background-color: var(--pf-c-card__body-separator--BackgroundColor);
    height: var(--pf-c-card__body-separator--Height);
  }
}
```
