Add content to `CardHead`, `CardActions` and `CardHeader`.

1) <strong>Add text to the `CardHeader` component.</strong>

a) <strong>Locate the `<CardHeader>` component.</strong>

It will look like the following:

<pre class="file">
&lt;CardHeader&gt;
&lt;/CardHeader&gt;
</pre>

b) <strong>Add the `text` component with a variant inside of the `<CardHeader>`</strong>

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

2) <strong>Add a brand to the `CardHead` component.</strong>

a) <strong>Locate the `<CardHead>` component.</strong>

It will look like the following:

<pre class="file">
&lt;CardHead&gt;
  &lt;CardActions&gt;
  &lt;/CardActions&gt;
&lt;/CardHead&gt;
</pre>

b) <strong>Add the `brand` component.</strong>

The `brand` component is used to place a product logotype on a screen. All you need to provide is the source image or svg and alt text. Here the PatternFly logo is used.

Insert the `brand` inside of the `CardHead` but before the `CardActions`.

<pre class="file" data-target="clipboard">
  &lt;Brand src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot; /&gt;
</pre>

3) <strong>Add a close button to the `CardActions` component.</strong>

a) <strong>Locate the `<CardActions>` component.</strong>

It will look like this:

<pre class="file">
&lt;CardActions&gt;
&lt;/CardActions&gt;
</pre>

b) <strong>Add the `button` component.</strong>

Buttons communicate and trigger actions a user can take in an application or website. They come in several variations, such as `primary`, `secondary`, `danger`, `plain`, and `link`.

Add a button using the `plain` variant.

<pre class="file" data-target="clipboard">
  &lt;Button variant=&quot;plain&quot;&gt;
  &lt;/Button&gt;
</pre>

c) <strong>Add an icon inside of the button.</strong>

PatternFly React provides a variety of icons. They're easy to use and compile into svgs. Use them inside buttons and other components.

Add a `TimesIcon` so that the card can be closed.

<pre class="file" data-target="clipboard">
  &lt;TimesIcon /&gt;
</pre>

Once the preview reloads, it should look like this:
<img src="react-basics/assets/card-with-header.png" alt="Card with logo, close button, and header" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
