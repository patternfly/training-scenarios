Now, let's add some data to populate the select, and give it basic event handling like opening, closing, and selecting an option.

3) **Add the following state to the constructor of the App class, below <pre>super(props);</pre>**

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

4) **Add the deconstructed state properties to the top of the App class's render function.** 

<pre class="file" data-target="clipboard">
    const { options, selected, isExpanded } = this.state;
</pre>

5) **Update the select properties with values from the state that was added in step 3.** 
  a. Assign <pre>selected</pre> to <pre>selections</pre>. This variable tells the component what is currently selected.

  b. Assign <pre>isExpanded</pre> to <pre>isExpanded</pre>. This boolean controls if the select menu is expanded.

  c. Replace the text inside of the Select component <pre>(Add options here)</pre> with <pre>{options}</pre>. This list determines what is rendered expanded select menu.
  
  Your component should look as below.
  <pre>
    &lt;Select
      onToggle={Function.prototype}
      onSelect={Function.prototype}
      selections={selected}
      isExpanded={isExpanded}
      placeholderText="Select a state"
    &gt;
      {options}
    &lt;/Select&gt;
  </pre>

6) **Add event handling functions to the component.**
  a. Copy the following <pre>onToggle</pre> function into the constructor of the App class, under the state declaration. This function controls the <pre>isExpanded</pre> property, and thereby when the select menu opens and closes.
    <pre class="file" data-target="clipboard">
      this.onToggle = isExpanded => {
        this.setState({
          isExpanded
        });
      };
    </pre>

  b. Copy the following <pre>onSelect</pre> function into the constructor of the App class, under the <pre>onToggle</pre> function added in step 6a. This function acts as a callback when a select option is clicked, updating the <pre>selected</pre> state property, and thereby what is rendered as selected in the component.
    <pre class="file" data-target="clipboard">
      this.onSelect = (event, selection) => {
        this.setState({
          selected: selection,
          isExpanded: false
        });
      };
    </pre>

7) **Update the select properties with the functions added to the constructor in step 6.**
  a. Assign <pre>this.onToggle</pre> to <pre>onToggle</pre>.

  b. Assign <pre>this.onSelect</pre> to <pre>onSelect</pre>.

  You component should look as below.
  <pre>
    &lt;Select
      onToggle={this.onToggle}
      onSelect={this.onSelect}
      selections={selected}
      isExpanded={isExpanded}
      placeholderText="Select a state"
    &gt;
      {options}
    &lt;/Select&gt;
  </pre>

Now your select is set up! You should be able to open and close the menu, see some basic options, as well as select an option.
