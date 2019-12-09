Typeahead variants support adding new options, based on the user entered input. This is supported in two parts, first by allowing a user to select their custom input, and second by allowing this custom input to be added to the overall list of options for permanence.

1) **Add the `isCreateable` flag to the `Select` component.**

<pre class="file" data-target="clipboard">
isCreatable
</pre>

The component should look as below.
```
<Select 
  onToggle={this.onToggle}
  onSelect={this.onSelect}
  selections={selected}
  isExpanded={isExpanded}
  placeholderText="Select a state"
  variant={SelectVariant.typeahead}
  onClear={this.clearSelection}
  onFilter={this.customFilter}
  isCreatable
>
    {options}
</Select>
```

<strong>Note:</strong> With this flag, a new message is displayed at the end of the list, prompting the user to create an option based on the input. Additionally, this message replaces the "no results found" message when filtering would otherwise return nothing. This allows the current value to be used as a new selection, but does not persist the data - it will appear as selected, but will not appear in the overall list.

2) **Add a function to add a new value to the options array.**

This function should go in the constructor of the App class. This function allows the custom entered options to persist.

<pre class="file" data-target="clipboard">
this.onCreateOption = newValue => {
  this.setState({
    options: [
      ...this.state.options,
      &lt;SelectOption
        value={new CustomDataState(newValue, "any", "other data", 0)}
      &gt;
        {newValue}
      &lt;/SelectOption&gt;
    ]
  });
};
</pre>

<strong>Note:</strong> The function receives the text input entered by the user and is triggered when a new option is selected.

3) **Add a new property to the `Select` component called `onCreateOption`.**

Assign it to the function that was added in step 2.

<pre class="file" data-target="clipboard">
onCreateOption={this.onCreateOption}
</pre>
