The Flex Layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value that is applied to flex items.

##Task: Use the flex layout to layout items in the card

a. Add the class `pf-l-flex` to the parent container.

b. Also add `pf-m-column` to the container with `pf-l-flex` so that all child elements are positioned vertically in the container. This will also apply a margin-bottom to each child.

c. For each child `<div>` also apply the pf-l-flex class to the container so that they each get the flex layout applied to them. 

d. For the first `<div>` child add the class `pf-m-column` so that it displays as image and then text below it.

e. To the rest of the `<div>'s` add `pf-m-row`, so that the contents inside of those divs display horizontally.

f. Go back to the first child `<div>` and add `pf-m-grow`, so that container will now grow to fill the available space.
