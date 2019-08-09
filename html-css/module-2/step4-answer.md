```<h1 class="pf-c-title pf-m-5xl">
  5xl title
</h1>

:root {
  --pf-global--FontSize--5xl: 42px;
}

.pf-c-title {
  --pf-c-title--m-5xl--FontSize: var(--pf-global--FontSize--5xl);
  
  &.pf-m-5xl {
    font-size: var(--pf-c-title--m-5xl--FontSize);
  }
}```
