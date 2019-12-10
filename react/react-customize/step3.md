Next modify the cards.

1) <strong>Add a hover effect to the `card` component.</strong>

PatternFly components, including `card`, can be customized with props. Add a hover effect to the cards with the `isHoverable` prop.

It should look like this:

<pre class="file" data-target="clipboard">
&lt;Card isHoverable&gt;
</pre>

2) <strong>Change the button in the `CardFooter` element into a blue action button.</strong>

Change the variant to achieve different types of buttons.

Inside the `CardFooter` component, replace the current variant on the button with the `primary` variant, and remove the `isLine` prop.

The code should look like the following:

<pre class="file" data-target="clipboard">
&lt;CardFooter&gt;
  &lt;Button variant="primary"&gt;Link to PatternFly&lt;/Button&gt;
&lt;/CardFooter&gt;
</pre>

Once the preview reloads, the page should look like this when hovering over a card:

<img src="react-customize/assets/step3.png" alt="Page demo with cards and hover effect" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
