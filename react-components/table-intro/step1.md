The following is an example of what the table component structure looks like:

<pre class="file">
&lt;Table caption=&quot;Empty Table&quot; cells={columnsDefinition} rows={rowsDefinition}&gt;
  &lt;TableHeader /&gt;
  &lt;TableBody /&gt;
&lt;/Table&gt;
</pre>

Columns can be expressed as an array of strings, or an array of objects which match the type "ICell". The columns definition is passed to the `cells` prop of the Table component which can take the form of `Array<ICell | string>`. Below is what an ICell looks like.

<pre class="file">
export interface ICell {
  title?: string | React.ReactNode;
  transforms?: ITransforms;
  cellTransforms?: ITransforms;
  columnTransforms?: ITransforms;
  formatters?: IFormatters;
  cellFormatters?: IFormatters;
  props?: any;
  data?: any;
  header?: any;
  cell?: any;
  dataLabel?: string;
}
</pre>

Here are two ways that the same columns definition can be written:

As array of strings:
<pre class="file">
const columnsDefinition = [
  "First column",
  "Second column",
  "Third column"
]
</pre>

As array of `ICell` objects:
<pre class="file">
const columnsDefinition = [
  { title: "First column" },
  { title: "Second column" },
  { title: "Third column" }
];
</pre>

Rows can be expressed as a multidimensional array of strings, or as an array of objects which match the type "IRow". The rows definition is passed to the `rows` prop of the Table or TableBody component, and can take the form of `Array<IRow | string[]>`. Below is what an IRow should look like.

<pre class="file">
export interface IRow extends RowType {
  cells?: (React.ReactNode | IRowCell)[];
  isOpen?: boolean;
  parent?: number;
  compoundParent?: number;
  props?: any;
  fullWidth?: boolean;
  noPadding?: boolean;
  showSelect?: boolean;
  isExpanded?: boolean;
  isFirstVisible?: boolean;
  isLastVisible?: boolean;
  selected?: boolean;
}
</pre>

Here are two ways of writing the same rows definition:

As multidimentional array of strings:
<pre class="file">
const rowsDefinition = [
  ["Row 1 column 1", "Row 1 column 2", "Row 1 column 3"],
  ["Row 2 column 1", "Row 2 column 2", "Row 2 column 3"],
  ["Row 3 column 1", "Row 3 column 2", "Row 3 column 3"]
];
</pre>

As array of `IRow` objects:
<pre class="file">
const rowsDefinition = [
  {
    cells: [
      { title: "Row 1 column 1" },
      { title: "Row 1 column 2" },
      { title: "Row 1 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 2 column 1" },
      { title: "Row 2 column 2" },
      { title: "Row 2 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 3 column 1" },
      { title: "Row 3 column 2" },
      { title: "Row 3 column 3" }
    ]
  }
];
</pre>
