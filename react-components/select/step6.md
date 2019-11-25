There a couple additional properties used to customize general visual aspects of the Select component.

width controls the overall width of the select toggle, using pixels or percentages.
height controls the maximum height of the expanded select menu, using pixels or percentages.
noResultsFoundText allows you to customize the text that appears when no results are found.
createText allows you to customize the text that appears when the isCreateable flag is present. The variable prefixes the input text, formatting the displayed text as follows: {createText} "{input value}".

1. Add these new properties to the Select component:

<pre class="file" data-target="clipboard">
  width="50%"
  height={100}
  noResultsFoundText="Nothing found"
  createText="Create new option"
</pre>
