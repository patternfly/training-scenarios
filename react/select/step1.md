The PatternFly React library provides a collection of React components you can use to build interfaces with consistent markup, styling, and behavior. In this course, we're going to build a PatternFly select component together - starting with the single select variant, and then expanding the example using the typeahead select variant and adding some customization.

Let's create a basic select component.

1. Navigate to the `src` folder and open `src/App.js`{{open}}

2. Copy the following code into the App.js file, replacing all of the content in the file:

<pre class="file" data-filename="App.js" data-target="replace">
import * as React from &quot;react&quot;;
import * as ReactDOM from &quot;react-dom&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Select, SelectOption } from &quot;@patternfly/react-core&quot;;
class App extends React.Component {
  render() {
    return (
      &lt;React.Fragment&gt;
        &lt;Select onToggle={Function.prototype} onSelect={Function.prototype} selections={null} isExpanded={false} placeholderText="Select a state"&gt;
          //options
        &lt;/Select&gt;
      &lt;/React.Fragment&gt;
    );
  }
};
export default App;
</pre>

Now, let's add some data to populate the select, and give it basic event handling like opening, closing, and selecting an option.

3. Add the following code into the App class:

<pre class="file" data-target="clipboard">
  state = {
    options: [
      &lt;SelectOption value="Alabama"&gt;,
      &lt;SelectOption value="Florida"&gt;,
      &lt;SelectOption value="New Jersey"&gt;,
      &lt;SelectOption value="New Mexico"&gt;,
      &lt;SelectOption value="New York"&gt;,
      &lt;SelectOption value="North Carolina"&gt;
    ],
    selected: null,
    isExpanded: false
  };
</pre>

4. And add this following code into the render method of the App class:

<pre class="file" data-target="clipboard">
    const { options, selected, isExpanded } = this.state;
</pre>

5. Next, update the respective properties to use these state variables. Replace the null of selections with selected, the false of isExpanded with isExpanded, and add {options} below the comment within the Select component. Your component should look as below.

<pre>
  &lt;Select
    onToggle={Function.prototype}
    onSelect={Function.prototype}
    selections={selected}
    isExpanded={isExpanded}
    placeholderText="Select a state"
  &gt;
    //options
    {options}
  &lt;/Select&gt;
</pre>

6. To add event handling to the component, copy the following methods to the App class:

<pre class="file" data-target="clipboard">
  onToggle = isExpanded => {
    this.setState({
      isExpanded
    });
  };

  onSelect = (event, selection) => {
    this.setState({
      selected: selection,
      isExpanded: false
    });
  };
</pre>

7. And finally, replace the onToggle and onSelect function prototypes with these two new methods, as shown below.

<pre class="file" data-target="clipboard">
  onToggle={this.onToggle}
  onSelect={this.onSelect}
</pre>

Now your select is set up! You should be able to open and close the menu, see some basic options, as well as select an option.
