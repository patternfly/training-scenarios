Add content to `CardTitle`.

1) <strong>Add text to the `CardTitle` component.</strong>

a) <strong>Locate the `<CardTitle>` component.</strong>

It will look like this:

<pre class="file">
&lt;CardTitle&gt;
&lt;/CardTitle&gt;
</pre>

b) <strong>Add the `text` component with a variant inside of the `<CardTitle>`.</strong>

The text component can wrap any static HTML content that is placed on the page to provide correct formatting when using standard HTML tags. The text component comes in several variations, such as `h1`, `p`, `a`, `small`, `blockquote`, and `pre`.

Use the `p` variation, which is specified with `component={TextVariants.p}`.

Add the following code inside the `CardTitle` component:

<pre class="file" data-target="clipboard">
&lt;Text component={TextVariants.p}&gt;
  PatternFly
&lt;/Text&gt;
</pre>

c) <strong>Add a subhead below the text added in step 1b.</strong>

`TextContent` is used to wrap `Text` components and provides text with extra spacing and styling.

Add the following code inside of the `Text` component that is inside of the `CardTitle`.

<pre class="file" data-target="clipboard">
  &lt;TextContent&gt;
    &lt;Text component={TextVariants.small}&gt;
      Provided by Red Hat
    &lt;/Text&gt;
  &lt;/TextContent&gt;
</pre>
