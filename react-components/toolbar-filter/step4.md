One particular type of Data toolbar group is called the toggle group. A `DataToolbarToggleGroup` can be used to collapse a set of items into an overlay panel at a certain breakpoint. This allows complex toolbars with multiple items and groups of items to be responsive. 

A toggle group is useful for containing filter controls, for example. When the toolbar responds to adapt to a mobile viewport, the contents contained in a toggle group will collapse into an overlay panel that can be toggled by clicking the Filter icon.

Using a `DataToolbarToggleGroup` requires both a `toggleIcon` and `breakpoint` property. The `toggleIcon` is a ReactNode which is displayed instead of the children of `DataToolbarToggleGroup` once the viewport width shrinks below the passed in breakpoint.

1) **Locate both the `DataToolbarItem` with `variant="search-filter"` and the `DataToolbarGroup` with `variant="filter-group"`:**

**Hint:** Both the `DataToolbarItem` and `DataToolbarGroup` to locate are siblings of each other.

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

2) **Wrap both the located `DataToolbarItem` and `DataToolbarGroup` in the same `DataToolbarToggleGroup`**

3) **Add the `toggleIcon` property to the `DataToolbarToggleGroup` component. Its value should be `{<FilterIcon />}`**

4) **Add the `breakpoint` property to the `DataToolbarToggleGroup` component. Its value should be `"xl"`**  

Once completed, the code should appear as below.

<pre class="file">
&lt;DataToolbarToggleGroup 
  toggleIcon={&lt;FilterIcon /&gt;} 
  breakpoint=&quot;xl&quot;
  &gt;
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
&lt;/DataToolbarToggleGroup&gt;
</pre>

5) **Test changing viewport widths and breakpoints**

Shrinking and expanding the viewport should toggle between showing the toggle icon and the children of the `DataToolbarToggleGroup`. When the toggle icon is being displayed, clicking on it should toggle the `DataToolbarToggleGroup` children in responsive expandable content.

This first image shows how the toolbar should appear at a wider viewport width.

<img src="toolbar-filter/assets/toggle-group-wide-view.png" alt="wide view of toggle group" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

This second image shows how the toolbar should appear at a narrow viewport width.

<img src="toolbar-filter/assets/toggle-group-narrow-view.png" alt="narrow view of toggle group" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

Changing the `breakpoint` passed to the `DataToolbarToggleGroup` should change the viewport width at which the `DataToolbarToggleGroup` toggles between the expanded state and the responsive collapsed state.

Valid values for the `breakpoint` property are `md`, `lg`, or `xl`.