With a basic select component in place, build a more complex example in this step, by using the available variants.

The select component has four variants: single, checkbox, typeahead, and multiple option typeahead. When no variant is specified, the component defaults to the single variant. The single and typeahead variants allow for a single selection at a time, while the checkbox and multiple option typeahead variants allow for multiple selections at a time.

1) **Add `SelectVariant` to the list of imports from @patternfly/react-core.** With this import in place, this enum's options may be used rather than a string literal. This enum looks like the following:
 ```
enum SelectVariant {
  single = 'single',
  checkbox = 'checkbox',
  typeahead = 'typeahead',
  typeaheadMulti = 'typeaheadmulti'
}
```

The import statement should look like this:
`import { Select, SelectOption, SelectVariant } from "@patternfly/react-core";`

Make a select component with a typeahead variation.

2) **Add the variant property to the Select component.**

This also involves assigning the property to the typeahead variation declared by the SelectVariant enum. Setting this property to `typeahead` changes the select component's structure to allow user input that filters the list of options.

<pre class="file" data-target="clipboard">
variant={SelectVariant.typeahead}
</pre>

3) **Add a function to clear text input to the constructor of the App class:**

<pre class="file" data-target="clipboard">
this.clearSelection = () => {
  this.setState({
    selected: null,
    isExpanded: false
  });
};
</pre>

4) **Add a new property to the `Select` component called `onClear`.**

Assign it to the function that was added in step 3.

<pre class="file" data-target="clipboard">
onClear={this.clearSelection}
</pre>

The select should be filterable after this step.