There are additional miscellaneous properties that can be used to customize general visual aspects of the `select` component.

1) **Add a `width` property to the `select` component.**

Assign it to `"50%"`.

This property controls the overall width of the select toggle, using pixels or percentages.

<pre class="file" data-target="clipboard">
width="50%"
</pre>

2) **Add a `maxHeight` property to the `select`.**

Assign it to `{100}`.

This property controls the maximum height of the expanded select menu, using pixels or percentages.

<pre class="file" data-target="clipboard">
maxHeight={100}
</pre>

3) **Add a `noResultsFoundText` property to the `select` component.**

Assign it to `"Nothing found"`.

This property allows you to customize the text that appears when no results are found by the filtering function.

<pre class="file" data-target="clipboard">
noResultsFoundText="Nothing found"
</pre>

4) **Add a `createText` property to the select component.**

Assign it to `"Create new option"`.

This property allows you to customize the text that appears when the `isCreateable` property is present.

<pre class="file" data-target="clipboard">
createText="Create new option"
</pre>

<strong>Note:</strong> The variable prefixes the input text, formatting the displayed text as follows: `{createText} "{input value}"`

Once the preview reloads, it should look like this:
<img src="select/assets/final-select.png" alt="basic select" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />