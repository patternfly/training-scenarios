# Interactive Katacoda Scenarios

[![](http://shields.katacoda.com/katacoda/cmolloy/count.svg)](https://www.katacoda.com/cmolloy "Get your profile on Katacoda.com")

Visit https://www.katacoda.com/cmolloy to view the profile and interactive scenarios

### Writing Scenarios
Visit https://www.katacoda.com/docs to learn more about creating Katacoda scenarios

For examples, visit https://github.com/katacoda/scenario-example


Creating new tarbell:
tar --exclude=.git/ --exclude=.idea/ --exclude=.DS_Store -zcvf pf-express.tar.gz .


# Guidelines to follow when adding scenarios

**Consistent structure for step instructions**
This is a way that I think we can structure the contents of a step for consistency. Having a consistent structure will help users skim the contents to find the chunks of info they're looking for without having to read more than they want to. 

As written in the .md file:
```
## Step title, written as imperative that describes at a high level the theme for this step (e.g. overriding variables)

Statement that sets context for this step, possibly referencing the previous step, but also describes more explicitly the tasks the user will complete in the context of the scenario (e.g. define a variable to use in a card).

1) <strong>Imperative statement about this sub-task.</strong> Additional statements if needed to explain why this sub-task is important.

Imperative statement that explicitly describes how to complete this task.

Then, another imperative statement, as needed to complete this task.

<strong>Hint:</strong> A hint that shows exactly what change the user should see in their workspace.

<strong>Note:</strong> Include a note for a sub-task if it's possible that a user could be confused about something. This is a place to include additional explanation about a concept that would be too much to include with the sub-task description.

<pre>Code to manually copy or with the "click to copy" button, if needed</pre>
```

And roughly how this would look on the site:

## Step title, written as imperative that describes at a high level the theme for this step (e.g. overriding variables)

Statement that sets context for this step, possibly referencing the previous step, but also describes more explicitly the tasks the user will complete in the context of the scenario (e.g. define a variable to use in a card).

1) <strong>Imperative statement about this sub-task.</strong> Additional statements if needed to explain why this sub-task is important.

Imperative statement that explicitly describes how to complete this task.

Then, another imperative statement, as needed to complete this task.

<strong>Hint:</strong> A hint that shows exactly what change the user should see in their workspace.

<strong>Note:</strong> Include a note for a sub-task if it's possible that a user could be confused about something. This is a place to include additional explanation about a concept that would be too much to include with the sub-task description.

<pre>Code to manually copy or with the "click to copy" button, if needed</pre>
