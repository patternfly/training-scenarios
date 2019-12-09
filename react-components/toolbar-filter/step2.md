The individual components placed inside of a toolbar are each wrapped in a `DataToolbarItem` component. `DataToolbarItems` can be passed an optional `variant` prop to format a specific type of component it wraps such as a search filter, a pagination component, a bulk select, or an overflow menu. 

Wrapping components in the `DataToolbarItem` component and adding the proper variant ensures the components are spaced appropriately.

Use the state of the `ToolbarDemoApp` to manage the three applied filters in the `DataToolbar`.

1) **Locate the following constructor in `ToolbarDemoApp**

<pre class="file">
constructor(props) {
  super(props);
}
</pre>

2) **Initialize the state in the constructor located in step 1**

Add a `filters` object to the state. `filters` should have three properties (name, risk, and status) each with an empty array as its value. This filters object will manage the three filters in the `DataToolbar`.

Once step 2 is completed, the constructor should look like the snippet below.

<pre class="file">
constructor(props) {
  super(props);
  this.state = {
    filters: {
      name: [],
      risk: [],
      status: []
    }
  };
}
</pre>

3) **Add two event handlers to the `ToolbarDemoApp` class**

Both of the event handlers can be inserted outside and below the constructor modified in the previous steps.

The first will be an `onSearch` event handler which will fire when the user interacts with the name filter.

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
</pre>

The second event handler will be an `onSelect` event handler which will fire when the user interacts with the risk and status filters.

<pre class="file" data-target="clipboard">
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

4) **Add the following constants inside the top of the render function above the return statement**

In this case, unwrap the state managed `filters` to be used by the `DataToolbar`.

Also define the status and risk options that will appear in the two dropdown filters in the `DataToolbar`.

<pre class="file" data-target="clipboard">
const { filters } = this.state;
const statusOptions = [&quot;New&quot;, &quot;Pending&quot;, &quot;Running&quot;, &quot;Cancelled&quot;];
const riskOptions = [&quot;Low&quot;, &quot;Medium&quot;, &quot;High&quot;];
</pre>


5) **Locate the following `DataToolbarContent` component:**

<pre class="file">
&lt;DataToolbar id=&quot;tutorial-toolbar&quot;&gt;
  &lt;DataToolbarContent&gt;
    Toolbar Demo
  &lt;/DataToolbarContent&gt;
&lt;/DataToolbar&gt;
</pre>

6) **Replace the `Toolbar Demo` text in the `DataToolbarContent` with the following six items:**

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

**Note:** The first of the items added includes `variant='search-filter'`. Adding this variant adjusts some of the margins to comply with PatternFly design standards.

Once the preview reloads - it should look like this:

<img src="toolbar-filter/assets/toolbar-items.png" alt="toolbar with data toolbar items" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
