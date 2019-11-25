Now that you have a basic select component in place, let's go over the available variants of the component and begin to build a more complex example.

The Select component has 4 variants: single, checkbox, typeahead, and multiple option typeahead. When no variant is specified, the component defaults to the single variant. The single and typeahead variants allow for a single selection at a time, while the checkbox and multiple option typeahead variants allow for multiple selections at a time.

1. Add SelectVariant to the list of imports from @patternfly/react-core. With this import in place, we may use this enum's options rather than a string literal.

<pre>
  export enum SelectVariant {
    single = 'single',
    checkbox = 'checkbox',
    typeahead = 'typeahead',
    typeaheadMulti = 'typeaheadmulti'
  }
</pre>

Let's explore the typeahead variant.

2. Add the variant property to the Select component:

<pre class="file" data-target="clipboard">
  variant={SelectVariant.typeahead}
</pre>

3. Additionally, to convert to typeahead, you must add another function to handle input clearing. Add the following method to the App class:

<pre class="file" data-target="clipboard">
  clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };
</pre>

4. And add the onClear property to the Select component:

<pre class="file" data-target="clipboard">
  onClear={this.clearSelection}
</pre>

You should now have a select that you can type into and filter the options.
