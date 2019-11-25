Now let's begin customizing. There are many options available to customize your select component and its options.

One such customization, for both typeahead and multiple typeahead variants, is custom filtering.

By default, these variants match the entered input with the options' values in order. For example, given the "Alabama" option value, an "Ala" text input would match but a "bama" text input would not.

Let's allow any input to be matched, regardless of ordering.

1. Add a custom filtering method to the App class. The component expects a function that will return a list of options to display. In the code below, we match the text input regardless of ordering using a regular expression, and santize the text input to avoid extraneous characters. Using the same example above, this will mean that a text input of "bama" would still match for the option "Alabama".

<pre class="file" data-target="clipboard">
  customFilter = e => {
    const { options } = this.state;
    let input;
    try {
      input = new RegExp(e.target.value.toString(), "i");
    } catch (err) {
      input = new RegExp(
        e.target.value.toString().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );
    }
    let typeaheadFilteredChildren =
      e.target.value.toString() !== ""
        ? options.filter(option => input.test(option.props.value.toString()))
        : options;
    return typeaheadFilteredChildren;
  };
</pre>

2. And add the onFilter property to the Select component:

<pre>
  onFilter={this.customFilter}
</pre>
