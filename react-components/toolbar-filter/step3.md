Toolbar groups are used to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width. A `DataToolbarGroup` passes an optional prop `variant` to format particular types of element groups such as filter groups, button groups, or icon button groups.

This step will group `DataToolbarItem` components into `DataToolbarGroup` components and apply appropriate `variant` props.

1) <strong>Locate the following two `DataToolbarItems` containing `CheckBoxSelect` components:</strong>

<pre class="file">
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
</pre>

2) <strong>Wrap both the `DataToolbarItem` components containing the `CheckboxSelect` filters in one `DataToolbarGroup` component.</strong>

3) <strong>Add the prop `variant="filter-group"` to the `DataToolbarGroup` added in step 2.</strong>

This will space the two `CheckboxSelect` components according to the PatternFly design specifications. 

Once completed, the code should appear as below.

<pre class="file">
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

4) <strong>Locate the following three `DataToolbarItems` containing icons:</strong>

<pre class="file">
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
</pre>

5) <strong>Wrap the three adjacent `DataToolbarItem` components containing icons in one `DataToolbarGroup` component.</strong>

6) <strong>Add the prop `variant="icon-button-group"` to the `DataToolbarGroup` component added in step 5.</strong>

This will space the three icons according to the PatternFly design specifications. Once completed, the code should appear as below.

<pre class="file">
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


Once the preview reloads, it should look like this:

<img src="toolbar-filter/assets/toolbar-groups.png" alt="toolbar groups" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />

<strong>Note:</strong> The filters in the `DataToolbarGroup` with the `filter-group` variant have no spacing between them. The `DataToolbarGroup` with the `icon-button-group` variant is now spaced closer to each other.