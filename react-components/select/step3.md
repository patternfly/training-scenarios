Now that you have a basic select component in place, let's go over the available variants of the component and begin to build a more complex example.

The select component has four variants: single, checkbox, typeahead, and multiple option typeahead. When no variant is specified, the component defaults to the single variant. The single and typeahead variants allow for a single selection at a time, while the checkbox and multiple option typeahead variants allow for multiple selections at a time.

1) **Add <pre>SelectVariant</pre> to the list of imports from @patternfly/react-core.** With this import in place, we may use this enum's options rather than a string literal. This enum looks like the following:
  <pre>
    export enum SelectVariant {
      single = 'single',
      checkbox = 'checkbox',
      typeahead = 'typeahead',
      typeaheadMulti = 'typeaheadmulti'
    }
  </pre>

Your import statement should now look like this:
<pre>import { Select, SelectOption, SelectVariant } from "@patternfly/react-core";</pre>

Let's make a select component with a typeahead variation.

2) **Add the variant property to the Select component and assign the property to the typeahead variation declared by the <pre>SelectVariant</pre> enum.**

<pre class="file" data-target="clipboard">
  variant={SelectVariant.typeahead}
</pre>

3) Additionally, to convert to typeahead, you must add a function to handle text input clearing. **Add the following function to the constructor of the App class:**

<pre class="file" data-target="clipboard">
  clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };
</pre>

4) **Add a new property to the select component called <pre>onClear</pre> and assign it to the function that was added in step 3.**

<pre class="file" data-target="clipboard">
  onClear={this.clearSelection}
</pre>

You should now have a select that you can type into and filter the options.
