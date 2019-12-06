PatternFly is based on the BEM naming system, whereby modifiers are tied to a component's "block" and “element” classes. You can read more about BEM (here)[http://getbem.com/introduction/]. This example will demonstrate applying a modifier class to the "block" class.

Components have multiple variations due in part to the use of modifier classes, which override or add new styling to the same component. 

Modifiers use the “pf-m-” prefix, followed by a suitable name for the modifier. PatternFly aims to use consistent names for modifiers across components, however the styles for each modifier are specific to that component element.

## Task: Change the Badge component's state from unread to read

In this step we are going to add two Badge components that use the unread modifier and we are going to change the Badge to the read variation by replacing the modifier.

1) <strong>Copy code to the editor.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Badge to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;span class=&quot;pf-c-badge pf-m-unread&quot;&gt;
  200
&lt;/span&gt;
&lt;span class=&quot;pf-c-badge pf-m-unread&quot;&gt;
  300
&lt;/span&gt;
</pre>

2) You should see <strong>two Badges</strong> appear with the background-color of blue. The modifier class: `pf-m-unread` modifies its styles to be “unread”.

3) The Badge also has a “read” state denoted by the modifier class `pf-m-read`. <strong>Update the second Badge so that it has the modifier for “read”.</strong>

<strong>Hint: </strong>The background color of the second Badge should have changed to grey because of the css styles attached to the modifier class `pf-m-read`.
