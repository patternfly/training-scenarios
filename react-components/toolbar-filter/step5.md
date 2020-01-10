One particular type of data toolbar item is called the `DataToolbarFilter`. When used, selected filters are displayed in chip groups below the toolbar. Placing any `DataToolbarFilter` inside of a toggle group makes the toolbar responsive.

Using a `DataToolbarFilter` requires three properties:

First is a managed array of selected filters called `chips` as strings or ReactNodes. 

An `onDelete` callback function to be executed whenever the user deletes a selected filter chip.

A `categoryName` which will be used to label the chip group.

1) <strong>Define the required `onDelete` function to be passed to each `DataToolbarFilter`.</strong>

Add the function to the `ToolbarDemoApp` class. Make sure to add it below the `onSelect` function definition in the `ToolbarDemoApp` class.

The `onDelete` callback function is executed whenever the user deletes a selected filter chip.

<pre class="file" data-target="clipboard">
onDelete = (type = &quot;&quot;, id = &quot;&quot;) =&gt; {
  if (type) {
    this.setState((prevState) =&gt; {
      prevState.filters[type.toLowerCase()] = prevState.filters[type.toLowerCase()].filter(s =&gt; s !== id);
      return {
        filters: prevState.filters,
      }
    });
  } else {
    this.setState({
      filters: {
        name: [],
        risk: [],
        status: [],
      }
    })
  }
};
</pre>

2) <strong>Locate the following three `DataToolbarItems` inside the `DataToolbarToggleGroup`:</strong>

<pre class="file">
&lt;DataToolbarItem variant=&quot;search-filter&quot;&gt;
  &lt;Input value=&quot;&quot; id=&quot;step2Input&quot; ariaLabel=&quot;Step 2 input&quot; /&gt;
&lt;/DataToolbarItem&gt;
&lt;DataToolbarGroup variant=&quot;filter-group&quot;&gt;
  &lt;DataToolbarItem&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Status&quot;
      selections={filters.status}
      options={statusOptions}
    /&gt;
  &lt;/DataToolbarItem&gt;
  &lt;DataToolbarItem&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Risk&quot;
      selections={filters.risk}
      options={riskOptions}
    /&gt;
  &lt;/DataToolbarItem&gt;
&lt;/DataToolbarGroup&gt;
</pre>

3) <strong>Replace each of the three `DataToolbarItems` inside the `DataToolbarToggleGroup` with a `DataToolbarFilter`.</strong>

Once completed, the contents of the `DataToolbarToggleGroup` should appear as follows:

<pre class="file">
&lt;DataToolbarFilter&gt;
  &lt;Input id=&quot;searchInput&quot; search={this.onSearch} ariaLabel=&quot;Search input&quot; /&gt;
&lt;/DataToolbarFilter&gt;
&lt;DataToolbarGroup variant=&quot;filter-group&quot;&gt;
  &lt;DataToolbarFilter&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Status&quot;
      selections={filters.status}
      options={statusOptions}
    /&gt;
  &lt;/DataToolbarFilter&gt;
  &lt;DataToolbarFilter&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Risk&quot;
      selections={filters.risk}
      options={riskOptions}
    /&gt;
  &lt;/DataToolbarFilter&gt;
&lt;/DataToolbarGroup&gt;
</pre>

4) <strong>Add a `chips` property to each of the `DataToolbarFilter` components.</strong>

Each of the `DataToolbarFilter` components requires a `chips` property. In this case, the state managed filters array's properties can serve as the `chips` property for each `DataToolbarFilter`. 

a) <strong>For the first `DataToolbarFilter` (containing a text input) add the property `chips={filters.name}`.</strong>

b) <strong>For the second `DataToolbarFilter` (containing the status filter) add the property `chips={filters.status}`.</strong>

c) <strong>For the third `DataToolbarFilter` (containing the risk filter) add the property `chips={filters.risk}`.</strong>

5) <strong>Pass an appropriate label as the `categoryName` property to each `DataToolbarFilter`.</strong>

a) <strong>For the first `DataToolbarFilter` (containing a text input) add the property `categoryName="Name"`.</strong>

b) <strong>For the second `DataToolbarFilter` (containing the status filter) add the property `categoryName="Status"`.</strong>

c) <strong>For the third `DataToolbarFilter` (containing the risk filter) add the property `categoryName="Risk"`.</strong>

6) <strong>Pass the onDelete function as the `deleteChip` property to each `DataToolbarFilter`.</strong>

Once steps 4, 5, and 6 are completed, the contents of the `DataToolbarToggleGroup` should appear as follows:

<pre class="file">
&lt;DataToolbarFilter chips={filters.name} deleteChip={this.onDelete} categoryName=&quot;Name&quot;&gt;
  &lt;Input id=&quot;searchInput&quot; search={this.onSearch} ariaLabel=&quot;Search input&quot; /&gt;
&lt;/DataToolbarFilter&gt;
&lt;DataToolbarGroup variant=&quot;filter-group&quot;&gt;
  &lt;DataToolbarFilter chips={filters.status} deleteChip={this.onDelete} categoryName=&quot;Status&quot;&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Status&quot;
      selections={filters.status}
      options={statusOptions}
    /&gt;
  &lt;/DataToolbarFilter&gt;
  &lt;DataToolbarFilter chips={filters.risk} deleteChip={this.onDelete} categoryName=&quot;Risk&quot;&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Risk&quot;
      selections={filters.risk}
      options={riskOptions}
    /&gt;
  &lt;/DataToolbarFilter&gt;
&lt;/DataToolbarGroup&gt;
</pre>

7) <strong>Experiment with two optional properties passed to `DataToolbar`.</strong>

Two props can be optionally added to the top-level `DataToolbar` component when using a `DataToolbarFilter`.

a) <strong>Pass a `clearAllFilters` event handler to `DataToolbar`.</strong>

A 'Clear All Filters' action will appear alongside the applied filters chip groups.

b) <strong>Pass a `collapseListedFiltersBreakpoint` is passed to `DataToolbar`.</strong>

The chip groups will collapse to a summary message at the passed in breakpoint, making the applied filters chip groups more responsive.

Add the following code to the `DataToolbar` to see optional props in action.

<pre class="file" data-target="clipboard">
clearAllFilters={this.onDelete} collapseListedFiltersBreakpoint=&quot;xl&quot;
</pre>

<strong> Note:</strong> Take some time to experiment with the toolbar to see how it responds to changes in viewport size and the number of filters applied.

<img src="toolbar-filter/assets/wide-view-with-chip-groups.png" alt="Wide view of toolbar filter with applied filters in chip groups" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

At smaller viewport widths, a responsive collapsed view of the toolbar and applied filters should be visible.

<img src="toolbar-filter/assets/narrow-view-with-chip-groups.png" alt="Narrow view of toolbar with collapsed applied filter chip groups" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
