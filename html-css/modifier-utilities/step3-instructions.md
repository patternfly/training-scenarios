Practice adding modifier classes to components. Apply visual modifiers and state modifiers to the alert component.

1) <strong>Copy code to the `index.html` file.</strong>

Click the `Copy to Editor` button below to add HTML for three alert components.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;div class=&quot;pf-c-alert&quot;&gt;
  &lt;div class=&quot;pf-c-alert__icon&quot;&gt;
    &lt;i class=&quot;fas fa-info-circle&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;h4 class=&quot;pf-c-alert__title&quot;&gt;
    Alert one
  &lt;/h4>
&lt;/div>

&lt;div class=&quot;pf-c-alert&quot;>
  &lt;div class=&quot;pf-c-alert__icon&quot;&gt;
    &lt;i class=&quot;fas fa-info-circle&quot;>&lt;/i&gt;
  &lt;/div&gt;
  &lt;h4 class=&quot;pf-c-alert__title&quot;&gt;
    Alert two
  &lt;/h4&gt;
&lt;/div&gt;

&lt;div class=&quot;pf-c-alert&quot;&gt;
  &lt;div class=&quot;pf-c-alert__icon&quot;&gt;
    &lt;i class=&quot;fas fa-info-circle&quot;>&lt;/i&gt;
  &lt;/div>
  &lt;h4 class=&quot;pf-c-alert__title&quot;&gt;
    Alert three
  &lt;/h4>
&lt;/div&gt;
</pre>

2) <strong>Modify the first alert to be the `success` variation.</strong>

To find the modifier class, use the [documentation](https://www.patternfly.org/v4/documentation/core/components/alert). Scroll down to the "usage" table and find the class that styles the success variation.

When the class is found, add it next to the first `pf-c-alert` class.

It should look like this: `<div class="pf-c-alert pf-m-success">`

3) <strong>Modify the second alert to have `inline` and `warning` variations.</strong>

Use the [documentation](https://www.patternfly.org/v4/documentation/core/components/alert) to find the classes that will modify the alert to have these variations.

It should look like this: `<div class="pf-c-alert pf-m-inline pf-m-warning">`

4) <strong>Modify the third alert to have `danger` and `info` variations.</strong>

Use the [documentation](https://www.patternfly.org/v4/documentation/core/components/alert) to find the classes that will modify the alert to have these variations.

It should look like this: `<div class="pf-c-alert pf-m-info pf-m-danger">`

<strong>Note: </strong> Notice that the color of the third alert changes to blue. It didn't change to read because the `pf-m-danger` modifier wasn't applied. The reason is that `pf-m-info` and `pf-m-danger` both modify the color of an alert, and `pf-m-info` comes before `pf-m-danger` in the codebase.

<strong>Note: </strong>Only every apply one modifier class to an element class when two modifier classes change the same styles.
