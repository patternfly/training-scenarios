Managing the relationship of a toolbar and its filters has to a table or other component is the responsibility of the consumer. 

1) <strong>Add the `DemoTable` component below the `DataToolbar`.</strong> 

Pass the `DemoTable` the status and risk filters as props.

<pre class="file" data-target="clipboard">
&lt;DemoTable nameFilters={filters.name} statusFilters={filters.status} riskFilters={filters.risk} clearAllFilters={this.onDelete}/&gt;
</pre> 

<strong>Note:</strong> The relationship a toolbar and its filters has to a table or other component must be managed by the consumer. The `DemoTable` component is defined in `src/components/table.js` where the managed list of applied filters manipulates a very small set of data.

Once the preview reloads, it should look like this:

<img src="toolbar-filter/assets/final.png" alt="Completed toolbar filter with table" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

<strong> Note:</strong> Take time to experiment with how the data toolbar interacts with the table to see the filtering in action.