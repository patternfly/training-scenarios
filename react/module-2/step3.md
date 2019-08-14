Now we'll add content to our cards.

## Task

1) Make sure the App.js file is still open

2) Locate the code that looks like the following:

<pre class="file">
&lt;Card&gt;
  &lt;CardBody&gt;This is a card&lt;/CardBody&gt;
&lt;/Card&gt;
</pre>

3) Replace that section with the following code:

<pre class="file" data-target="clipboard">
&lt;Card&gt;
  &lt;CardHead&gt;
    &lt;Brand src="https://pf4.patternfly.org/assets/images/pf-logo-small.svg" alt="Patternfly Logo" /&gt;
    &lt;CardActions&gt;
    &lt;Button variant="plain"&gt;
    &lt;TimesIcon /&gt;
    &lt;/Button&gt;
    &lt;/CardActions&gt;
  &lt;/CardHead&gt;
  &lt;CardHeader&gt;
    &lt;Text component={TextVariants.p}&gt;
      PatternFly
    &lt;/Text&gt;
    &lt;TextContent&gt;
      &lt;Text component={TextVariants.small}&gt;
        Provided by Red Hat
      &lt;/Text&gt;
    &lt;/TextContent&gt;
  &lt;/CardHeader&gt;
  &lt;CardBody&gt;
    PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
  &lt;/CardBody&gt;
  &lt;CardFooter&gt;
    &lt;Button variant="link" isInline>Link to PatternFly&lt;/Button&gt;
  &lt;/CardFooter&gt;
&lt;/Card&gt;
</pre>

Once the preview reloads - it should look like this:

<img src="module-2/assets/step2.png" alt="Page demo with cards" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
