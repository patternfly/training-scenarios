Now we'll modify our form to include a title dropdown.

## Task

1) Make sure the App.js file is still open

2) To create a title dropdown, we'll add a new `value1` attribute to state and a `this.options` array in the constructor.

<pre class="file" data-target="clipboard">
constructor(props) {
  super(props);
  this.state = {
    value1: 'please choose',
    value2: '',
    value3: '',
    value4: ''
  };
  this.onChange = (value1, event) => {
    this.setState({ value1 });
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
  this.options = [
    { value: 'please choose', label: 'Please choose', disabled: false },
    { value: 'miss', label: 'Miss', disabled: false },
    { value: 'mrs', label: 'Mrs', disabled: false },
    { value: 'ms', label: 'Ms', disabled: false },
    { value: 'mr', label: 'Mr', disabled: false },
    { value: 'dr', label: 'Dr', disabled: false },
    { value: 'other', label: 'Other', disabled: false }
  ];
}
</pre>

3) Next, we'll add `value1` to the state declaration in the `render()` method:

<pre class="file" data-target="clipboard">
render() {
    const { value1, value2, value3, value4 } = this.state;
</pre>

4) Next, we'll add a new `FormGroup` containing a `FormSelect` and `FormSelectOptions`:

<pre class="file" data-target="clipboard">
&lt;FormGroup label="Title" fieldId="simple-form-title"&gt;
  &lt;FormSelect
    value={this.state.value1}
    onChange={this.onChange}
    id="simple-form-title"
    name="simple-form-title"
  &gt;
    {this.options.map((option, index) => (
      &lt;FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} /&gt;
    ))}
  &lt;/FormSelect&gt;
&lt;/FormGroup&gt;
</pre>

Once the preview reloads, it should look like this:

<img src="forms/assets/step2.png" alt="Form demo with title options menu" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
