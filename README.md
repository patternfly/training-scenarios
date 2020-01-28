# PatternFly developer training

PatternFly now features developer training to teach PatternFly implementation best practices. To access the training, check out the (React)[https://www.patternfly.org/v4/documentation/react/overview/training] and (HTML/CSS)[https://www.patternfly.org/v4/documentation/core/overview/training] tutorials. 
And while you're at it, let us know what you think. Share your feedback by submitting a review on the final page of each module or by filing an issue in this repository.

## Submitting a proposal

We use (Katacoda)[https://www.katacoda.com/patternfly] as the platform for delivering the training modules—it's open source, and we want you to contribute! 

But before you add a new module to the current PatternFly developer training set, check out the existing modules in the category first. This way, we avoid duplicate work and keep the training content streamlined and organized for all users. You should also verify that the module expands on the documentation that is already on (PatternFly)[https://www.patternfly.org/v4/].

Once you've checked and confirmed the content you're looking to add doesn't already exist, create a new issue for your proposal in this repository. Our team will review all submissions before anything is added.

Include the following details in your submission:

1. Title
2. Goal (What will the user learn?)
3. Description
4. Category:
  - HTML/CSS: Introductary and high-level concepts
  - React: Basic: React principles and customization
  - React components: React components including select, table, and toolbar
  - React Charts: React chart components (area, bar, bullet, donut, donut utilization, line, pie, sparkline, and stack charts)
  - None of the above (Include a suggestion for a new category.)
5. Approximate completion time
    - Short ( < 5 mins)
    - Medium  ( < 15 mins)
    - Long (> 30 mins)

## Set up development environment and plan out your scenario

Once your proposal is approved, it's time to start developing. We recommend following these steps:

1. Write the title, description, and sub-steps for each step in a document.
2. Use CodePen or CodeSandbox to test the working code for your example. Note: It is not possible to run your code locally when developing in Katacoda.
3. Once you feel confident in your steps and code examples, fork our repository: https://github.com/patternfly/training-scenarios.
4. Add the new module to the repository.
5. Push up the addition and submit a Pull Request.
6. Tag at least two members of the PatternFly team to review your Pull Request.

To see your changes on Katacoda before they're merged:
1. Submit a second Pull Request that merges changes from the new branch on your fork, to the master branch on your fork, and merge the changes.
2. Create a (Katacoda profile)[https://katacoda.com/profile/settings ] if you don’t have one.
    - Update your Git Scenario Repository to be your forked training-scenarios repository (e.g., https://github.com/[username]/training-scenarios).
3. Copy the **Git Webhook Secret.**
4. In your forked training-scenarios repository, navigate to **Settings** > **Webhooks**, and add a new Github Webhook.
    - Update the Payload URL to **https://editor.katacoda.com/scenarios/updated**.
    - Add your copied secret.
    - Click **Update webhook**.
5. Find more information at (Katacoda)[https://katacoda.com/teach/git-hosted-scenarios].

## File structure

### Update the category pathway

Update the relevant `pathway.json` file to add the new module to its category. Examples of the different pathways include: `html-css-pathway.json`, `react-components-pathway.json`, and `react-pathway.json`. 

Add an ID, title, and description.

### Add an index.json file for the module

The `index.json` file is where the structure of the module is established. Below is a template `index.json` file that you should follow. (Katacoda provides more information)[https://www.katacoda.com/docs/scenarios/index-json].

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
    * Incorrect: Step 1.
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
    2. Use this link **https://redhatdg.co1.qualtrics.com/jfe/form/SV_bIRZRHYJyGsKBSt?Module=**
    3. At the end of `Module=` add the title of the scenario so that we can target feedback.

## Style and grammar

We suggest following (AP style)[https://en.wikipedia.org/wiki/AP_Stylebook] when writing content. PatternFly also has more information on (grammar and terminology)[https://www.patternfly.org/v4/design-guidelines/content/grammar-and-terminology] and (voice and tone)[https://www.patternfly.org/v4/design-guidelines/content/voice-and-tone].

## Appendix

https://www.katacoda.com/docs/scenarios/index-json
