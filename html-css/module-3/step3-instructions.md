Let’s continue to practice how to add modifier classes to components.

## Task: Apply visual and state modifiers to the Alert component.

In this workshop we will apply visual modifiers and state modifiers to the same component or element. Using the documentation at this link https://www.patternfly.org/v4/documentation/core/components/alert, <strong> follow the instructions </strong> to modify the three Alert components.

1) <strong>Copy code to the editor.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for three Alert components to the index.html file.

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

2) Using the documentation from the "Usage" table at the link above modify the first Alert to be a “success” variation.

<strong>Hint:</strong> `<div class="pf-c-alert pf-m-success">`

3) Modify the second Alert to have “inline” and “warning” variations.

<strong>Hint:</strong> `<div class="pf-c-alert pf-m-inline pf-m-warning">`

4) Modify the third Alert to have “danger” and "info" variations.

<strong>Hint:</strong> `<div class="pf-c-alert pf-m-info pf-m-danger">`

<strong>Pro Tip: </strong>You should notice that the color of the third Alert changes to blue. What about the `pf-m-danger` modifier, Why didn't it change to red for danger? The reason is because `pf-m-info` and `pf-m-danger` both modify the color of an Alert and `pf-m-info` comes before `pf-m-danger` in the code. You should only every apply one modifier class to an element class when those modifier classes change the same styles.
