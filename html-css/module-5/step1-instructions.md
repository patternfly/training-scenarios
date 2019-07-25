## Add some code to the workspace

Before we can get started, we need to add some code to the workspace that we can modify. 

<strong>Note:</strong> Whenever you make changes to files, click <strong>Reload</strong> button above the preview panel to see the updates you made.

1) <strong>Copy code into the index.html file</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Card to the index.html file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-card pf-m-hoverable&quot;&gt;
  &lt;div class=&quot;pf-c-card__head&quot;&gt;
    &lt;img class=&quot;pf-c-brand&quot; src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot;&gt;
    &lt;div class=&quot;pf-c-card__actions&quot;&gt;
      &lt;button class=&quot;pf-c-button pf-m-plain&quot;&gt;
        &lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;pf-c-card__header pf-c-title pf-m-md&quot;&gt;
    &lt;p&gt;Patternfly&lt;/p&gt;
    &lt;div class=&quot;pf-c-content&quot;&gt;
      &lt;small&gt;Provided by Red Hat&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__body&quot;&gt;
PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/div&gt;
  &lt;div class=&quot;pf-c-card__footer pf-l-flex&quot;&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to Patternfly
   &lt;/button&gt;
   &lt;button class=&quot;pf-c-button pf-m-inline pf-m-link&quot;&gt;
    Link to home
   &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

2) <strong>Copy code into the card.scss file</strong>

Click the <strong>Copy to Editor</strong> button below to add css for the Card component to the card.scss file.

<pre class="file" data-filename="card.scss" data-target="replace">
.pf-c-card {
  // Component variables
  --pf-c-card--BackgroundColor: var(--pf-global--BackgroundColor--100);
  --pf-c-card--BoxShadow: var(--pf-global--BoxShadow--sm);
  --pf-c-card--m-hoverable--hover--BoxShadow: var(--pf-global--BoxShadow--lg);
  --pf-c-card--m-compact__body--FontSize: var(--pf-global--FontSize--sm);
  --pf-c-card--m-compact__footer--FontSize: var(--pf-global--FontSize--sm);
  --pf-c-card--m-compact--first-child--PaddingTop: var(--pf-global--spacer--md);
  --pf-c-card--m-compact--child--PaddingRight: var(--pf-global--spacer--md);
  --pf-c-card--m-compact--child--PaddingBottom: var(--pf-global--spacer--md);
  --pf-c-card--m-compact--child--PaddingLeft: var(--pf-global--spacer--md);
  --pf-c-card--m-compact__header--not-last-child--PaddingBottom: var(--pf-global--spacer--sm);
  --pf-c-card--first-child--PaddingTop: var(--pf-global--spacer--lg);
  --pf-c-card--child--PaddingRight: var(--pf-global--spacer--lg);
  --pf-c-card--child--PaddingBottom: var(--pf-global--spacer--lg);
  --pf-c-card--child--PaddingLeft: var(--pf-global--spacer--lg);
  --pf-c-card__header--not-last-child--PaddingBottom: var(--pf-global--spacer--md);
  --pf-c-card__body--FontSize: var(--pf-global--FontSize--md);
  --pf-c-card__footer--FontSize: var(--pf-global--FontSize--md);
  --pf-c-card__actions--PaddingLeft: var(--pf-global--spacer--md);
  --pf-c-card__actions--child--MarginLeft: var(--pf-global--spacer--sm);

  display: flex;
  flex-direction: column;
  background-color: var(--pf-c-card--BackgroundColor);
  box-shadow: var(--pf-c-card--BoxShadow);

  &amp;.pf-m-hoverable {
    &amp;:hover {
      box-shadow: var(--pf-c-card--m-hoverable--hover--BoxShadow);
    }
  }

  &amp;.pf-m-compact {
    --pf-c-card__body--FontSize: var(--pf-c-card--m-compact__body--FontSize);
    --pf-c-card__footer--FontSize: var(--pf-c-card--m-compact__footer--FontSize);
    --pf-c-card--first-child--PaddingTop: var(--pf-c-card--m-compact--first-child--PaddingTop);
    --pf-c-card--child--PaddingRight: var(--pf-c-card--m-compact--child--PaddingRight);
    --pf-c-card--child--PaddingBottom: var(--pf-c-card--m-compact--child--PaddingBottom);
    --pf-c-card--child--PaddingLeft: var(--pf-c-card--m-compact--child--PaddingLeft);
    --pf-c-card__header--not-last-child--PaddingBottom: var(--pf-c-card--m-compact__header--not-last-child--PaddingBottom);
  }
}

.pf-c-card__head {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.pf-c-card__actions {
  display: flex;
  align-items: center;
  align-self: flex-start;
  order: 1;
  padding-left: var(--pf-c-card__actions--PaddingLeft);
  margin-left: auto;

  &gt; * + * {
    margin-left: var(--pf-c-card__actions--child--MarginLeft);
  }

  + .pf-c-card__header,
  + .pf-c-card__body,
  + .pf-c-card__footer {
    padding: 0;
  }
}

.pf-c-card__head,
.pf-c-card__header,
.pf-c-card__body,
.pf-c-card__footer {
  padding-right: var(--pf-c-card--child--PaddingRight);
  padding-bottom: var(--pf-c-card--child--PaddingBottom);
  padding-left: var(--pf-c-card--child--PaddingLeft);

  &amp;:first-child {
    padding-top: var(--pf-c-card--first-child--PaddingTop);
  }
}

.pf-c-card__head,
.pf-c-card__header {
  &amp;:not(:last-child) {
    padding-bottom: var(--pf-c-card__header--not-last-child--PaddingBottom);
  }
}

.pf-c-card__body:not(.pf-m-no-fill) {
  flex: 1 1 auto;
}

.pf-c-card__body {
  font-size: var(--pf-c-card__body--FontSize);
}

.pf-c-card__footer {
  font-size: var(--pf-c-card__footer--FontSize);
}
</pre>

Now you can click the <strong>Reload</strong> button above the preview panel to see how these contents look before making any further changes.