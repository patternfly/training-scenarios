PatternFly Core is based on the principles of [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [BEM](http://getbem.com/introduction/) (Block, Element, Modifier).

BEM is a popular CSS methodology for building modular, scalable applications. It provides scope, avoids inheritance, and reduces reducing CSS specificity and conflicts. To learn more, visit this [link](http://getbem.com/introduction/).

BEM works perfectly with a modular design system, as each unique component can be represented as an independent block. Since a block is tied to a component, developers are able to develop, move around, and nest components without conflicts in their application’s CSS.

PatternFly uses a modified version of BEM for it’s CSS architecture. Where PatternFly deviates from BEM is in relation to modifiers.

This module will cover how PatternFly uses BEM as a framework for its component library, and will show you how to override and create both global and component level custom properties and component elements.
