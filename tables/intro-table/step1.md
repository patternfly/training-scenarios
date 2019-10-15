The PatternFly React Table package provides a collection of React components you can use to build tables with consistent markup, styling, and behavior. In this course, we're going to build a PatternFly Table together - starting with creating a basic column/row structure, then converting those row/column definitions into object representations, and concluding with adding pagination. You'll learn a little bit about React and a few simple but effective patterns to build tables that are both extendable and maintainable.

Your columns can be expressed as an array of strings or an array of objects which match the type "ICell". The columns definition is passed to the `cells` prop of the Table component which can take the form of `Array<ICell | string>`. Below is what an ICell looks like.

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

Your rows can be expressed as a multidimentional array of strings, or as an array of objects which match the type "IRow". The rows definition is passed to the `rows` prop of the Table or TableBody component, and can take the form of `Array<IRow | string[]>`. Below is what an IRow looks like.

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

