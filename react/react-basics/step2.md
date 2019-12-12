Add content to the `CardHead` component.

1) <strong>Add a brand to the `CardHead` component.</strong>

a) <strong>Locate the `<CardHead>` component.</strong>

It will look like this:

<pre class="file">
&lt;CardHead&gt;
  &lt;CardActions&gt;
  &lt;/CardActions&gt;
&lt;/CardHead&gt;
</pre>

b) <strong>Add the `brand` component.</strong>

The `brand` component is used to place a product logotype on a screen. All that is needed is the source image or SVG and alt text. Here the PatternFly logo is used.

Insert the `brand` inside of the `CardHead` but before the `CardActions`.

<pre class="file" data-target="clipboard">
  &lt;Brand src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot; /&gt;
</pre>

2) <strong>Add a close button to the `CardActions` component.</strong>

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

PatternFly React provides a variety of icons. They're easy to use and compile into SVG files. Use them inside buttons and other components.

Add a `TimesIcon` so that the card can be closed.

<pre class="file" data-target="clipboard">
  &lt;TimesIcon /&gt;
</pre>
