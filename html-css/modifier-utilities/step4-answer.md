```
<!--index.html-->
<span class="pf-c-label">
  Default Label
</span>
<span class="pf-c-label pf-m-warning">
  Warning Label
</span>

<!--myapp.scss-->
.pf-c-label {
  &.pf-m-warning {
    --pf-c-label--BackgroundColor: var(--pf-c-label--m-warning--BackgroundColor);
  }
}
```
