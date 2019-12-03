Now we'll modify our cards.

1) <strong>Add a hover effect to the `card` component.</strong>

PatternFly components, including `card`, can be customized with props. You can add a hover effect to your cards with the `isHoverable` prop.

It should look like this:

<pre class="file" data-target="clipboard">
&lt;Card isHoverable&gt;
</pre>

2) <strong>Change the button in the `CardFooter` element into a blue action button.</strong>

You can change the variant to achieve different types of buttons.

Replace the `CardFooter` component with the following code:

<pre class="file" data-target="clipboard">
&lt;CardFooter&gt;
  &lt;Button variant="primary"&gt;Link to PatternFly&lt;/Button&gt;
&lt;/CardFooter&gt;
</pre>

When these steps are complete, your page should look like this when you hover over a card:

<img src="react-customize/assets/step3.png" alt="Page demo with cards and hover effect" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
