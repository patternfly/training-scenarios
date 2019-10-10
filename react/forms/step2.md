In this exercise, we'll be using a form demo to create a new form for a web application.

The image below is what we'll end up with when we are done:

<img src="forms/assets/step3.png" alt="Completed form with title field and email validation" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

## Task
Katacoda is setting up a new React application for you. You'll be ready to code once the server starts and you can see "Welcome to PatternFly" on the lower pane.

1) Navigate to the `src` folder and open `App.js`

2) Next, we'll set up the general structure of the form and the necessary import statements.

Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from 'react';
import "@patternfly/react-core/dist/styles/base.css"
import {
  Form,
  FormGroup,
  TextInput,
  FormSelectOption,
  FormSelect,
  Checkbox,
  ActionGroup,
  Button
} from '@patternfly/react-core';
import AppPage from './components/page';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value2: '',
      value3: '',
      value4: ''
    };
    this.handleTextInputChange1 = value2 => {
      this.setState({ value2 });
    };
    this.handleTextInputChange2 = value3 => {
      this.setState({ value3 });
    };
    this.handleTextInputChange3 = value4 => {
      this.setState({ value4 });
    };
  }

  render() {
    const { value2, value3, value4 } = this.state;

    return (
      &lt;AppPage&gt;
        &lt;Form&gt;
          &lt;FormGroup
            label="Name"
            isRequired
            fieldId="simple-form-name"
            helperText="Please provide your full name"
          &gt;
            &lt;TextInput
              isRequired
              type="text"
              id="simple-form-name"
              name="simple-form-name"
              aria-describedby="simple-form-name-helper"
              value={value2}
              onChange={this.handleTextInputChange1}
            /&gt;
          &lt;/FormGroup&gt;
          &lt;FormGroup label="Email" isRequired fieldId="simple-form-email"&gt;
            &lt;TextInput
              isRequired
              type="email"
              id="simple-form-email"
              name="simple-form-email"
              value={value3}
              onChange={this.handleTextInputChange2}
            /&gt;
          &lt;/FormGroup&gt;
          &lt;FormGroup label="Phone number" isRequired fieldId="simple-form-number"&gt;
            &lt;TextInput
              isRequired
              type="tel"
              id="simple-form-number"
              placeholder="555-555-5555"
              name="simple-form-number"
              value={value4}
              onChange={this.handleTextInputChange3}
            /&gt;
          &lt;/FormGroup&gt;
          &lt;FormGroup isInline label="How can we contact you?" isRequired&gt;
            &lt;Checkbox label="Email" aria-label="Email" id="inlinecheck1" /&gt;
            &lt;Checkbox label="Phone" aria-label="Phone" id="inlinecheck2" /&gt;
            &lt;Checkbox label="Please don't contact me" aria-label="Please don't contact me" id="inlinecheck3"/&gt;
          &lt;/FormGroup&gt;
          &lt;FormGroup label="Additional Note:" fieldId="simple-form-note"&gt;
            &lt;TextInput isDisabled type="text" id="simple-form-note" name="simple-form-number" value="disabled" /&gt;
          &lt;/FormGroup&gt;
          &lt;FormGroup fieldId="checkbox1"&gt;
            &lt;Checkbox label="I'd like updates via email" id="checkbox1" name="checkbox1" aria-label="Update via email" /&gt;
          &lt;/FormGroup&gt;
          &lt;ActionGroup&gt;
            &lt;Button variant="primary"&gt;Submit form&lt;/Button&gt;
            &lt;Button variant="secondary"&gt;Cancel&lt;/Button&gt;
          &lt;/ActionGroup&gt;
        &lt;/Form&gt;
      &lt;/AppPage&gt;
    );
  }
}
export default SimpleForm;
</pre>

When the server reloads, you should see something like this:

<img src="forms/assets/step1.png" alt="PatternFly form demo" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
