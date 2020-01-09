PatternFly is based on the BEM naming system, whereby modifiers are tied to a component's "block" and “element” classes. Read more about BEM [here](http://getbem.com/introduction/). This example will demonstrate applying a modifier class to the "block" class.

Components have multiple variations due in part to the use of modifier classes, which override or add new styling to the same component. 

Modifiers use the `pf-m-` prefix, followed by a suitable name for the modifier. PatternFly aims to use consistent names for modifiers across components, however the styles for each modifier are specific to that component element.

In this step, change the badge's state from unread to read.

Katacoda is setting up a new application. Begin coding once the server starts and "Welcome to PatternFly" appears on the lower pane.

1) <strong>Copy code to `index.html`.</strong>

Click the `Copy to Editor` button below to add HTML for two unread badge components.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-badge pf-m-unread&quot;&gt;
  200
&lt;/span&gt;
&lt;span class=&quot;pf-c-badge pf-m-unread&quot;&gt;
  300
&lt;/span&gt;
</pre>

<strong>Note: </strong> Both badges will have a background color of blue. The modifier class `pf-m-unread` modifies the `background-color` property to be blue.

2) <strong>Update the second badge to be in the read state.</strong>

The badge also has a read state denoted by the modifier class `pf-m-read`. Replace the modifier class on the second badge with the new modifier class for read.

<strong>Note: </strong>The background color of the second badge should change to grey because of the CSS styles attached to the modifier class `pf-m-read`.
