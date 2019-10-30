One particular type of Data toolbar item is called the `DataToolbarFilter`. When used, selected filters are displayed in chip groups below the toolbar. You may consider placing any `DataToolbarFilter` inside of a toggle group to make your toolbar responsive.

Using a `DataToolbarFilter` requires three properties. First is a managed array of selected filters called `chips` as strings or ReactNodes. It also requires an `onDelete` callback function to be executed whenever the user deletes a selected filter chip. Lastly, it requires a `categoryName` which will be used to label the chip group.

## Task
1) Define the required `onDelete` function to be passed to the DataToolbarFilters. Add it to the ToolbarDemoApp class.

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

2) Replace each of the three `DataToolbarItems` inside the `DataToolbarToggleGroup` with a `DataToolbarFilter`. Pass the appropriate state managed filters array as the `chips` property, an appropriate label as the `categoryName` property, and the onDelete function as the `deleteChip` property. 

<pre class="file" data-target="clipboard">
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

3) Two props can be optionally added to the top level `DataToolbar` component to improve user experience when using a `DataToolbarFilter`.
First, if a `clearAllFilters` event handler is passed to `DataToolbar`, a 'Clear All Filters' action will appear alongside the applied filters chip groups.
Second, if a `collapseListedFiltersBreakpoint` is passed to `DataToolbar`, the chip groups will collapse to a summary message at the passed in breakpoint, making the applied filters chip groups more responsive.
Add the following code to the `DataToolbar` to see optional props in action.

<pre class="file" data-target="clipboard">
  clearAllFilters={this.onDelete} collapseListedFiltersBreakpoint=&quot;xl&quot;
</pre>

Take some time to play with the toolbar to see how it responds to changes in viewport size and the number of filters applied.
<img src="filter-toolbar/assets/wide-view-with-chip-groups.png" alt="Wide view of toolbar filter with applied filters in chip groups" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
At smaller viewport widths, you should see a responsive collapsed view of the toolbar and applied filters.
<img src="filter-toolbar/assets/narrow-view-with-chip-groups.png" alt="Narrow view of toolbar with collapsed applied filter chip groups" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
