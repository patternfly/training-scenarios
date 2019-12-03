There a couple additional miscellaneous properties used to customize general visual aspects of the select component.

1) **Add a new property to the select component called <pre>width</pre> and assign it to <pre>"50%"</pre>.** This property controls the overall width of the select toggle, using pixels or percentages.

<pre class="file" data-target="clipboard">
  width="50%"
</pre>

2) **Add a new property to the select component called <pre>height</pre> and assign it to <pre>{100}</pre>.** This property controls the maximum height of the expanded select menu, using pixels or percentages.

<pre class="file" data-target="clipboard">
  height={100}
</pre>

3) **Add a new property to the select component called <pre>noResultsFoundText</pre> and assign it to <pre>"Nothing found"</pre>.** This property allows you to customize the text that appears when no results are found by the filtering function.

<pre class="file" data-target="clipboard">
  noResultsFoundText="Nothing found"
</pre>

4) **Add a new property to the select component called <pre>createText</pre> and assign it to <pre>"Create new option"</pre>.** This property allows you to customize the text that appears when the <pre>isCreateable</pre> property is present.

<pre class="file" data-target="clipboard">
  createText="Create new option"
</pre>

<strong>Note:</strong> The variable prefixes the input text, formatting the displayed text as follows: <pre>{createText} "{input value}"</pre>

This is what your select component should look like:
<pre>
  &lt;Select
    onToggle={this.onToggle}
    onSelect={this.onSelect}
    selections={selected}
    isExpanded={isExpanded}
    placeholderText="Select a state"
    onClear={this.clearSelection}
    onFilter={this.customFilter}
    isCreatable
    width="50%"
    height={100}
    noResultsFoundText="Nothing found"
    createText="Create new option"
  &gt;
    {options}
  &lt;/Select&gt;
</pre>
