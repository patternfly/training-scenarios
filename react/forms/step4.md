PatternFly components, including forms, can be customized with props. You can add a form validation effect to your cards with the `isValid` prop and helper text with the `helperTextInvalid` prop.

## Task

1) First, we'll update our constructor state declaration to have an additional `isValid` state prop:

<pre class="file" data-target="clipboard">
constructor(props) {
  super(props);
  this.state = {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    isValid: false
  };
</pre>

2) Next, we'll update `handleTextInputChange2` so it checks the email format against a regex:
<pre class="file" data-target="clipboard">
this.handleTextInputChange2 = value3 => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  this.setState({ value3, isValid: reg.test(value3) });
};
</pre>

3) Next, we'll add `isValid` to the state declaration in the `render()` method:

<pre class="file" data-target="clipboard">
render() {
    const { value1, value2, value3, value4, isValid } = this.state;
</pre>

4) Finally, we'll add the `helperTextInvalid` prop to the email `FormGroup` and `isValid` props to the email `FormGroup` and `TextInput` components:

<pre class="file" data-target="clipboard">
&lt;FormGroup
  label="Email"
  isRequired
  fieldId="simple-form-email"
  helperTextInvalid="Please enter a valid email address"
  isValid={isValid}
&gt;
  &lt;TextInput
    isRequired
    type="email"
    id="simple-form-email"
    name="simple-form-email"
    value={value3}
    onChange={this.handleTextInputChange2}
    isValid={isValid}
  /&gt;
&lt;/FormGroup&gt;
</pre>

When these steps are complete, the form should look like this (the error message will disappear if you type in a correctly formatted email):

<img src="forms/assets/step3.png" alt="Completed form with title field and email validation" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
