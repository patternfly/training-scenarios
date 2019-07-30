# Modify Simple Component

Components have multiple variations due in part to the use of modifier classes, which override or add new styling to the same component. Modifiers use the “pf-m-” prefix, followed by a suitable name for the modifier. Patternfly aims to use consistent names for modifiers across components, however the styles for each modifier are specific to that component element.

## Task: Modify modifier classes to the badge component
1) Let’s start <strong>modifying the modifier class</strong> for a simple component, the badge.
Note: the badge is a component that requires a modifier.

2) <strong>Copy code to the editor.</strong> 
Click the <strong>Copy to Editor</strong> button below to add html for a Badge to the index.html file.

    <pre class="file" data-filename="index.html" data-target="replace">
    &lt;!--Badge.html--&gt;
    &lt;span class=&quot;pf-c-badge pf-m-unread&quot;&gt;
      200
    &lt;/span&gt;
    &lt;span class=&quot;pf-c-badge pf-m-unread&quot;&gt;
      300
    &lt;/span&gt;
    </pre>

3) You should see <strong>two badges</strong> appear with the background-color of blue. The modifier class: `pf-m-unread` modifies its styles to be “unread”.

4) The badge also has a “read” state. <strong>Your task is to update the second badge so that it has the modifier for “read”.</strong> What did the background color change to?

Click the <strong>Reload</strong> button above the preview panel to see how these contents look.