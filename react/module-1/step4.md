Now we'll add content to `CardHead`, `CardActions` and `CardHeader`.

## Task

1) Add a text component to the `CardHeader` component

The text component can wrap any static HTML content you want to place on your page to provide correct formatting when using standard HTML tags. It comes in several variations, such as `h1`, `p`, `a`, `small`, `blockquote`, and `pre`.

In this exercise, we'll be using the `p` variation, which is specified with `component={TextVariants.p}`.

Add the following code to the `CardHeader` component:

<pre class="file" data-target="clipboard">
&lt;CardHeader&gt;
  &lt;Text component={TextVariants.p}&gt;
    Patternfly
  &lt;/Text&gt;
&lt;/CardHeader&gt;
</pre>


2) Add a brand to the `CardHead` component

The brand component is used to place a product logotype on a screen. All you need to provide are the source image or svg and alt text.

<pre class="file" data-target="clipboard">
&lt;CardHead&gt; 
  &lt;Brand src=&quot;https://pf4.patternfly.org/assets/images/pf-logo-small.svg&quot; alt=&quot;Patternfly Logo&quot; /&gt;
  &lt;CardActions&gt;
  &lt;/CardActions&gt;
&lt;/CardHead&gt;
</pre>

3) Add a plain close button to the card component in the `CardAction` component

PatternFly React provides a variety of icons as well as components, layouts, charts, and demos. They're just as easy to use and they compile into svgs. You can use them inside buttons and other components.

<pre class="file" data-target="clipboard">
&lt;CardActions&gt;
  &lt;Button variant=&quot;plain&quot;&gt;
    &lt;TimesIcon /&gt;
  &lt;/Button&gt;
&lt;/CardActions&gt;
</pre>

4) Add a subhead below the "PatternFly" Text component in the `CardHeader` component

TextContent is used to wrap Text components and provides text with extra spacing and styling.

<pre class="file" data-target="clipboard">
&lt;CardHeader&gt;
  &lt;Text component={TextVariants.p}&gt;
    Patternfly
  &lt;/Text&gt;
  &lt;TextContent&gt;
    &lt;Text component={TextVariants.small}&gt;
      Provided by Red Hat
    &lt;/Text&gt;
  &lt;/TextContent&gt;
&lt;/CardHeader&gt;
</pre>

When these steps are complete - the header and card should look like this:
![Step 4 card](module-1/assets/step5.png)