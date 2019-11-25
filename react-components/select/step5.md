Typeahead variants support adding new options, based on the user entered input. This is supported in two parts, first by allowing a user to select their custom input, and second by allowing this custom input to be added to the overall list of options for permanence.

1. Add the isCreateable flag to the Select component.

<pre class="file" data-target="clipboard">
  isCreatable
</pre>

With this flag, a new message is displayed at the end of the list, prompting the user to create an option based on the input. Additionally, this message replaces the "no results found" message when filtering would otherwise return nothing. This lets you use your current value as a new selection, but does not persist the data - it will appear as selected, but will not appear in the overall list.

To persist a new value permanently, use the onCreateOption property.

2. Add a method to the App class to add a new value to the options array. The function recieves the text input entered by the user, and is triggered when a new option is selected.

<pre class="file" data-target="clipboard">
  onCreateOption = newValue => {
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

3. Add the onCreateOption function to the Select component:

<pre class="file" data-target="clipboard">
  onCreateOption={this.onCreateOption}
</pre>
