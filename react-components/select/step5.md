Custom display and custom data can be used to customize the `select` options. These are also available for all variants.

Begin with customizing the data. 

To change what data is passed around, and passed back on selection, implement a class that contains any data you wish to persist and a `toString` function, which converts the data in the structure to a string format. This allows the component to internally compare options for filtering, and gives some limited customization for the option's display.

1) **Add a `CustomDataState` class.**

Add the class to the `App.js` file, outside of the App class.

<strong>Note:</strong> This class may contain any amount of properties, and these will be passed back as data when an option is selected. The `toString` function tells the select component how to display and compare the data as a string.

<pre class="file" data-target="clipboard">
class CustomDataState {
  constructor(name, abbreviation, capital, founded) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.capital = capital;
    this.founded = founded;
  }
  toString = () =>
    `${this.name} (${this.abbreviation}) - Founded: ${this.founded}`;
}
</pre>

2) **Replace the state's `options` property.**

Replace the property with the following array that uses `CustomDataState`. The state is located in the App class constructor.

<pre class="file" data-target="clipboard">
options: [
  &lt;SelectOption
    value={new CustomDataState("Alabama", "AL", "Montgomery", 1846)}
  /&gt;,
  &lt;SelectOption
    value={new CustomDataState("Florida", "FL", "Tailahassee", 1845)}
  /&gt;,
  &lt;SelectOption
    value={new CustomDataState("New Jersey", "NJ", "Trenton", 1787)}
  /&gt;
]
</pre>

3) **Edit the state's `options` property to use a custom display.**

Replace the property with the following array, or edit the `children` property of each option.

Instead of using the `toString` function in `CustomDataState`, the `select` component will display and filter options based on the `children` property.

<pre class="file" data-target="clipboard">
options: [
  &lt;SelectOption
    value={new CustomDataState("Alabama", "AL", "Montgomery", 1846)}
  &gt;
    Alabama / AL
  &lt;/SelectOption&gt;,
  &lt;SelectOption
    value={new CustomDataState("Florida", "FL", "Tailahassee", 1845)}
  &gt;
    Florida / FL
  &lt;/SelectOption&gt;,
  &lt;SelectOption
    value={new CustomDataState("New Jersey", "NJ", "Trenton", 1787)}
  &gt;
    New Jersey / NJ
  &lt;/SelectOption&gt;
]
</pre>

New values are being displayed, and the typeahead filtering will match based on this display. In the case of HTML structures passed as a child, the component will convert the structure to a string for filtering.

Once the preview reloads, it should look like this:
<img src="select/assets/select-custom-display.png" alt="select menu with custom display text" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
