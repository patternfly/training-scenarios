Now we'll add content to `CardHead`, `CardActions`, `CardHeader`, and `CardFooter` to build out our card.

## Task

1) Add a text component to the `CardHeader` component

The text component can wrap any static HTML content you want to place on your page to provide correct formatting when using standard HTML tags. It comes in several variations, such as `h1`, `p`, `a`, `small`, `blockquote`, and `pre`.

In this exercise, we'll be using the `p` variation, which is specified with `component={TextVariants.p}`.

Add the following code to the `CardHeader` component:

<pre class="file" data-target="clipboard">
&lt;Text component={TextVariants.p}&gt;
  Patternfly
&lt;/Text&gt;
</pre>

2) Add a brand to the `CardHead` component

The brand component is used to place a product logotype on a screen. All you need to provide are the source image or svg and alt text.

<pre class="file" data-target="clipboard">
&lt;Brand src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot; /&gt;
</pre>

3) Add a split layout to the `CardFooter` component

PatternFly 4 offers several layout options, including grid, bullseye, and split layouts.

In this exercise, we'll be using a split layout to separate a pair of buttons in the footer of our card. We'll be adding a `<SplitItem>` component inside `<Split>` for each item in the layout.

<pre class="file" data-target="clipboard">
&lt;Split&gt;
  &lt;SplitItem&gt;
  &lt;/SplitItem&gt;
  &lt;SplitItem&gt;
  &lt;/SplitItem&gt;
&lt;/Split&gt;
</pre>

4) Add a button to the first `SplitItem` component

Buttons communicate and trigger actions a user can take in an application or website. They come in several variations, such as `primary`, `secondary`, `danger`, `plain`, and `link`.

We'll be using the `link` variant and adding an `isInline` prop so that the buttons are inline rather than block elements.

<pre class="file" data-target="clipboard">
&lt;Button variant=&quot;link&quot; isInline>Link to PatternFly&lt;/Button&gt;
</pre>

5) Add a second button to the second `SplitItem` component:

<pre class="file" data-target="clipboard">
&lt;Button variant=&quot;link&quot; isInline>Link to home&lt;/Button&gt;
</pre>

6) Add a gutter prop to the `Split` component to add more spacing between the buttons:

<pre class="file" data-target="clipboard">
gutter="md"
</pre>

7) Add a plain close button to the card component in the `CardAction` component

PatternFly React provides a variety of icons as well as components, layouts, charts, and demos. They're just as easy to use and they compile into svgs. You can use them inside buttons and other components.

<pre class="file" data-target="clipboard">
&lt;Button variant=&quot;plain&quot;&gt;
  &lt;TimesIcon /&gt;
&lt;/Button&gt;
</pre>

8) Add a subhead below the "PatternFly" Text component in the `CardHeader` component

TextContent is used to wrap Text components and provides text with extra spacing and styling.

<pre class="file" data-target="clipboard">
&lt;TextContent&gt;
&lt;Text component={TextVariants.small}&gt;
  Provided by Red Hat
&lt;/Text&gt;
&lt;/TextContent&gt;
</pre>
