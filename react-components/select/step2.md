Add data to populate the select, and give it basic event handling like opening, closing, and selecting an option.

1) **Add state properties to the constructor of the App class.** 

This code goes below `super(props);`.

<pre class="file" data-target="clipboard">
this.state = {
  options: [
    &lt;SelectOption value="Alabama" /&gt;,
    &lt;SelectOption value="Florida" /&gt;,
    &lt;SelectOption value="New Jersey" /&gt;,
    &lt;SelectOption value="New Mexico" /&gt;,
    &lt;SelectOption value="New York" /&gt;,
    &lt;SelectOption value="North Carolina" /&gt;
  ],
  selected: null,
  isExpanded: false
};
</pre>

2) **Add the deconstructed state properties to the top of the App class's render function.** 

<pre class="file" data-target="clipboard">
const { options, selected, isExpanded } = this.state;
</pre>

3) **Update the `Select` properties with values from the state that was added in step 2.** 

a. <strong>Assign the `selections` property to `selected`.</strong> 

This variable informs the component of what is currently selected.

b. <strong>Assign the `isExpanded` property to `isExpanded`.</strong> 

This boolean controls if the select menu is expanded.

c. <strong>Replace the text inside of the Select component.</strong> 

Search for `(Add options here)` and replace this with the `{options}` object. This list determines what is rendered in the expanded select menu.

The `select` component should look like the following.
```
<Select 
  onToggle={Function.prototype} 
  onSelect={Function.prototype} 
  selections={selected} 
  isExpanded={isExpanded} 
  placeholderText="Select a state"
>
  {options}
</Select>
```

4) **Add event handling functions to the component.**

  a. <strong>Copy the following `onToggle` function into the constructor of the App class.</strong>
  
  This function should go under the state declaration. This function controls the `isExpanded` property, and thereby when the select menu opens and closes.

<pre class="file" data-target="clipboard">
this.onToggle = isExpanded => {
  this.setState({
    isExpanded
  });
};
</pre>

  b. <strong>Copy the following `onSelect` function into the constructor of the App class.</strong> 
  
  This function should go under the `onToggle` function added in step 6a. This function acts as a callback when a select option is clicked. It updates the `selected` state property, and thereby what is rendered as selected in the component.

<pre class="file" data-target="clipboard">
this.onSelect = (event, selection) => {
  this.setState({
    selected: selection,
    isExpanded: false
  });
};
</pre>

5) **Update the `Select` properties with the functions added to the constructor in step 4.**

a. <strong>Assign the `onToggle` property to `this.onToggle`.</strong>

b. <strong>Assign the `onSelect` property to `this.onSelect`.</strong>

The component should look as below.
```
<Select 
  onToggle={this.onToggle} 
  onSelect={this.onSelect} 
  selections={selected} 
  isExpanded={isExpanded} 
  placeholderText="Select a state"
>
  {options}
</Select>
```

Now the select is set up! It can be opened and closed, and options are selectable.
