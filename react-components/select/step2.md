Now, let's add some data to populate the select, and give it basic event handling like opening, closing, and selecting an option.

1) **Add the following state to the constructor of the App class, below `super(props);`**

<pre class="file" data-target="clipboard">
  this.state = {
    options: [
      &lt;SelectOption value="Alabama" /&gt;,
      &lt;SelectOption value="Florida" /&gt;,
      &lt;SelectOption value="New Jersey" /&gt;,
      &lt;SelectOption value="New Mexico" /&gt;,
      &lt;SelectOption value="New York" /&gt;,
      &lt;SelectOption value="North Carolina" /&gt;
    ],
    selected: null,
    isExpanded: false
  };
</pre>

2) **Add the deconstructed state properties to the top of the App class's render function.** 

<pre class="file" data-target="clipboard">
    const { options, selected, isExpanded } = this.state;
</pre>

3) **Update the select properties with values from the state that was added in step 3.** 

a. Assign `selected` to `selections`. This variable tells the component what is currently selected.

b. Assign `isExpanded` to `isExpanded`. This boolean controls if the select menu is expanded.

c. Replace the text inside of the Select component `(Add options here)` with `{options}`. This list determines what is rendered expanded select menu.

Your component should look as below.
```
<Select 
  onToggle={Function.prototype} 
  onSelect={Function.prototype} 
  selections={selected} 
  isExpanded={isExpanded} 
  placeholderText="Select a state"
>
  {options}
</Select>
```

4) **Add event handling functions to the component.**

  a. Copy the following `onToggle` function into the constructor of the App class, under the state declaration. This function controls the `isExpanded` property, and thereby when the select menu opens and closes.
    <pre class="file" data-target="clipboard">
      this.onToggle = isExpanded => {
        this.setState({
          isExpanded
        });
      };
    </pre>

  b. Copy the following `onSelect` function into the constructor of the App class, under the `onToggle` function added in step 6a. This function acts as a callback when a select option is clicked, updating the `selected` state property, and thereby what is rendered as selected in the component.
    <pre class="file" data-target="clipboard">
      this.onSelect = (event, selection) => {
        this.setState({
          selected: selection,
          isExpanded: false
        });
      };
    </pre>

5) **Update the select properties with the functions added to the constructor in step 6.**

a. Assign `this.onToggle` to `onToggle`.

b. Assign `this.onSelect` to `onSelect`.

You component should look as below.
```
<Select 
  onToggle={this.onToggle} 
  onSelect={this.onSelect} 
  selections={selected} 
  isExpanded={isExpanded} 
  placeholderText="Select a state"
>
  {options}
</Select>
```

Now your select is set up! You should be able to open and close the menu, see some basic options, as well as select an option.
