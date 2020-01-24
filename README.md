# PatternFly developer training

The team at PatternFly has created developer training to teach PatternFly implementation best practices. We chose (Katacoda)[https://www.katacoda.com/patternfly] as the platform for delivering the training modules. Check out the (React)[https://www.patternfly.org/v4/documentation/react/overview/training] and (HTML/CSS)[https://www.patternfly.org/v4/documentation/core/overview/training] tutorials on PatternFly, and share your feedback by submitting a review on the final page of each module. You can also file an issue in this repository.

## Submitting a proposal

If you would like to add a new module to the current PatternFly developer training set, thoroughly familiarize yourself with the existing modules in the category you would like to add a module to, so there is no duplicate work created. Once that is accomplished, create a new issue for your proposal in this repository. Our team will review all submissions to make sure that modules align with the goals of training and to avoid overlap of content.

Be sure to cover these points in your submission:

1. Title of module
2. Goal of the module (what will the user learn)
3. Verify module builds on the documentation that is already on (PatternFly)[https://www.patternfly.org/v4/].
4. Description of the module
5. Assign module to relevant category:
  1. HTML/CSS: Introductary and high-level concepts
  2. React: Basic: React principles and customization
  3. React components: React components including select, table, and toolbar.
  4. React Charts: Reat chart components including, Area, bar, bullet, donut, donut utilization, line, pie, sparkline and stack charts.
  5. None of the above. Suggestion for a new category.
6. Approximate length of the module
    1. Short ( < 5 mins)
    2. Medium  ( < 15 mins)
    3. Long (> 30 mins)

## Setup development environment and plan out your scenario

Once your proposal has been approved by our team you can start developing. We suggest following this order:

1. Write the title, description and sub-steps for each step in a document. This will help to organize your thoughts.
2. It is not possible to run your code locally when developing in Katacoda so we suggest using CodePen or CodeSandbox to test the working code for your example.
3. Once you feel confident in your steps and code examples, fork our repository: https://github.com/patternfly/training-scenarios.
4. Add the new module to the repository.
5. Push up the addition and submit a Pull Request.
6. Tag at least two members of the PatternFly team to review your Pull Request.
To see your changes live on Katacoda before being merged:
7. Submit a second Pull Request that merges changes from the new branch on your fork, to the master branch on your fork, and merge the changes.
8. Create a (Katacoda profile)[https://katacoda.com/profile/settings ] if you don’t have one.
    1. Update your Git Scenario Repository to be your forked training-scenarios repository. E.g. https://github.com/[username]/training-scenarios
9. Copy the “Git Webhook Secret”
10. In your forked training-scenarios repository add a new Github Webhook. It is under Settings > Webhooks.
    1. Update the Payload URL to be https://editor.katacoda.com/scenarios/updated
    2. Add your copied secret
    3. Click: “Update webhook”
11. Find more information (here)[https://katacoda.com/teach/git-hosted-scenarios].

## File structure

### Update the category pathway

Update the relevant `pathway.json` file so that the new module will be added to its category. Examples include: `html-css-pathway.json`, `react-components-pathway.json`, and `react-pathway.json`. You will need to add an ID, title, and description.

### Add an index.json file for the module

The `index.json` file is where the information about the module is defined and the structure is established. Below is a template `index.json` file that you should follow. (Katacoda provides more information)[https://www.katacoda.com/docs/scenarios/index-json].

```
{
  "title": Title of the module
  "description": Description of the module.
  "difficulty": Choose between beginner, intermediate, advanced. There is more information below on how to decide.
  "time": Provide users with an estimated or average time to complete the module, e.g. 20 minutes.
  "details": {
    "intro": {
      "text": "intro.md",
      "code": "env-init.sh",
      "credits": ""
    },
    "steps": [
      {
        "title": Title for the step.
        "text": Filename containing the body for the step.
        "answer": Filename containing the answer for the step.
      },
      {
        "title": Title for the step.
        "text": Filename containing the body for the step.
        "answer": Filename containing the answer for the step.
      }
    ],
    "finish": {
      "text": "finish.md"
    }
  },
  "files": ["index.html", "myapp.scss"],
  "environment": {
    "showdashboard": true,
    "delayToSaveFileAfterStopTypingMilliseconds": 2000,
    "autoFormatEnable": false,
    "dashboards": [
      {"name": "Web Application", "port": 3000}
    ],
    "uilayout": "editor-iframe-split",
    "uisettings": html or javascript
  },
  "backend": {
    "imageid": "node",
    "port": 3000
  }
}
```

## Content and steps

When writing out the steps for your tutorial please follow these guidelines:

### Name of module

* Purpose: To label modules. Name of modules should be succinct and use sentence case.
    * Incorrect: Design, develop, and implement toolbar component with a filter.
    * Correct: Toolbar component with filter.

### Description

* Purpose: To accurately describe the purpose of the module. The description should be 1--2 sentences. Avoid "you" or "we".
    * Incorrect: You will build a React table with pagination.
    * Correct: Build a React table with pagination.

### Difficulty level

* Purpose: To communicate the difficulty level of the module to the user.
    * Beginner: For those new to PatternFly or new to a concept in PatternFly.
    * Intermediate: For those familiar with PatternFly. Assumes that a user has some prior experience with PatternFly.
    * Advanced: For regular PatternFly users. Modules involve higher level PatternFly React and PatternFly CSS concepts.

### Estimated time

* Purpose: To estimate the time that it will take the user to complete the module.

### Introduction page

* Purpose: To introduce the user to the module content. The introduction is always a critical part of any course. It is important to be brief, but clear about what information will be covered. The approximate length should be 3-5 sentences.
    * Incorrect: PatternFly React charts are fun to use. (Not enough information about the module's content).
    * Correct: PatternFly consists of isolated and modular structures that fall into three categories: Components: Components are modular and independent structures concerned with presentation. Layouts: Layouts allow for organizing and grouping their immediate children on the page. Demos: Demos illustrate how to assemble complex structures with components and layouts only. Utilities: Utilities are a set of classes that enable you to further customize and modify elements in your project without having to write any custom CSS.

### Step title

* Purpose: To inform the user what step they are on within the module. Use sentence case, be clear and concise, be actionable, and use present tense.
    * Incorrect: 1
    * Correct: Add pagination component.

### Background step information

* Purpose: To provide supplemental information to the step. Keep background information to 2-4 sentences. If required, background information should be in sentence form and not be in bullet form. When introducing any new concepts, add a link to the relevant information.
    * Incorrect:
        * CSS is fun to use
        * CSS can be used to set color
        * CSS can be used for responsive web design components.
    * Correct: In PatternFly, components which cannot be broken down into smaller parts are known as the basic building blocks of user interfaces. Examples include the button, label and badge components.

### Sub-steps

* Purpose: To instruct the user on what actions to take in that step. Should be actionable and direct.
    * Incorrect: A grid layout can be used to position form components, add one to the form.
    * Correct: Apply a grid layout to position the form components.

### Sub-step description

* Purpose: To provide more detail and instructions for the sub-step. Should not use bullet form.

### Sub-sub-steps

* Purpose: To group multiple actions within the same sub-step when those actions should be formed together to produce a result. Use a) b) c).

### Referencing file names or code

* Purpose: Any reference to a file name or example of code such as `app.js` or `index.html` should be wrapped in `backticks`.
    * Incorrect: The landing page will be defined within the index.html file.
    * Correct: The landing page will be defined within the `index.html` file.

### Notes

* Purpose: To provide supplemental information on a concept or process. Do not include information in notes when that information is necessary to the step. Notes and titles should be bolded.
    * Incorrect: The third step is adding row labels.
    * Correct: The table component is used to help display tabular data or content.

### Hints

* Purpose: To provide the user with a clue about what they should do for that instruction. 

### Feedback link

* Purpose: To gather feedback from users after completing a module.
    1. In the `finish.md` file, add a link to our module survey so that feedback can be recorded.
    2. Use this link: https://redhatdg.co1.qualtrics.com/jfe/form/SV_bIRZRHYJyGsKBSt?Module=
    3. At the end of `Module=` add the title of the scenario so that we can target feedback.

## Style and grammar

We suggest following (AP style)[https://en.wikipedia.org/wiki/AP_Stylebook] when writing content. PatternFly also has more information on (grammar and terminology)[https://www.patternfly.org/v4/design-guidelines/content/grammar-and-terminology] and (voice and tone)[https://www.patternfly.org/v4/design-guidelines/content/voice-and-tone].

## Appendix

https://www.katacoda.com/docs/scenarios/index-json










