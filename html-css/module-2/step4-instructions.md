As we have seen, in order to override variables its important to understand how BEM is used to name them. It’s just as important when creating global variables.

## Workshop: Create a new global custom property for a 5xl font size, and new variation of the title component to use the 5xl global variable

a. Referencing the typography design guidelines (https://www.patternfly.org/v4/design-guidelines/styles/typography), the largest font size we offer is a "Hero title" size at 36px represented by the global variable `pf-global--FontSize--4xl`. On certain customer facing pages of your application, let's assume you have CTA's that need a slightly larger font-size (42px), and you want that available as a variation of the title component (.pf-m-5xl) to reuse throughout your application.

b. First let's start by writing the markup for the title variation you want to use and adding that to the codepen.
`<h1 class="pf-c-title pf-m-5xl">5xl title</h1>`

c. Now let's begin writing the CSS. Start by defining the :root scope where we will place the new global variable for the 42px font size. Place this in the CSS panel in the codepen.
`:root {
}`

d. Next, let's define the global custom property name we will use. Following the existing convention for global font size custom properties, add the following custom property.
`--pf-global--FontSize--5xl`

e. Now you need to create a declaration using the new custom property with the font size you want as the value and add that to your selector.
`:root {
   --pf-global--FontSize--5xl: 42px;
}`

f. Now that you have the var --pf-global--FontSize--5xl available for use throughout your application, let's create a new variation of the title component that uses this new global variable.

g. Referencing the title component documentation (https://www.patternfly.org/v4/documentation/core/components/title), note that the largest modifier size is .pf-m-4xl and that modifier class applies to .pf-c-title. Let's begin by writing the selector that will scope the title variation CSS to the title component and add that to our codepen.
`.pf-c-title {
}`

h. Next we need to create a local custom property in the title component to represent the 5xl variation's font size. Beginning with the component name, let's start writing the custom property
`--pf-c-title`

i. Next add the new modifier
`--pf-c-title--m-5xl`

j. And finally add the property that the custom property represents.
`--pf-c-title--m-5xl--FontSize`

k. Now create a declaration with the global variable you added as the value for your new custom property.
`--pf-c-title--m-5xl--FontSize: var(--pf-global--FontSize--5xl);`
l. Adding that declaration to the codepen, we should have.
.pf-c-title {
  --pf-c-title--m-5xl--FontSize: var(--pf-global--FontSize--5xl);
}

m. Next we need to write a CSS selector for the new 5xl variation. Knowing that the modifier .pf-m-5xl will apply to the title component, let's use the & in SCSS nested inside of .pf-c-title to create .pf-c-title.pf-m-5xl.
.pf-c-title {
  --pf-c-title--m-5xl--FontSize: var(--pf-global--FontSize--5xl);

  &.pf-m-5xl {
  }
}

n. Last all we need to do is create a declaration within the modifier to define the font-size property with a value of the new title component custom property we created for this variation
.pf-c-title {
  --pf-c-title--m-5xl--FontSize: var(--pf-global--FontSize--5xl);
  
  &.pf-m-5xl {
    font-size: var(--pf-c-title--m-5xl--FontSize);
  }
}
