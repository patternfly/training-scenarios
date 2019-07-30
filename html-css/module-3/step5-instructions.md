# Using utility classes

The main difference between modifiers and utility classes is that modifiers are specific to the component and layout, that is, only that specific component can use the modifiers within its component structure, whereas utility classes can be applied across the entire system.
Patternfly is built so Utilities shouldn’t be required but when you need them they are there. For those instances, utility classes are supplied to assist in allowing minor styling changes without creating the need for adding custom CSS. In some cases, the utility classes use Patternfly’s predefined global variables as the values. E.g. spacing and box-shadow.
Ideally you should consider changing a component variable or global variable before using utility classes. As of now modifier styles ship with the main patternfly package and the utility styles are another package that you can import.

## Task: Use the box-shadow utility
1) Let’s look at the box-shadow utility for example. It’s very possible that when you are developing your product, you need to add in extra box-shadows to components.

2) At this link: https://pf4.patternfly.org/utilities/BoxShadow/examples/ you can see the different box-shadow options.

3) Let's practice adding a box-shadow utility on the clipboard-copy component.

4) To `pf-c-clipboard-copy` add the class `pf-u-box-shadow-sm` next to it. You should now see that the component has a box-shadow around it. 
