The individual components placed inside of a toolbar are each wrapped in a `DataToolbarItem` component. `DataToolbarItems` can be passed an optional `variant` prop to format specific type of component it wraps such as a search filter, a pagination component, a bulk select, or an overflow menu. By wrapping components in the `DataToolbarItem` component and adding the proper variant, you are ensuring the components are spaced appropriately.

## Task

1) We will use the state of our ToolbarDemoApp to manage some of the items in our `DataToolbar`.

Replace ToolbarDemoApp constructor with the following snippet.

<pre class="file" data-target="clipboard">
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        name: [],
        risk: [&quot;Low&quot;],
        status: [&quot;New&quot;, &quot;Pending&quot;]
      }
    };
  }
</pre>

2) Copy the following onSearch and onSelect event handlers and add them to the ToolbarDemoApp class.

<pre class="file" data-target="clipboard">
  onSearch = (value) =&gt; {
    this.setState(prevState =&gt; {
      return {
        filters: {
          ...prevState.filters,
          name: [...prevState.filters.name, value]
        }
      };
    });
  }
    
  onSelect = (type, event, selection) =&gt; {
    const checked = event.target.checked;
    this.setState(prevState =&gt; {
      const prevSelections = prevState.filters[type.toLowerCase()];
      return {
        filters: {
          ...prevState.filters,
          [type.toLowerCase()]: checked
            ? [...prevSelections, selection]
            : prevSelections.filter(value => value !== selection)
        }
      };
    });
  };
</pre>

3) Add the following constants to the top of the render function.

<pre class="file" data-target="clipboard">
  const { filters } = this.state;
  const statusOptions = [&quot;New&quot;, &quot;Pending&quot;, &quot;Running&quot;, &quot;Cancelled&quot;];
  const riskOptions = [&quot;Low&quot;, &quot;Medium&quot;, &quot;High&quot;];
</pre>


4) Replace the contents of the `DataToolbarContent` with the following six items.

In this case, the first of the items we are going to add is going be `variant='search-filter'`.

<pre class="file" data-target="clipboard">
    &lt;DataToolbarItem variant=&quot;search-filter&quot;&gt;
      &lt;Input value=&quot;&quot; id=&quot;step2Input&quot; ariaLabel=&quot;Step 2 input&quot; /&gt;
    &lt;/DataToolbarItem&gt;
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
    &lt;DataToolbarItem&gt;
      &lt;Button variant=&quot;plain&quot;&gt;
        &lt;EditIcon /&gt;
      &lt;/Button&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;Button variant=&quot;plain&quot;&gt;
        &lt;CloneIcon /&gt;
      &lt;/Button&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;Button variant=&quot;plain&quot;&gt;
        &lt;SyncIcon /&gt;
      &lt;/Button&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;Kebab /&gt;
    &lt;/DataToolbarItem&gt;
</pre>

Once the preview reloads - it should look like this:
<img src="filter-toolbar/assets/toolbar-items.png" alt="toolbar with data toolbar items" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
