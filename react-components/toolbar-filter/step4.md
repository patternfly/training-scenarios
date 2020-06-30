One particular type of toolbar group is called the toggle group. The `ToolbarToggleGroup` collapses a set of items into an overlay panel at a specific breakpoint. The method allows complex toolbars with multiple items and groups of items to be responsive.

A toggle group is useful for containing filter controls, for example. When the toolbar responds to adapt to a mobile viewport, the contents contained in a toggle group will collapse into an overlay panel. This panel can be toggled by clicking the filter icon.

Using a `ToolbarToggleGroup` requires both a `toggleIcon` and `breakpoint` property. The `toggleIcon` is a ReactNode which is displayed instead of the children of `ToolbarToggleGroup`. This occurs once the viewport width shrinks below the passed in breakpoint.

1) <strong>Locate both the `ToolbarItem` with `variant="search-filter"` and the `ToolbarGroup` with `variant="filter-group"`.</strong>

<strong>Hint:</strong> Both the `ToolbarItem` and `ToolbarGroup` are siblings of each other.

<pre class="file">
&lt;ToolbarItem variant=&quot;search-filter&quot;&gt;
  &lt;Input value=&quot;&quot; id=&quot;step2Input&quot; ariaLabel=&quot;Step 2 input&quot; /&gt;
&lt;/ToolbarItem&gt;
&lt;ToolbarGroup variant=&quot;filter-group&quot;&gt;
  &lt;ToolbarItem&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Status&quot;
      selections={filters.status}
      options={statusOptions}
    /&gt;
  &lt;/ToolbarItem&gt;
  &lt;ToolbarItem&gt;
    &lt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Risk&quot;
      selections={filters.risk}
      options={riskOptions}
    /&gt;
  &lt;/ToolbarItem&gt;
&lt;/ToolbarGroup&gt;
</pre>

2) <strong>Wrap the `ToolbarItem` and `ToolbarGroup` located in step 1, in a `ToolbarToggleGroup`.</strong>

3) <strong>Add the `toggleIcon` property to the `ToolbarToggleGroup` component.</strong>

The value of the `toggleIcon` property should be `{<FilterIcon />}`.

4) <strong>Add the `breakpoint` property to the `ToolbarToggleGroup` component.</strong>

The value of the `breakpoint` property should be `"xl"`.

Once completed, the code should appear as below.

<pre class="file">
&lt;ToolbarToggleGroup 
  toggleIcon={&lt;FilterIcon /&gt;} 
  breakpoint=&quot;xl&quot;
  &gt;
  &lt;ToolbarItem variant=&quot;search-filter&quot;&gt;
    &lt;Input value=&quot;&quot; id=&quot;step2Input&quot; ariaLabel=&quot;Step 2 input&quot; /&gt;
  &lt;/ToolbarItem&gt;
  &lt;ToolbarGroup variant=&quot;filter-group&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;CheckboxSelect
        onSelect={this.onSelect}
        type=&quot;Status&quot;
        selections={filters.status}
        options={statusOptions}
      /&gt;
    &lt;/ToolbarItem&gt;
    &lt;ToolbarItem&gt;
      &lt;CheckboxSelect
        onSelect={this.onSelect}
        type=&quot;Risk&quot;
        selections={filters.risk}
        options={riskOptions}
      /&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
&lt;/ToolbarToggleGroup&gt;
</pre>

5) <strong>Test the responsiveness of the toolbar.</strong>

Shrinking and expanding the viewport should toggle between showing the toggle icon and the children of the `ToolbarToggleGroup`. When the toggle icon is being displayed, clicking on it should toggle the `ToolbarToggleGroup` children in responsive expandable content.

This first image shows how the toolbar should appear at a wider viewport width.

<img src="toolbar-filter/assets/toggle-group-wide-view.png" alt="wide view of toggle group" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

This second image shows how the toolbar should appear at a narrow viewport width.

<img src="toolbar-filter/assets/toggle-group-narrow-view.png" alt="narrow view of toggle group" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

Changing the `breakpoint` passed to the `ToolbarToggleGroup` should change the viewport width at which the `ToolbarToggleGroup` toggles between the expanded state and the responsive collapsed state.

Valid values for the `breakpoint` property are `md`, `lg`, or `xl`.