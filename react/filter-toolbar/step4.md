Toolbar groups are used to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width. A `DataToolbarGroup` is passed an optional prop `variant` to format particular types of groups of elements such as filter groups, button groups, or icon button groups.

## Task
1) Wrap both the `DataToolbarItem` components containing our `CheckboxSelect` filters in the same `DataToolbarGroup` along with the optional prop `variant="filter-group"`.

<pre class="file" data-target="clipboard">
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

2) Wrap three adjacent `DataToolbarItem` components containing icons in the same `DataToolbarGroup` along with the optional prop `variant="icon-button-group"`.

<pre class="file" data-target="clipboard">
  &lt;DataToolbarGroup variant=&quot;icon-button-group&quot;&gt;
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
  &lt;/DataToolbarGroup&gt;
</pre>


Once the preview reloads - it should look like this:
<img src="filter-toolbar/assets/toolbar-groups.png" alt="toolbar groups" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
Notice how the filters in the `DataToolbarGroup` with the `filter-group` variant have no spacing between them, and that the `DataToolbarGroup` with the `icon-button-group` variant are now spaced closer to each other than before the variant prop was provided.