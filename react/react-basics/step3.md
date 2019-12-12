Add content to `CardHeader`.

1) <strong>Add text to the `CardHeader` component.</strong>

a) <strong>Locate the `<CardHeader>` component.</strong>

It will look like this:

<pre class="file">
&lt;CardHeader&gt;
&lt;/CardHeader&gt;
</pre>

b) <strong>Add the `text` component with a variant inside of the `<CardHeader>`.</strong>

The text component can wrap any static HTML content that is placed on the page to provide correct formatting when using standard HTML tags. The text component comes in several variations, such as `h1`, `p`, `a`, `small`, `blockquote`, and `pre`.

Use the `p` variation, which is specified with `component={TextVariants.p}`.

Add the following code inside the `CardHeader` component:

<pre class="file" data-target="clipboard">
&lt;Text component={TextVariants.p}&gt;
  PatternFly
&lt;/Text&gt;
</pre>

c) <strong>Add a subhead below the text added in step 1b.</strong>

`TextContent` is used to wrap `Text` components and provides text with extra spacing and styling.

Add the following code inside of the `Text` component that is inside of the `CardHeader`.

<pre class="file" data-target="clipboard">
  &lt;TextContent&gt;
    &lt;Text component={TextVariants.small}&gt;
      Provided by Red Hat
    &lt;/Text&gt;
  &lt;/TextContent&gt;
</pre>
