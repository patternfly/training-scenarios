The `select` component should look like the following.
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
  onCreateOption={this.onCreateOption}
  width="50%"
  maxHeight={100}
  noResultsFoundText="Nothing found"
  createText="Create new option"
>
    {options}
</Select>
```