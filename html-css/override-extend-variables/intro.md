<strong>In this module, you will learn how to override and extend PatternFly css in the context of your application to accomodate your custom designs.</strong>

In PatternFly, the values that are assigned to css properties use custom properties (which are also referred to as variables in the source code and documentation for PatternFly).

PatternFly utilizes variables to create a two-layer theming system, where global variables inform component variables. Global variables represent concepts, like font size and spacer, and are used to provide consistency throughout the design system. Component variables are defined using global variables, and are used to provide consistency across all instances of the component.

This approach improves maintainability of the system, but also facilitates re-theming by consumers who are using the design system. This module illustrates some of the ways that variables can be modified to customize the design system.